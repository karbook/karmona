import { useRef, useState, useEffect } from "react"; // Importa useEffect
import { motion, AnimatePresence } from "framer-motion";
import { gridImages, type GridImage } from "../constants";


export default function ShowcaseGrid() {
    const [shuffledImages, setShuffledImages] = useState<GridImage[]>(gridImages);
    const texts = [
        "Motores y Suspensión",
        "Restauracion y pintura",
    ];
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
            <section id="specialist" className="w-full bg-white dark:bg-[#030917] mb-10 py-20 px-8 md:px-20 lg:px-32 flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-5xl md:text-7xl font-bold text-center text-gray-900 dark:text-white mb-6 max-w-xl mx-auto">
                        Somos especialistas en
                    </h2>
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentTextIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-lg md:text-7xl font-bold text-center text-[#3c84f4] max-w-xl mx-auto"
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
                                className="w-full h-45 object-cover rounded-xl shadow-md"
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </>
    );
}