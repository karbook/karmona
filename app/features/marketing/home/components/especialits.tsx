import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gridImages, type GridImage } from "../constants";
import { useTranslation } from "react-i18next";
import { cardVariants } from "@/components/ui/card-animation";
export default function ShowcaseGrid() {
  const { t } = useTranslation();
  const [shuffledImages, setShuffledImages] = useState<GridImage[]>(gridImages);
  const texts = [t("Engines and Suspension"), t("Restoration and Painting")];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const imageShuffleInterval = setInterval(() => {
      const shuffled = [...shuffledImages].sort(() => Math.random() - 0.5);
      setShuffledImages(shuffled);
    }, 3000);

    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(imageShuffleInterval);
      clearInterval(textChangeInterval);
    };
  }, [shuffledImages, texts.length]);

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.section
          id="specialist"
          variants={cardVariants}
          className="w-full bg-white dark:bg-[#030917] mb-10 py-10 px-4 sm:px-8 md:px-20 lg:px-32 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center scroll-mt-40 sm:scroll-mt-35"
        >
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl sm:text-5xl md:text-7xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6 max-w-xl mx-auto">
              {t("We are specialists in")}
            </h2>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-4xl md:text-7xl font-bold text-center text-[#3c84f4] max-w-xl mx-auto"
              >
                {texts[currentTextIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <motion.div
            layout
            className="flex-1 grid grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <AnimatePresence>
              {shuffledImages.map((image: GridImage) => (
                <motion.img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-32 sm:h-40 md:h-45 object-cover rounded-xl shadow-md"
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>
      </motion.div>
    </>
  );
}