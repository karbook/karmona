import { useState, useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import type { CarouselApi } from '@/components/ui/carousel'
import type { AutoScrollOptionsType } from 'embla-carousel-auto-scroll'
import { carLogos } from '../constants'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/icon'
import { motion } from 'framer-motion'
import { cardVariants } from '@/components/ui/card-animation'

export default function Cars() {
  const { t } = useTranslation()
  const [isMouseInside, setIsMouseInside] = useState(false)
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })
  const emblaApiCarouselTop = useRef<CarouselApi | null>(null)
  const emblaApiCarouselBottom = useRef<CarouselApi | null>(null)

  const autoScrollOptionsTop: Partial<AutoScrollOptionsType> = {
    speed: 4,
    startDelay: 800,
    stopOnInteraction: false,
    direction: 'backward',
  }

  const autoScrollOptionsDown: Partial<AutoScrollOptionsType> = {
    speed: 3,
    startDelay: 800,
    stopOnInteraction: false,
    direction: 'forward',
  }

  const numRepetitions = 6
  const repeatedLogos = Array.from({ length: numRepetitions }, (_, index) =>
    carLogos.map((logo) => ({ ...logo, id: `${logo.id}-${index}` }))
  ).flat()

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouseCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    if (!isMouseInside) setIsMouseInside(true)
  }

  const handleSectionMouseLeave = () => {
    setIsMouseInside(false)
  }

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div id="cars" className="scroll-mt-35 sm:scroll-mt-40" />
      <motion.section
        variants={cardVariants}
        className="mt-20 relative overflow-hidden"
        onMouseMove={handleSectionMouseMove}
        onMouseLeave={handleSectionMouseLeave}
      >
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            opacity: isMouseInside ? 1 : 0,
            background: `radial-gradient(circle at ${mouseCoords.x}px ${mouseCoords.y}px, rgba(12, 142, 244, 0.2) 10%, transparent 60%)`,
            backdropFilter: isMouseInside ? 'blur(15px)' : 'blur(0px)',
            transition: 'opacity 0.4s ease-out, backdrop-filter 0.4s ease-out',
          }}
        />
        <div className="relative z-20">
          <motion.h2 className="text-4xl sm:text-7xl mt-20 font-bold text-center mb-6 px-4">
            {t('We repair all types of cars')}
          </motion.h2>
          <motion.p className="text-lg sm:text-2xl text-center font-semibold max-w-7xl mx-auto mb-10 px-4">
            {t(
              'At Karmona, we take pride in offering comprehensive repair services for all types of cars, from compact vehicles to SUVs and trucks. Our team of highly trained technicians is ready to tackle a wide variety of mechanical issues and provide effective solutions to keep your vehicle in optimal condition.'
            )}
          </motion.p>

          <section className="overflow-hidden relative py-5 sm:py-10">
            <Carousel
              className="w-full relative z-20"
              setApi={(api) => (emblaApiCarouselTop.current = api)}
              opts={{ loop: true }}
              autoScroll
              autoScrollOptions={autoScrollOptionsTop}
            >
              <CarouselContent className="flex whitespace-nowrap relative -ml-8 sm:-ml-18">
                {repeatedLogos.map((carLogo) => (
                  <CarouselItem
                    key={carLogo.id}
                    className="basis-1/3 sm:basis-auto shrink-0 grow-0 mt-2 mb-2 px-1 sm:px-1 flex justify-center items-center relative"
                  >
                    <Icon
                      name={carLogo.icon}
                      className="h-15 w-auto sm:h-[120px] object-contain transition-all duration-300 dark:text-white"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </section>
          <section className="overflow-hidden relative py-5 sm:py-10">
            <Carousel
              className="w-full relative z-20"
              setApi={(api) => (emblaApiCarouselBottom.current = api)}
              opts={{ loop: true }}
              autoScroll
              autoScrollOptions={autoScrollOptionsDown}
            >
              <CarouselContent className="flex whitespace-nowrap relative -ml-8 sm:-ml-18">
                {repeatedLogos.map((carLogo) => (
                  <CarouselItem
                    key={carLogo.id}
                    className="basis-1/3 sm:basis-auto shrink-0 grow-0 mt-2 mb-2 px-1 sm:px-1 flex justify-center items-center relative"
                  >
                    <Icon
                      name={carLogo.icon}
                      className="h-15 w-auto sm:h-[120px] object-contain transition-all duration-300 dark:text-white"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </section>
        </div>
      </motion.section>
    </motion.div>
  )
}
