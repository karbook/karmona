import { promotions } from "../constants";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cardVariants } from "@/components/ui/card-animation";

export default function Promotions() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.section
        variants={cardVariants}
        id="promotions"
        className="bg-white dark:bg-[#030917] mt-20 px-6 sm:px-12 lg:px-32 text-center text-gray-900 dark:text-white animate-fade-in-up scroll-mt-50 sm:scroll-mt-40 lg:scroll-mt-55"
      >
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          {t("Promotions")}
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-xl lg:text-2xl mb-4">
          {t(
            "Take advantage of our special promotions to save even more on your repairs and services. Come and discover why we're the preferred choice for so many drivers!"
          )}
        </p>
        <Link to="/tos">
          <p className="font-semibold text-sm sm:text-base lg:text-lg text-[#d63936] mb-10 hover:text-blue-400">
            {t("*Terms and conditions apply.")}
          </p>
        </Link>

        <motion.div
          variants={cardVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-[1500px]"
        >
          {promotions.map((promotion, index) => (
            <div key={index} className="group perspective">
              <div
                className="relative w-full h-[600px] lg:h-[720px] transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180 rounded-xl shadow-lg"
                style={{
                  backgroundImage: `url(${promotion.image})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  boxShadow:
                    "0 0 25px rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(0, 0, 0)",
                  borderRadius: "0.75rem",
                }}
              >
                <div className="absolute inset-0 backface-hidden" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white p-4 sm:p-6 flex flex-col items-center justify-center text-center text-xs sm:text-sm md:text-base backface-hidden rotate-y-180 rounded-xl ring-1 ring-white/30 shadow-[0_0_35px_rgba(255,255,255,0.15)] transition-shadow duration-500 overflow-y-auto max-h-full">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
                    {t(promotion.title)}
                  </h3>
                  <p className="text-lg sm:text-2xl lg:text-xl mb-2 text-center">
                    {t(promotion.description)}
                  </p>
                  {promotion.details && (
                    <ul className="list-disc text-left text-xl sm:text-xl pl-4 mb-2">
                      {promotion.details.map((detail, i) => (
                        <li key={i}>{t(detail)}</li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-1 text-md sm:text-xl">{promotion.location}</p>
                  {promotion.validity && (
                    <p className="text-lg sm:text-xl">
                      {t(promotion.validity)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
