import { useState, useRef } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import type { AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import { carLogos } from '../constants';
export default function Cars() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const emblaApiCarouselTop = useRef<CarouselApi | null>(null);
    const emblaApiCarouselBottom = useRef<CarouselApi | null>(null);

    const autoScrollOptionsTop: Partial<AutoScrollOptionsType> = {
        speed: 4,
        startDelay: 800,
        stopOnInteraction: false,
        direction: "backward",
    };

    const autoScrollOptionsDown: Partial<AutoScrollOptionsType> = {
        speed: 4,
        startDelay: 800,
        stopOnInteraction: false,
        direction: "forward",
    };
    const numRepetitions = 6;
    const repeatedLogos = Array.from({ length: numRepetitions }, (_, index) =>
        carLogos.map((logo) => ({
            ...logo,
            id: `${logo.id}-${index}`,
            src: `/images/car-brands/${logo.file}`,
        }))
    ).flat();

    const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };


    return (
        <section id='cars'
            className="overflow-hidden relative py-14 sm:py-28 scroll-mt-25"
            onMouseMove={handleSectionMouseMove}>
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    filter: 'blur(200px)',
                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(12, 142, 244, 0.3) 10%, transparent 60%)`,
                }}
            />
            <div className="relative z-10">
                <h2 className="text-6xl sm:text-7xl font-bold text-center mb-6 px-4">
                    Reparamos todo tipo de Autos
                </h2>
                <p className="text-xl sm:text-2xl text-center max-w-7xl mx-auto mb-10 px-4">
                    En Karmona, nos enorgullece ofrecer servicios de reparación integral para todo tipo de autos, desde vehículos compactos hasta SUVs y camionetas. Nuestro equipo de técnicos altamente capacitados está preparado para abordar una amplia variedad de problemas mecánicos y brindar soluciones efectivas para mantener su vehículo en óptimas condiciones.
                </p>
                <section className="overflow-hidden relative py-5 sm:py-10">
                    <Carousel
                        className="w-full relative z-20 animate-fadeIn"
                        setApi={(api) => (emblaApiCarouselTop.current = api)}
                        opts={{ loop: true }}
                        autoScroll={true}
                        autoScrollOptions={autoScrollOptionsTop}
                    >
                        <CarouselContent className="flex whitespace-nowrap relative -ml-8 sm:-ml-18">
                            {repeatedLogos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="basis-[20%] sm:basis-auto shrink-0 grow-0 mt-5 mb-5 px-8 sm:px-16 flex justify-center items-center relative opacity-70 hover:opacity-100 transition-opacity duration-300"
                                >
                                    <img
                                        src={logo.src}
                                        alt={`Logo ${logo.file.replace('.svg', '')}`}
                                        width={120}
                                        height={60}
                                        className="h-30 sm:h-30 w-auto object-contain"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </section>

                <section className="overflow-hidden relative py-5 sm:py-10">
                    <Carousel
                        className="w-full relative z-20 animate-fadeIn"
                        setApi={(api) => (emblaApiCarouselBottom.current = api)}
                        opts={{ loop: true }}
                        autoScroll={true}
                        autoScrollOptions={autoScrollOptionsDown}
                    >
                        <CarouselContent className="flex whitespace-nowrap relative -ml-8 sm:-ml-18">
                            {repeatedLogos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="basis-[20%] sm:basis-auto shrink-0 grow-0 mt-5 mb-5 px-8 sm:px-16 flex justify-center items-center relative"
                                >
                                    <img
                                        src={logo.src}
                                        alt={`Logo ${logo.file.replace('.svg', '')}`}
                                        width={120}
                                        height={60}
                                        className="h-12 sm:h-30 w-auto object-contain"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </section>
            </div>
        </section>
    );
}