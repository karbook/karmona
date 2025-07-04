import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "@/components/ui/card-animation";

export default function Club() {
  const { t } = useTranslation();
  const mainVideoUrl = "/images/karmona-projects-content/karmona-video-FBTHMESM.mp4";

  return (
    <>
      <div className="w-screen overflow-hidden">
        <main className="w-full h-[820px] mb-10 flex items-center justify-center">
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
      >
        <motion.section
          variants={cardVariants}
          id="start"
          className="w-full bg-white dark:bg-[#030917] flex flex-col items-center text-center px-4 py-12 sm:py-16 animate-fade-in-up scroll-mt-40"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
            {t("Karmona Automotriz")}
          </h2>
          <img
            src="/images/team-karmona/karmona-team-XDXJGO4H.webp"
            alt="Equipo Karmona"
            className="w-full max-w-[95%] sm:max-w-[1600px] rounded-2xl sm:rounded-3xl shadow-xl border-4 sm:border-8 border-white dark:border-white transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
          />
        </motion.section>
      </motion.div>
    </>
  );
}
