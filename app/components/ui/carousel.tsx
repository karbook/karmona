
"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import AutoScroll, { type AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import { cn } from "@/utils/misc";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];


type CarouselProps = {
  opts?: CarouselOptions;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  autoScroll?: boolean;
  autoScrollOptions?: AutoScrollOptionsType;
  onIndexChange?: (index: number) => void;
  mousewheel?: boolean;
  instantScroll?: boolean;
  autoplayNext?: boolean;
  autoplayNextDelay?: number;


};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  currentIndex: number;
} & Omit<CarouselProps, 'onIndexChange' | 'mousewheel' | 'instantScroll'>;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps & {
    autoplayNext?: boolean;
    autoplayNextDelay?: number;
  }
>(

  (
 {
  orientation = "horizontal",
  opts,
  setApi,
  autoScroll = false,
  autoScrollOptions,
  autoplayNext = false,
  autoplayNextDelay = 3000,
  className,
  children,
  onIndexChange,
  mousewheel = false,
  instantScroll = false,
  ...props
}
,
    ref
  ) => {

    const plugins = React.useMemo(() => {
      const activePlugins = [];

      if (autoScroll) {
        activePlugins.push(AutoScroll(autoScrollOptions ?? { speed: 2, startDelay: 0, stopOnInteraction: true }));
      }

      if (mousewheel) {
        activePlugins.push(WheelGesturesPlugin());
      }

      return activePlugins;
    }, [autoScroll, autoScrollOptions, mousewheel]);

    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        loop: opts?.loop ?? false,
        duration: instantScroll ? 0 : opts?.duration,
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const onSelect = React.useCallback(
      (api: CarouselApi) => {
        if (!api) {
          return;
        }

        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
        setCurrentIndex(api.selectedScrollSnap());
        onIndexChange?.(api.selectedScrollSnap());
      },
      [onIndexChange]
    );

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
React.useEffect(() => {
  if (!api || !autoplayNext) return;

  const timer = setInterval(() => {
    api.scrollNext(); // como si presionaras "Next"
  }, autoplayNextDelay ?? 3000); // delay por defecto de 3s

  return () => clearInterval(timer);
}, [api, autoplayNext, autoplayNextDelay]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          currentIndex,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "" : "flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "default", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Icon name="arrow-left" className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "default", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Icon name="arrow-right" className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
