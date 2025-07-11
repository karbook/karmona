"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "@/components/ui/card-animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Club() {
  const { t } = useTranslation();
  const mainVideoUrl =
    "/images/karmona-projects-content/karmona-video-FBTHMESM.mp4";
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="w-screen overflow-hidden">
        <main className="w-full h-[820px]  flex items-center justify-center">
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              src={mainVideoUrl}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </main>
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full"
      >
        <motion.section
          variants={cardVariants}
          id="start"
          className="w-full bg-white dark:bg-[#030917] flex flex-col items-center text-center py-12 sm:py-16 scroll-mt-40"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
            {t("Karmona Automotriz")}
          </h2>
          <div className="w-full max-w-[95%] sm:max-w-[1300px] h-[200px] sm:h-[700px] rounded-[28px] border-2 border-white dark:border-white shadow-[0_0_12px_rgba(255,255,255,0.15)] overflow-hidden">
            <Carousel
              className="w-full h-full"
              opts={{ align: "center", loop: true }}
              autoplayNext
              autoplayNextDelay={3000}
              onIndexChange={handleIndexChange}
            >
              <CarouselContent className="flex h-full gap-0">
                {[
                  <img
                    key="img-1"
                    src="/images/team-karmona/karmona-team-XDXJGO4H.webp"
                    alt="Equipo Karmona 1"
                    className="w-full h-full object-cover"
                  />,
                  <img
                    key="img-2"
                    src="/images/team-karmona/karmona-team-BAPWJSBV.webp"
                    alt="Equipo Karmona 2"
                    className="w-full h-full object-cover"
                  />,
                  <video
                    key="video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/team-karmona/karmona-poster.webp"
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="/images/team-karmona/karmona-about-BIMNP2RP.mp4"
                      type="video/mp4"
                    />
                    {t("Your browser does not support videos.")}
                  </video>,
                ].map((content, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full h-full flex-shrink-0 m-0 p-0"
                  >
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{
                        x: currentIndex === index ? 0 : 50,
                        opacity: currentIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="w-full h-full flex items-center justify-center overflow-hidden"
                    >
                      {content}
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}
