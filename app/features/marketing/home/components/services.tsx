'use client';

import { useState, useRef } from 'react';
import { services } from '../constants';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/components/ui/icon';
import { cardVariants } from '@/components/ui/card-animation';
import { useTranslation } from 'react-i18next';
export default function ServicesWithBrandCarousel() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const displayedServices = showAll ? services : services.slice(0, 6);
    const { t } = useTranslation();

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
        >
            <motion.section
                variants={cardVariants}
                id='services' className="py-12 px-6 max-w-[1600px] mx-auto scroll-mt-34">
                <h2 className="text-6xl font-bold text-center mb-10 fade-in-up delay-400">{t("Services")}</h2>
                <p className="text-3xl text-center max-w-6xl mx-auto mb-12 fade-in-up delay-400">
                    {t("In our automotive workshop, we take pride in offering a wide range of services designed to maintain, repair, and enhance the performance of your vehicle.")}
                </p>

                <motion.div
                    layout
                    className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
                >
                    <AnimatePresence initial={false}>
                        {displayedServices.map((service, i) => {
                            const isActive = activeIndex === i;
                            const isHovered = hoveredIndex === i;

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
                                    <div
                                        className="absolute inset-0 pointer-events-none z-0"
                                        style={{
                                            filter: 'blur(100px)',
                                            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(12, 142, 244, 0.5) 10%, transparent 40%)`,
                                            opacity: isHovered ? 1 : 0,
                                            transition: 'opacity 0.4s ease-out',
                                        }}
                                    />

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
                                        {t(service.title)}
                                    </h3>
                                    <p
                                        className={`text-2xl text-center ${isActive ? 'text-gray-200' : 'text-[#475569] dark:text-[#94a3b8]'
                                            } relative z-10`}
                                    >
                                      {t(isActive ? service.info : service.description)}
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
            </motion.section>

        </motion.div>
    );
}