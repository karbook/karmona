'use client';

import { useState, useRef } from 'react';
import { services, carLogos } from '../constants';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/icon';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import type { AutoScrollOptionsType } from "embla-carousel-auto-scroll";

export default function ServicesWithBrandCarousel() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const emblaApiCarousel1 = useRef<CarouselApi | null>(null);
    const emblaApiCarousel2 = useRef<CarouselApi | null>(null);

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
            src: `/images/autos/${logo.file}`,
        }))
    ).flat();

    const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };



    const displayedServices = showAll ? services : services.slice(0, 6);

    return (
        <>
            <section id='services' className="py-12 px-6 max-w-[1600px] mx-auto scroll-mt-20">
                <h2 className="text-6xl font-bold text-center mb-10 fade-in-up delay-400">Servicios</h2>
                <p className="text-3xl text-center max-w-6xl mx-auto mb-12 fade-in-up delay-400">
                    En nuestro taller automotriz, nos enorgullece ofrecer una amplia gama de servicios diseñados para mantener, reparar y mejorar el rendimiento de su vehículo.
                </p>

                <motion.div
                    layout
                    className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
                >
                    <AnimatePresence initial={false}>
                        {displayedServices.map((service, i) => {
                            const isActive = activeIndex === i;

                            return (
                                <motion.div
                                    key={service.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    onClick={() => setActiveIndex(isActive ? null : i)}
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        setMousePos({
                                            x: e.clientX - rect.left,
                                            y: e.clientY - rect.top,
                                        });
                                        setHoveredIndex(i);
                                    }}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`
                                        relative overflow-hidden min-h-[480px] w-full p-6 cursor-pointer rounded-lg shadow-md
                                        flex flex-col justify-center group
                                        border ${isActive ? 'bg-black text-white border-gray-500' : 'bg-white dark:bg-[#030917] border-gray-300 dark:border-gray-600'}
                                        hover:shadow-lg transition-all duration-300
                                    `}
                                >
                                    {hoveredIndex === i && (
                                        <div
                                            className="absolute inset-0 pointer-events-none z-0"
                                            style={{
                                                filter: 'blur(100px)',
                                                background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(12, 142, 244, 0.5) 10%, transparent 40%)`,
                                            }}
                                        />
                                    )}

                                    <div className="absolute -top-7 -right-5 z-0 transition-transform duration-500 ease-in-out group-hover:-rotate-12">
                                        <Icon
                                            name={service.icon}
                                            size="6xl"
                                            className="text-[#cbd5e1] dark:text-[#cbd4e1]"
                                        />
                                    </div>
                                    <h3
                                        className={`text-3xl text-center font-semibold mb-3 ${isActive ? 'text-white' : 'text-[#334155] dark:text-white'
                                            } relative z-10`}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        className={`text-2xl text-center ${isActive ? 'text-gray-200' : 'text-[#475569] dark:text-[#94a3b8]'
                                            } relative z-10`}
                                    >
                                        {isActive ? service.info : service.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {services.length > 6 && (
                    <div className="text-center">
                        <Button
                            variant="black"
                            onClick={() => setShowAll(!showAll)}
                            className="transition-all duration-300 hover:scale-105"
                        >
                            {showAll ? 'Ver menos' : 'Ver más'}
                        </Button>
                    </div>
                )}
            </section>

            <section id='cars' 
                className="overflow-hidden relative py-14 sm:py-28 scroll-mt-25"
                onMouseMove={handleSectionMouseMove}
            >
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
                            setApi={(api) => (emblaApiCarousel1.current = api)}
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
                                            className="h-12 sm:h-24 w-auto object-contain"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </section>

                    <section className="overflow-hidden relative py-5 sm:py-10">
                        <Carousel
                            className="w-full relative z-20 animate-fadeIn"
                            setApi={(api) => (emblaApiCarousel2.current = api)}
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
                                            className="h-12 sm:h-24 w-auto object-contain"
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </section>
                </div>
            </section>
        </>
    );
}