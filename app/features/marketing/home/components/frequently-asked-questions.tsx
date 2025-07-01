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

export function FAQ() {
    const half = Math.ceil(faqs.length / 2)
    const firstColumnFaqs = faqs.slice(0, half)
    const secondColumnFaqs = faqs.slice(half)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
        setActiveIndex(index)
    }

    const handleMouseLeave = () => {
        setActiveIndex(null)
    }
    return (
        <><section id="FAQ" className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 py-8 md:py-12 scroll-mt-24">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-4 md:mb-6">
                Preguntas Frecuentes
            </h1>

            <p className="text-base md:text-lg lg:text-2xl max-w-7xl font-semibold mx-auto text-center mb-8 md:mb-12 text-gray-700 dark:text-gray-300">
                Bienvenido a nuestra sección de Preguntas Frecuentes (FAQ), donde abordamos las consultas
                más comunes que nuestros clientes suelen tener. Estas respuestas están diseñadas para
                proporcionar claridad y orientación sobre diversos aspectos de nuestros servicios y procedimientos.
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
                                <AccordionTrigger className="text-left py-3 sm:py-4 md:py-6 lg:py-8 font-semibold text-lg sm:text-xl md:text-2xl"> {/* Increased padding */}
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out text-gray-700 dark:text-gray-300 font-normal leading-relaxed text-base md:text-xl">
                                    {faq.answer}
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
                                <AccordionTrigger className="text-left py-3 sm:py-4 md:py-6 lg:py-8 font-semibold text-lg sm:text-xl md:text-2xl"> {/* Increased padding */}
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out text-gray-700 dark:text-gray-300 font-normal leading-relaxed text-base md:text-xl">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
            <section id="contact" className="flex flex-col gap-4 sm:gap-6 max-w-3xl w-full mx-auto px-4 py-8 sm:px-6 md:py-12 scroll-mt-25">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-4 md:mb-6">
                    Contáctanos
                </h1>

                <p className="text-base md:text-lg lg:text-2xl max-w-7xl font-semibold mx-auto text-center mb-8 md:mb-12 text-gray-700 dark:text-gray-300">
                    Nos complace ofrecer diversas opciones para que nuestros clientes se pongan en contacto con nosotros.
                </p>

                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col items-center text-center overflow-hidden bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl p-6 sm:p-8 md:p-12 shadow-[0_0_12px_rgba(255,255,255,0.2)] w-full min-h-[180px] sm:min-h-[200px]"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {activeIndex === index && (
                            <div
                                className="absolute inset-0 pointer-events-none z-0"
                                style={{
                                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(12, 142, 244, 0.25) 10%, transparent 80%)`,
                                    filter: "blur(100px)",
                                    transition: "background 0.2s ease",
                                }}
                            />
                        )}
                        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 transition-transform duration-500 ease-in-out group-hover:-rotate-12 group-hover:-translate-y-2">
                            <Icon
                                name={contact.icon}
                                className="text-[#cbd5e1] dark:text-[#cbd4e1] w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40"
                            />

                        </div>
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-2 relative z-10">
                            {contact.label}
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
                                                    {buttonText}
                                                </a>
                                            )}
                                        </>
                                    );
                                }

                                if (Array.isArray(value)) {
                                    return (
                                        <>
                                            {value.map((line, i) => (
                                                <p
                                                    key={i}
                                                    className="text-lg sm:text-xl dark:text-white font-semibold"
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                            {buttonText && href && (
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block mt-3 px-4 py-2 sm:px-6 sm:py-3 bg-white dark:bg-[#030917] text-dark dark:text-white font-semibold text-xl sm:text-2xl rounded-3xl border border-transparent hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 ease-in-out"
                                                >
                                                    {buttonText}
                                                </a>
                                            )}
                                        </>
                                    );
                                }

                                return <p className="text-lg sm:text-xl dark:text-white font-semibold">{value}</p>;
                            })()}
                        </div>
                    </div>
                ))}
            </section>
            <section className="w-full py-20 px-6 md:px-20 lg:px-32 bg-white dark:bg-[#030917] text-center">
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    Nuestra ubicación
                </h2>
                <p className="text-lg md:text-2xl max-w-7xl font-semibold mx-auto text-center mb-12 text-gray-700 dark:text-gray-300">
                    Av 2 Pte 3106, Amor, 72140 Heroica Puebla de Zaragoza, Pue.
                </p>
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-600">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.7841240979342!2d-98.22112993043649!3d19.05773536648309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc72c254b6ee9%3A0xefd5da50a79db37d!2sKarmona!5e0!3m2!1ses!2sus!4v1750616060072!5m2!1ses!2sus" width="100%"
                        height="100%"
                        loading="lazy"
                        className="absolute inset-0"
                    />
                </div>
            </section>
            <section
                id="instagram"
                className="w-full py-12 px-4 sm:px-6 md:px-20 lg:px-32 bg-white dark:bg-[#030917] text-center scroll-mt-25"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 md:mb-12">
                    Síguenos en redes
                </h2>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
                    {socialPlatforms.map((platform) => (
                        <Tooltip key={platform.name}>
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
                                <p className="text-sm sm:text-base text-muted-foreground">{platform.description}</p>
                                <p className="text-sm sm:text-base mt-1 sm:mt-2">{platform.stats}</p>
                                {platform.extra && (
                                    <a
                                        href={platform.url}
                                        target="_blank"
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
            </section>
        </>
    );
}
