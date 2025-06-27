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
        <>
            <section id="FAQ" className="w-full max-w-[1580px] mx-auto px-4 py-12 scroll-mt-24">
                <h1 className="text-7xl font-bold text-center mb-6">Preguntas Frecuentes</h1>

                <p className="text-lg md:text-2xl max-w-7xl font-semibold mx-auto text-center mb-12 text-gray-700 dark:text-gray-300">
                    Bienvenido a nuestra sección de Preguntas Frecuentes (FAQ), donde abordamos las consultas
                    más comunes que nuestros clientes suelen tener. Estas respuestas están diseñadas para
                    proporcionar claridad y orientación sobre diversos aspectos de nuestros servicios y procedimientos.
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 flex flex-col gap-4">
                        <Accordion type="single" collapsible className="w-full">
                            {firstColumnFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={`col1-item-${index}`}
                                    value={`col1-item-${index}`}
                                    className="border-b border-gray-800"
                                >
                                    <AccordionTrigger className="text-left mt-10 font-semibold text-2xl">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out text-dark dark:text-white font-semibold leading-relaxed text-xl">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <Accordion type="single" collapsible className="w-full">
                            {secondColumnFaqs.map((faq, index) => (
                                <AccordionItem
                                    key={`col2-item-${index}`}
                                    value={`col2-item-${index}`}
                                    className="border-b border-gray-800"
                                >
                                    <AccordionTrigger className="text-left mt-10 font-semibold text-2xl">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="overflow-hidden transition-all duration-500 ease-in-out text-black dark:text-white font-semibold leading-relaxed text-xl">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
            <section id="contact" className="flex flex-col gap-6 max-w-3xl w-full mx-auto scroll-mt-25">
                <h1 className="text-7xl font-bold text-center mb-6">Contáctanos</h1>

                <p className="text-lg md:text-2xl max-w-7xl font-semibold mx-auto text-center mb-12 text-gray-700 dark:text-gray-300">
                    Nos complace ofrecer diversas opciones para que nuestros clientes se pongan en contacto con nosotros.
                </p>

                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col items-center text-center overflow-hidden bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl p-12 shadow-[0_0_12px_rgba(255,255,255,0.2)] w-full min-h-[220px]" onMouseMove={(e) => handleMouseMove(e, index)}
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
                        <div className="absolute -top-4 -right-4 z-10 transition-transform duration-500 ease-in-out group-hover:-rotate-12 group-hover:-translate-y-2">
                            <Icon
                                name={contact.icon}
                                size="6xl"
                                className="text-[#cbd5e1] dark:text-[#cbd4e1]"
                            />
                        </div>
                        <h3 className="text-3xl font-semibold mb-2 relative z-10">{contact.label}</h3>

                        <div className="text-xl relative z-10 space-y-1 items-center text-center">
                            {(() => {
                                const { type, value, href, buttonText } = contact

                                if (type === "tel" && typeof value === "string") {
                                    const tel = value.replace(/[^0-9+]/g, "")
                                    return (
                                        <a
                                            href={`tel:${tel}`}
                                            className="inline-block mt-4 px-6 py-3 bg-white dark:bg-[#030917] text-dark dark:text-white font-semibold text-3xl rounded-3xl border border-transparent hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 ease-in-out"
                                        >
                                            {value}
                                        </a>
                                    )
                                }

                                if (type === "email" && typeof value === "string") {
                                    return (
                                        <a
                                            href={`mailto:${value}`}
                                            className="inline-block mt-4 px-6 py-3 bg-white dark:bg-[#030917] text-dark dark:text-white font-semibold text-3xl rounded-3xl border border-transparent hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 ease-in-out"
                                        >
                                            {value}
                                        </a>
                                    )
                                }

                                if (type === "map" && Array.isArray(value)) {
                                    return (
                                        <>
                                            <div className="mt-1 text-base text-gray-800 dark:text-gray-200 text-center space-y-1">
                                                {value.map((line, i) => (
                                                    <p
                                                        key={i}
                                                        className="text-3xl md:text-3xl lg:text-2xl  dark:text-white font-semibold"
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
                                                    className="inline-block mt-4 px-6 py-3 bg-[#030917] text-white font-medium rounded-3xl border border-transparent hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 ease-in-out"
                                                >
                                                    {buttonText}
                                                </a>
                                            )}
                                        </>
                                    )
                                }
                                if (Array.isArray(value)) {
                                    return (
                                        <>
                                            {value.map((line, i) => (
                                                <p key={i}
                                                    className="text-3xl md:text-3xl lg:text-2xl  dark:text-white font-semibold"

                                                >{line}</p>
                                            ))}
                                            {buttonText && href && (
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block mt-4 px-6 py-3 bg-white dark:bg-[#030917] text-dark dark:text-white font-semibold text-3xl rounded-3xl border border-transparent hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 ease-in-out"
                                                >
                                                    {buttonText}
                                                </a>
                                            )}
                                        </>
                                    )
                                }

                                return <p className="text-3xl md:text-3xl lg:text-2xl  dark:text-white font-semibold">{value}</p>
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
                className="w-full py-20 px-6 md:px-20 lg:px-32 bg-white dark:bg-[#030917] text-center scroll-mt-25"
            >
                <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-12">
                    Síguenos en redes
                </h2>

                <div className="flex flex-wrap justify-center gap-8 mb-20">
                    {socialPlatforms.map((platform) => (
                        <Tooltip key={platform.name}>
                            <TooltipTrigger asChild>
                                <a
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[${platform.color}] transition-colors`}
                                >
                                    <Icon name={platform.icon} size="5xl" aria-hidden="true" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent
                                side="top"
                                align="center"
                                className="w-[390px] min-h-[280px] max-w-lg text-center bg-white dark:bg-[#030917] p-6"
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon name={platform.icon} size="4xl" className={`text-[${platform.color}]`} />
                                </div>
                                <p className="text-xl font-semibold">{platform.username}</p>
                                <p className="text-lg text-muted-foreground">{platform.description}</p>
                                <p className="text-lg mt-2">{platform.stats}</p>
                                {platform.extra && (
                                    <a
                                        href={platform.url}
                                        target="_blank"
                                        className={`mt-3 block text-lg font-medium`}
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
