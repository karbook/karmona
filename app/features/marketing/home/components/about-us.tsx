import { useState,useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@/components/ui/icon";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { details } from "../constants";

export default function AboutUs() {
    const karmonaVideoHistory = '/videos/karmona-history-6KUIREJB.mp4';
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
	const [hovering, setHovering] = useState(false)

    return (
        <section id="aboutus" className="bg-white dark:bg-[#030917] px-6 sm:px-12 mb-20 mt-5 lg:px-32 text-gray-900 dark:text-white animate-fade-in-up scroll-mt-28">
				<div className="max-w-6xl mx-auto text-center mb-12">
					<h2 className="text-5xl sm:text-7xl font-bold">Sobre Nosotros</h2>
					<p className="max-w-7xl mx-auto text-lg sm:text-2xl mb-2 mt-10">
						Nos complace compartir la esencia y los valores que nos definen como organización. Nuestra historia, misión y valores fundamentales nos guían en cada paso, y nos enorgullece presentar un vistazo a quiénes somos y qué representamos.
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
					<Tabs defaultValue="karmona" className="flex flex-col w-full md:w-5/12 lg:w-[50%]">
						<TabsList
							className="
                    p-0 bg-transparent flex w-full gap-2 mb-4 
                    justify-start overflow-x-auto whitespace-nowrap 
                    sm:justify-around sm:overflow-visible
                    scrollbar-none
                "
						>
							{details.map((detail) => (
								<TabsTrigger
									key={detail.value}
									value={detail.value}
									className={`
                            relative group overflow-visible
                            py-4 px-6 sm:py-6 sm:px-10 
                            rounded-4xl text-lg sm:text-2xl font-semibold 
                            transition-colors duration-300 ease-in-out
                            dark:text-white hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer
                            before:content-['']
                            before:absolute before:inset-0
                            before:bg-black dark:before:bg-[#fdf6e9]
                            before:rounded-4xl before:z-0
                            before:transition-transform before:duration-300 before:ease-out
                            before:translate-x-full before:opacity-0
                            data-[state=active]:text-white dark:data-[state=active]:text-[#030917]
                            data-[state=active]:shadow-md
                            data-[state=active]:before:translate-x-0
                            data-[state=active]:before:opacity-100
                        `}
								>
									<span className="relative z-10 block whitespace-nowrap">{detail.title}</span>
								</TabsTrigger>
							))}
						</TabsList>
						{details.map((detail) => (
							<TabsContent
								key={detail.value}
								value={detail.value}
								onMouseMove={(e) => {
									const rect = e.currentTarget.getBoundingClientRect()
									setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
									setHovering(true)
								}}
								onMouseLeave={() => setHovering(false)}
								className="group relative w-full rounded-lg bg-transparent border-none shadow-none p-0 sm:p-0 lg:p-0 min-h-[400px] text-black transition-opacity duration-300 data-[state=inactive]:hidden overflow-hidden flex flex-col justify-center"
							>
								{hovering && (
									<div
										className="w-full absolute inset-0 pointer-events-none z-0"
										style={{
											filter: "blur(60px)",
											background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(12, 142, 244, 0.35) 5%, transparent 75%)`,
											transition: "background 0.2s ease-out",
										}}
									/>
								)}
								<div className="absolute -top-4 -right-6 z-10 overflow-visible text-[#cbd5e1] dark:text-[#cbd5e1] transition-all duration-300 group-hover:text-[#475569] group-hover:-translate-y-1 group-hover:-rotate-8">
									<Icon name={detail.icon} size="5xl" sm:size="6xl" />
								</div>
								<div className="space-y-4 relative z-10">
									<h3 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 mt-10 text-center">
										{detail.value === "karmona"
											? "Karmona"
											: detail.value === "mision"
												? "Nuestra Misión"
												: detail.value === "vision"
													? "Nuestra Visión"
													: "Nuestro Legado"}
									</h3>
									{detail.value === 'historia' && Array.isArray(detail.content) ? (
										<Carousel className="w-full max-w-5xl mx-auto overflow-hidden">
											<CarouselContent className="flex gap-6 pl-6 pr-6">
												{detail.content.map((slide, i) => (
													<CarouselItem
														key={i}
														className="
                                            basis-full sm:basis-[49%]
                                            h-[320px]
                                            mt-12 mb-8
                                            flex flex-col items-center text-center space-y-2
                                            bg-transparent dark:bg-transparent
                                            rounded-lg border border-gray-500 dark:border-gray-700
                                            shadow-sm p-6
                                            last:mr-6
                                            "
													>
														{slide.icon && (
															<div className="mb-4 text-gray-700 dark:text-gray-300">
																<Icon name={slide.icon} size="4xl" />
															</div>
														)}
														<h4 className="text-lg sm:text-xl font-bold text-[#475569]">{slide.date}</h4>
														<h5 className="text-xl sm:text-2xl font-bold text-black dark:text-white">{slide.headline}</h5>
														<p className="text-lg sm:text-xl text-black dark:text-[#8a9baf]">{slide.description}</p>
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
                                            text-lg sm:text-2xl font-custom text-black dark:text-[#8a9baf]
                                            text-center mx-auto max-w-2xl
                                        "
												>
													{paragraph}
												</p>
											))
									)}
								</div>
							</TabsContent>
						))}
					</Tabs>
				</div>
			</section>
    );
}