import { useTranslation } from 'react-i18next';
import React from 'react';
import { Container } from '@/components/ui/container';
import { Link } from 'react-router-dom'; //
import { cn } from '@/utils/misc';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// COMPONENTS
import {
	aboutSectionTabsData,
	promotionsData,
} from '@/routes/layout/components/hero-maps-items';

export default function Hero() {
	//const { t } = useTranslation();

	const videoSrc = '/videos/karmona-minimalist-video.mov';
	// const posterSrc = '/images/logo/karmona-square.svg';

	return (
		<>
			{/* Sección 1: Hero con Video de Pantalla Completa */}
			<section className="relative w-screen h-screen overflow-hidden bg-slate-900">
				<video
					src={videoSrc}
					autoPlay
					loop
					muted
					playsInline
					// poster={posterSrc}
					className="absolute inset-0 w-screen h-screen object-cover z-0"
				>
					Tu navegador no soporta la etiqueta de video.
				</video>

				<div className="absolute inset-0 w-full h-full bg-black opacity-40 z-0"></div>
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
					<a href="/#karmona" aria-label="Scroll to next section">
						<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white animate-bounce">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 md:w-7 md:h-7"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</a>
				</div>
			</section>

			{/* Sección 2: "Karmona Automotriz" */}
			<section
				id="karmona"
				className="bg-[#0A101D] py-34 sm:py-38 lg:py-42 w-screen max-h-screen text-white"
			>
				<Container>
					<div className="flex flex-col items-center text-center">
						<h2
							className="text-6xl font-bold tracking-tight text-white sm:text-7xl
                                   mb-12 sm:mb-24 lg:mb-20"
						>
							Karmona Automotriz
						</h2>
						<div
							className="w-full max-w-6xl lg:max-w-7xl xl:max-w-8xl
                                       aspect-video
                                       border-2 border-white border-opacity-50
                                       rounded-2xl
                                       shadow-2xl
                                       overflow-hidden
                                       animate-float
                                       bg-black bg-opacity-20"
						>
							<img
								src="/images/team-karmona/kar-team.svg"
								alt="Mecánicos de Karmona trabajando en un vehículo"
								className="w-full h-full object-cover
                                           rounded-2xl "
							/>
						</div>
					</div>
				</Container>
			</section>

			{/* Sección 3: "Promociones" */}
			<section
				id="promociones"
				className="bg-[#0A101D] py-34 sm:py-38 lg:py-42 w-screen text-white"
			>
				<Container>
					<div className="text-center mb-8 md:mb-16">
						<h1 className="text-6x1 sm:text-8xl font-bold tracking-tight">
							Promociones
						</h1>
						<p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
							Aprovecha nuestras promociones especiales para ahorrar aún más en
							tus reparaciones y servicios. ¡Ven y descubre por qué somos la
							opción preferida de tantos conductores!
						</p>
						<Link
							to="/terminos-y-condiciones"
							className="mt-6 inline-block text-md text-sky-400 hover:text-sky-300 hover:underline"
						>
							Aplica términos y condiciones.
						</Link>
					</div>

					{/* Contenedor de las Tarjetas de Promoción */}
					<div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-1 sm:gap-3 md:gap-5 lg:gap-7">
						{promotionsData.map((promo) => (
							<div
								key={promo.id}
								className="flip-card
                               aspect-[calc(4*3+1)/20] sm:aspect-[calc(4*3+1)/20] md:aspect-[calc(4*3+1)/20]{/* Ligeramente más altas o anchas para 'más grandes' */}
                               border-2 border-black
                               shadow-white-soft
                               rounded-xl"
							>
								<div className="flip-card-inner">
									{/* Cara Frontal */}
									<div className="flip-card-front">
										<img
											src={promo.frontImage}
											alt={`Promoción ${promo.titleBack}`}
											className="w-fit h-fit object-cover"
										/>
									</div>
									{/* Cara Trasera */}
									<div
										className="flip-card-back"
										style={{
											backgroundImage: `url(${promo.frontImage})`,
										}}
									>
										<div className="flip-card-back-content-wrapper">
											<h3 className="text-xl sm:text-2xl font-semibold mb-2">
												{promo.titleBack}
											</h3>
											<p className="text-sm sm:text-base mb-4 flex-grow">
												{promo.descriptionBack}
											</p>
											{promo.footerBack && (
												<p className="text-xs text-slate-400 mt-auto">
													{promo.footerBack}
												</p>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Seccion 4 */}
			<section
				id="about-us"
				className="bg-[#0A101D] py-30 sm:py-34 lg:py-42 w-screen text-white"
			>
				<Container>
					<div className="text-center mb-12 md:mb-20">
						<h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
							Sobre Nosotros
						</h1>
						<p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
							Nos complace compartir la esencia y los valores que nos definen
							como organización. Nuestra historia, misión y valores
							fundamentales nos guían en cada paso, y nos enorgullece
							presentar un vistazo a quiénes somos y qué representamos.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
						{/* Columna Izquierda: Video */}
						<div className="w-full lg:sticky lg:top-28">
							<div
								className="aspect-video w-full
                                           border-2 border-white border-opacity-30
                                           rounded-2xl
                                           shadow-xl
                                           overflow-hidden
                                           animate-float
                                           bg-black bg-opacity-20"
							>
								<video
									src="/videos/karmona-minimalist-video.mov"
									autoPlay
									loop
									muted
									playsInline
									className="w-full h-full object-cover rounded-2xl"
								>
									Tu navegador no soporta la etiqueta de video.
								</video>
							</div>
						</div>

						{/* Columna Derecha: Tabs */}
						<div className="w-full">
							<Tabs
								defaultValue={aboutSectionTabsData[0]?.id}
								className="w-full"
							>
								<TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-transparent p-0 mb-10">
									{aboutSectionTabsData.map((tab) => (
										<TabsTrigger
											key={tab.id}
											value={tab.id}
											className={cn(
												// Estilos base para TODOS los triggers (no activos)
												'font-medium rounded-md transition-all',
												'text-slate-300',
												'hover:text-slate-100',
												'py-2.5 px-3',
												'text-[var(--text-body-base)]',

												// Estilos para el trigger ACTIVO
												'data-[state=active]:bg-white',
												'data-[state=active]:text-slate-900',
												'data-[state=active]:shadow-md',
												'data-[state=active]:font-semibold',

												// TAMAÑO Y SOMBRA DE TEXTO PARA ESTADO ACTIVO
												'data-[state=active]:text-[length:var(--text-h5)]',
												'data-[state=active]:[text-shadow:0_1px_1px_rgba(0,0,0,0.4)]'
											)}
										>
											{tab.triggerTitle}
										</TabsTrigger>
									))}
								</TabsList>

								{aboutSectionTabsData.map((tab) => (
									<TabsContent
										key={tab.id}
										value={tab.id}
										className="mt-0"
									>
										{tab.id === 'historia' ? (
											//Pestaña Historia
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
												{(
													tab.content as Array<any>
												).map((event, index) => (
													<div
														key={index}
														className="content-card-hover-effect group bg-slate-800/30 backdrop-blur-sm p-6 rounded-3xl shadow-lg relative min-h-[200px] flex flex-col"
													>
														{event.icon && (
															<event.icon className="absolute top-4 right-4 w-8 h-8 text-white opacity-20 group-hover:opacity-50 group-hover:rotate-[15deg] transition-all duration-300" />
														)}
														<p className="text-sm text-sky-400 mb-1">
															{event.year}
														</p>
														<h4 className="text-xl font-semibold text-white mb-2">
															{event.title}
														</h4>
														<p className="text-slate-300 text-sm flex-grow">
															{event.text}
														</p>
													</div>
												))}
											</div>
										) : (
											//Pestañas Generales
											<div className="content-card-hover-effect group bg-slate-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg relative min-h-[250px] flex flex-col">
												{tab.icon && (
													<tab.icon className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 text-white opacity-20 group-hover:opacity-50 group-hover:rotate-[15deg] transition-all duration-300" />
												)}
												<h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
													{(
														tab.content as { title: string }
													).title}
												</h3>
												<p className="text-slate-300 text-md sm:text-lg leading-relaxed">
													{(
														tab.content as { text: string }
													).text}
												</p>
											</div>
										)}
									</TabsContent>
								))}
							</Tabs>
						</div>
					</div>
				</Container>
			</section>
			<section
				id=""
				className="bg-[#0A101D] py-30 sm:py-34 lg:py-42 w-screen text-white"
			></section>
		</>
	);
}
