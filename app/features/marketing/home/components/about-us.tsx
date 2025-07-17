import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@/components/ui/icon";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { details } from "../constants";
import { motion } from "framer-motion";
import { cardVariants } from "@/components/ui/card-animation";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const karmonaVideoHistory = '/images/karmona-projects-content/karmona-history-6KUIREJB.mp4';
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const { t } = useTranslation();

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
        >
            <motion.section
                variants={cardVariants}
                id="aboutus" className="bg-white dark:bg-[#030917] px-6 sm:px-6 mb-20 mt-20 mt-5 lg:px-24 text-gray-900 dark:text-white animate-fade-in-up scroll-mt-50 sm:scroll-mt-50 lg:scroll-mt-55">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-5xl sm:text-7xl font-bold">{t("About Us")}</h2>
                    <p className="max-w-7xl mx-auto text-base sm:text-xl lg:text-2xl font-semibold mb-2 mt-10">
                        {t("We are pleased to share the essence and values that define us as an organization. Our history, mission, and core values guide us at every step, and we are proud to present a glimpse of who we are and what we represent.")}
                    </p>
                </div>
                <div className="mx-auto flex flex-col md:flex-row gap-12 items-start justify-center">
                    <div className="w-full md:w-6/12 lg:w-[40%] rounded-3xl overflow-hidden shadow-2xl bg-black flex items-center justify-center border-8 border-white dark:border-white animate-float animate-inner-glow-border h-[500px]">
                        <video
                            className="w-full h-full object-cover aspect-video"
                            src={karmonaVideoHistory}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                    <Tabs defaultValue="karmona" className="flex flex-col w-full md:w-5/12 lg:w-[50%] align-center items-center">
                        <TabsList
                            className="
                                flex flex-col sm:flex-row
                                gap-2 sm:gap-x-4 gap-y-6
                                mt-6 mb-6
                                bg-transparent
                                px-2 sm:px-0
                                mb-40 sm:mb-40 lg:mb-10
                                mt-30 md:mt-0 lg:mt-0
                            "
                        >
                            {details.map((detail) => (
                                <TabsTrigger
                                    key={detail.value}
                                    value={detail.value}
                                 className={`
                                    sm:w-auto
                                    py-6 px-3 sm:py-6 sm:px-8
                                    text-3xl sm:text-2xl
                                    text-left sm:text-center
                                    align-center relative group
                                    rounded-4xl font-semibold
                                    transition-colors duration-300 ease-in-out
                                    dark:text-white hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer

                                    before:content-[''] before:absolute before:inset-0
                                    before:bg-black dark:before:bg-[#fdf6e9]
                                    before:rounded-4xl before:z-0
                                    before:origin-left before:scale-x-0
                                    before:transition-transform before:duration-300 before:ease-out

                                    data-[state=active]:text-white dark:data-[state=active]:text-[#030917]
                                    data-[state=active]:shadow-md
                                    data-[state=active]:before:scale-x-100
                                    `}

                                >
                                    <span className="relative z-10 block">{t(detail.title)}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {details.map((detail) => (
                            <TabsContent
                                key={detail.value}
                                value={detail.value}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                                    setHovering(true);
                                }}
                                onMouseLeave={() => setHovering(false)}
                                className={`
                                group relative w-full
                                rounded-xl
                                bg-transparent
                                border border-gray-300 dark:border-gray-700
                                shadow-[0_8px_24px_rgba(0,0,0,0.15)]
                                hover:shadow-[0_12px_36px_rgba(0,0,0,0.25)]
                                p-6 sm:p-6 lg:p-6
                                min-h-[400px]
                                text-black dark:text-white
                                transition-all duration-300
                                data-[state=inactive]:hidden
                                overflow-hidden
                                flex flex-col justify-center
                                `}
                            >
                                <div
                                    className="w-full absolute inset-0 pointer-events-none z-0"
                                    style={{
                                        filter: `blur(${hovering ? 60 : 0}px)`,
                                        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(12, 142, 244, 0.35) 5%, transparent 75%)`,
                                        opacity: hovering ? 1 : 0,
                                        transition: "opacity 0.5s ease-out, filter 0.5s ease-out, background 0.4s ease-out",
                                    }}
                                />

                                <div className="absolute -top-2 -right-4 z-10 overflow-visible text-[#cbd5e1] dark:text-[#cbd5e1] transition-all duration-300 group-hover:text-[#475569] group-hover:-translate-y-1 group-hover:-rotate-8">
                                    <Icon name={detail.icon} size="5xl" />
                                </div>
                                <div className="space-y-4 relative z-10">
                                    <h3 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 mt-20 md:mt-5 lg:mt-5 md:mb-0 lg:mb-0 text-center">
                                        {detail.value === "karmona"
                                            ? t("Karmona")
                                            : detail.value === "mission"
                                                ? t("Our Mission")
                                                : detail.value === "vision"
                                                    ? t("Our Vision")
                                                    : t("Our Legacy")}
                                    </h3>

                                    {detail.value === 'history' && Array.isArray(detail.content) ? (
                                        <Carousel opts={{
                                            align: 'start',
                                            loop: false,
                                        }}
                                            mousewheel={true}
                                            className="w-full max-w-5xl mx-auto overflow-hidden">
                                            <CarouselContent className="flex gap-10 pl-8 pr-4 md:pl-9 md:pr-8 lg:pl-9 lg:pr-8">
                                                {detail.content.map((slide, i) => (
                                                    <CarouselItem
                                                        key={i}
                                                        className="
                                                            basis-full sm:basis-[49%]
                                                            h-[345px]
                                                            mt-6 lg:mt-8 mb-8
                                                            flex flex-col items-center text-center space-y-2
                                                            bg-transparent dark:bg-[transparent]
                                                            rounded-3xl border border-gray-500 dark:border-gray-700
                                                            shadow-sm p-6

                                                        "
                                                    >
                                                        {slide.icon && (
                                                            <div className="mb-4 text-gray-700 dark:text-gray-300">
                                                                <Icon name={slide.icon} size="4xl" />
                                                            </div>
                                                        )}
                                                        <h4 className="text-lg sm:text-xl font-bold text-[#475569]">{slide.date}</h4>
                                                        <h5 className="text-xl sm:text-2xl font-bold text-black dark:text-white">{t(slide.headline)}</h5>
                                                        <p className="text-lg sm:text-xl text-black dark:text-[#8a9baf]">{t(slide.description)}</p>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                        </Carousel>
                                    ) : (
                                        detail.content
                                            .toString()
                                            .split('||')
                                            .map((paragraph, i) => (
                                                <p
                                                    key={i}
                                                    className="
                                                        text-lg sm:text-2xl lg:mt-10 font-custom text-black dark:text-[#8a9baf]
                                                        text-center mx-auto max-w-2xl
                                                    "
                                                >
                                                    {t(paragraph)}
                                                </p>
                                            ))
                                    )}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </motion.section>
        </motion.div>
    );
}