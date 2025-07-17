import { useState } from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs, socialPlatforms } from "../constants"
import { contacts } from "../constants"
import { Icon } from "@/components/ui/icon"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { cardVariants } from "@/components/ui/card-animation"
export default function FAQ() {
    const { t } = useTranslation()
    const half = Math.ceil(faqs.length / 2)
    const firstColumnFaqs = faqs.slice(0, half)
    const secondColumnFaqs = faqs.slice(half)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [hoveredContactIndex, setHoveredContactIndex] = useState<number | null>(null)

    const handleContactMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
        setHoveredContactIndex(index)
    }

    const handleContactMouseLeave = () => {
        setHoveredContactIndex(null)
    }

    return (
        <>
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
        >
            <motion.section
                id="FAQ"
                variants={cardVariants}
                className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 py-8 md:py-12 mb-10 mt-25 scroll-mt-40 lg:scroll-mt-55">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-4 md:mb-6">
                    {t("Frequently Asked Questions")}
                </h1>

                <p className="text-base md:text-lg lg:text-2xl max-w-7xl font-semibold mx-auto text-center mb-8 md:mb-12 text-gray-700 dark:text-gray-300">
                    {(t("Welcome to our Frequently Asked Questions (FAQ) section, where we address the most common inquiries our customers tend to have. These answers are designed to provide clarity and guidance on various aspects of our services and procedures."))}
                </p>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className="flex-1 flex flex-col gap-2 md:gap-4 w-full">
                        <Accordion type="single" collapsible className="w-full">
                            {firstColumnFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={`col1-item-${index}`}
                                    value={`col1-item-${index}`}
                                    className="border-b border-gray-800"
                                >
                                    <AccordionTrigger className="text-left py-3 sm:py-4 md:py-6 lg:py-8 font-semibold text-lg sm:text-xl md:text-2xl">
                                        {t(faq.question)}
                                    </AccordionTrigger>
                                    <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out text-gray-700 dark:text-gray-300 font-normal leading-relaxed text-base md:text-xl">
                                        {t(faq.answer)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 md:gap-4 w-full">
                        <Accordion type="single" collapsible className="w-full">
                            {secondColumnFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={`col2-item-${index}`}
                                    value={`col2-item-${index}`}
                                    className="border-b border-gray-800"
                                >
                                    <AccordionTrigger className="text-left py-3 sm:py-4 md:py-6 lg:py-8 font-semibold text-lg sm:text-xl md:text-2xl">
                                        {t(faq.question)}
                                    </AccordionTrigger>
                                    <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out text-gray-700 dark:text-gray-300 font-normal leading-relaxed text-base md:text-xl">
                                        {t(faq.answer)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </motion.section>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
            >
                <motion.section
                    id="contact"
                    className="flex flex-col gap-4 sm:gap-6 max-w-3xl w-full mx-auto px-4 py-8 sm:px-6 md:py-12 scroll-mt-40 sm:scroll-mt-45 lg:scroll-mt-50"
                    variants={cardVariants}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-4 md:mb-6">
                        {t("Contact Us")}
                    </h1>

                    <p className="text-base md:text-lg lg:text-2xl max-w-7xl font-semibold mx-auto text-center mb-8 md:mb-12 text-gray-700 dark:text-gray-300">
                        {t("We are pleased to offer various options for our customers to get in touch with us.")}
                    </p>

                    {contacts.map((contact, index) => {
                        const isHovered = hoveredContactIndex === index;
                        return (
                            <div
                                key={index}
                                className="group relative flex flex-col items-center text-center overflow-hidden bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl p-6 sm:p-8 md:p-12 shadow-[0_0_12px_rgba(255,255,255,0.2)] w-full min-h-[180px] sm:min-h-[200px]"
                                onMouseMove={(e) => handleContactMouseMove(e, index)}
                                onMouseLeave={handleContactMouseLeave}
                            >
                                <div
                                    className="absolute inset-0 pointer-events-none z-0"
                                    style={{
                                        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(12, 142, 244, 0.25) 10%, transparent 80%)`,
                                        filter: "blur(120px)",
                                        opacity: isHovered ? 1 : 0,
                                        transition: "opacity 0.4s ease-out",
                                    }}
                                />

                                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 transition-transform duration-500 ease-in-out group-hover:-rotate-12 group-hover:-translate-y-2">
                                    <Icon
                                        name={contact.icon}
                                        className="text-[#cbd5e1] dark:text-[#cbd4e1] w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40"
                                    />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 relative z-10">
                                    {t(contact.label)}
                                </h3>
                                <div className="text-base sm:text-lg relative z-10 space-y-1 items-center text-center">
                                    {(() => {
                                        const { type, value, href, buttonText } = contact;

                                        if (type === "tel" && typeof value === "string") {
                                            const tel = value.replace(/[^0-9+]/g, "");
                                            return (
                                                <a
                                                    href={`tel:${tel}`}
                                                    className="inline-block mt-3 px-4 py-2 sm:px-6 sm:py-3 bg-white dark:bg-[#030917] text-dark dark:text-white font-semibold text-xl sm:text-2xl rounded-3xl border border-transparent hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 ease-in-out"
                                                >
                                                    {value}
                                                </a>
                                            );
                                        }
                                        if (type === "email" && typeof value === "string") {
                                            return (
                                                <a
                                                    href={`mailto:${value}`}
                                                    className="inline-block mt-3 px-4 py-2 sm:px-6 sm:py-3 bg-white dark:bg-[#030917] text-dark dark:text-white font-semibold text-xl sm:text-2xl rounded-3xl border border-transparent hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 ease-in-out"
                                                >
                                                    {value}
                                                </a>
                                            );
                                        }

                                        if (type === "map" && Array.isArray(value)) {
                                            return (
                                                <>
                                                    <div className="mt-1 text-sm sm:text-base text-gray-800 dark:text-gray-200 text-center space-y-0.5">
                                                        {value.map((line, i) => (
                                                            <p
                                                                key={i}
                                                                className="text-lg sm:text-xl dark:text-white font-semibold"
                                                            >
                                                                {line}
                                                            </p>
                                                        ))}
                                                    </div>
                                                    {href && buttonText && (
                                                        <a
                                                            href={href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-block mt-3 px-4 py-2 sm:px-6 sm:py-3 bg-[#030917] text-white font-medium rounded-3xl border border-transparent hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 ease-in-out text-xl sm:text-2xl"
                                                        >
                                                            {t(buttonText)}
                                                        </a>
                                                    )}
                                                </>
                                            );
                                        }
                                        return (
                                            <p className="text-lg sm:text-xl dark:text-white font-semibold whitespace-pre-line">
                                                {Array.isArray(value)
                                                    ? value.map(line => t(line)).join('\n')
                                                    : t(value)}
                                            </p>
                                        )
                                    })()}
                                </div>
                            </div>
                        );
                    })}
                </motion.section>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
            >
            <motion.section
                className="w-full py-20 px-6 md:px-20 lg:px-32 bg-white dark:bg-[#030917] text-center"
                variants={cardVariants}
            >
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                    {t("Our Location")}
                </h2>
                <p className="text-lg md:text-2xl max-w-7xl font-semibold mx-auto text-center mb-12 text-gray-700 dark:text-gray-300">
                    {t("Av 2 Pte 3106, Amor, 72140 Heroica Puebla de Zaragoza, Pue.")}
                </p>
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-600">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.7841240979342!2d-98.22112993043649!3d19.05773536648309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc72c254b6ee9%3A0xefd5da50a79db37d!2sKarmona!5e0!3m2!1ses!2sus!4v1750616060072!5m2!1ses!2sus" width="100%"
                        height="100%"
                        loading="lazy"
                        className="absolute inset-0"
                    />
                </div>
            </motion.section>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
            >
            <motion.section
                id="instagram"
                className="w-full py-12 px-4 sm:px-6 md:px-20 lg:px-32 bg-white dark:bg-[#030917] text-center scroll-mt-40 sm:scroll-mt-45 lg:scroll-mt-50"
                variants={cardVariants}
            >
                <h2 className="text-4xl sm:text-6xl lg:text-7xl  font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 md:mb-12">
                    {t("Follow us on social media")}
                </h2>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
                    {socialPlatforms.map((platform) => (
                        <Tooltip key={t(platform.name)}>
                            <TooltipTrigger asChild>
                                <a
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={(e) => (e.currentTarget.style.color = platform.color)}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                                    className="flex items-center justify-center text-gray-700 dark:text-gray-300 transition-colors"
                                >
                                    <Icon name={platform.icon} size="4xl" aria-hidden="true" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent
                                side="top"
                                align="center"
                                className="w-[280px] sm:w-[350px] min-h-[220px] sm:min-h-[250px] text-center bg-white dark:bg-[#030917] p-4 sm:p-6"
                            >
                                <div className="flex justify-center mb-3 sm:mb-4">
                                    <Icon
                                        name={platform.icon}
                                        size="3xl"
                                        style={{ color: platform.color }}
                                        className="transition-colors"
                                    />
                                </div>

                                <p className="text-base sm:text-lg font-semibold">{platform.username}</p>
                                <p className="text-sm sm:text-base text-muted-foreground">{t(platform.description)}</p>
                                <p className="text-sm sm:text-base mt-1 sm:mt-2">{t(platform.stats)}</p>
                                {platform.extra && (
                                    <a
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`mt-2 block text-base sm:text-lg font-medium`}
                                        style={{ color: platform.color }}
                                    >
                                        {platform.extra}
                                    </a>
                                )}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </motion.section>
            </motion.div>
        </>
    );
}