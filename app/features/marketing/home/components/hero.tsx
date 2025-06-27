import { useState, useRef } from "react";
import { promotions, details } from "../constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@/components/ui/icon";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router";

export default function Hero() {
	const mainVideoUrl = "/videos/karmona-video-FBTHMESM.mp4";
	const karmonaVideoHistory = '/videos/karmona-history-6KUIREJB.mp4';
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
	const [hovering, setHovering] = useState(false)

	return (
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

			<section
				id="club"
				className="w-full bg-white dark:bg-[#030917] flex flex-col items-center text-center px-4 py-12 sm:py-16 animate-fade-in-up scroll-mt-20"
			>
				<h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">
					Karmona Automotriz
				</h2>
				<img
					src="/images/team-karmona/karmona-team2-XDXJGO4H.webp"
					alt="Equipo Karmona"
					className="w-full max-w-[95%] sm:max-w-[1600px] rounded-2xl sm:rounded-3xl shadow-xl border-4 sm:border-8 border-white dark:border-white transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
				/>
			</section>
			<section
				id="promotions"
				className="bg-white dark:bg-[#030917] py-20 sm:py-28 px-6 sm:px-12 lg:px-32 text-center text-gray-900 dark:text-white animate-fade-in-up"
			>
				<h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">Promociones</h2>
				<p className="max-w-4xl mx-auto text-base sm:text-xl lg:text-2xl mb-4">
					Aprovecha nuestras promociones especiales para ahorrar aún más en tus reparaciones y servicios. ¡Ven y descubre por qué somos la opción preferida de tantos conductores!
				</p>
				<Link to="/tos">
					<p className="font-semibold text-sm sm:text-base lg:text-lg text-[#d63936] mb-10 hover:text-blue-400">
						*Aplica términos y condiciones.
					</p>
				</Link>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-[1500px]">
					{promotions.map((promotion, index) => (
						<div key={index} className="group perspective">
							<div
								className="relative w-full h-[720px] transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180 rounded-xl shadow-lg"
								style={{
									backgroundImage: `url(${promotion.image})`,
									backgroundSize: '100% 100%',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
									boxShadow: '0 0 25px rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(0, 0, 0)',
									borderRadius: '0.75rem'
								}}
							>
								<div className="absolute inset-0 backface-hidden" />
								<div
									className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white p-4 sm:p-6 flex flex-col items-center justify-center text-center text-xs sm:text-sm md:text-base backface-hidden rotate-y-180 rounded-xl ring-1 ring-white/30 shadow-[0_0_35px_rgba(255,255,255,0.15)] transition-shadow duration-500 overflow-y-auto max-h-full"
								>
									<h3 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4">{promotion.title}</h3>
									<p className="text-xl sm:text-2xl mb-2 text-center">{promotion.description}</p>
									{promotion.details && (
										<ul className="list-disc text-left text-xl sm:text-xl pl-4 mb-2">
											{promotion.details.map((detail, i) => (
												<li key={i}>{detail}</li>
											))}
										</ul>
									)}
									<p className="mt-1 text-xl sm:text-xl">{promotion.location}</p>
									{promotion.validity && <p className="text-xl sm:text-xl">{promotion.validity}</p>}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>


			<section id="aboutus" className="bg-white dark:bg-[#030917] px-6 sm:px-12 mb-20 lg:px-32 text-gray-900 dark:text-white animate-fade-in-up scroll-mt-25">
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
		</div>
	);
}