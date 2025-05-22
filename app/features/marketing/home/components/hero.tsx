import { useTranslation } from 'react-i18next';
import React from 'react';
import { Container } from '@/components/ui/container';
import { Link } from 'react-router-dom';

import { cn } from '@/utils/misc';
const promotionsData = [
	{
		id: 1,
		frontImage: '/images/promotions/promo-mama-karmona.webp', // RUTA A LA IMAGEN FRONTAL
		titleBack: 'Día de la Madre',
		descriptionBack:
			'¡Celebra a mamá! 20% de descuento en servicios seleccionados. Válido del 10 al 12 de Mayo. Aplican términos y condiciones.',
		footerBack: '*No acumulable con otras promociones.',
	},
	{
		id: 2,
		frontImage: '/images/promotions/aniversario-30-juntos.webp', // RUTA A LA IMAGEN FRONTAL
		titleBack: '30 Años Juntos',
		descriptionBack:
			'¡Gracias por tu confianza! 15% de descuento en mantenimiento de motor o frenos. Trae a consentir tu auto.',
		footerBack: '*Válido todo el mes de Junio.',
	},
	{
		id: 3,
		frontImage: '/images/promotions/aniversario-30-juntos-2.webp', // RUTA A LA IMAGEN FRONTAL
		titleBack: 'Mantenimiento Especial',
		descriptionBack:
			'10% de descuento en aceite Motul + Diagnóstico especializado GRATIS. ¡Tu auto en las mejores manos!',
		footerBack: '*Aplican restricciones.',
	},
];

export default function Hero() {
	const { t } = useTranslation();

	const videoSrc = '/videos/karmona-minimalist-video.mp4';
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
							className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl
                                       aspect-video
                                       border-2 border-white border-opacity-50
                                       rounded-2xl
                                       shadow-2xl
                                       overflow-hidden
                                       animate-float
                                       bg-black bg-opacity-20"
						>
							<img
								src="/images/logo/karmona-long-white.svg"
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
				id="sobre-nosotros"
				className="bg-[#0A101D] py-34 sm:py-38 lg:py-42 w-screen text-white"
			>

			</section>
		</>
	);
}
