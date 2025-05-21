import { useTranslation } from 'react-i18next';
import React from 'react';
import { Container } from '@/components/ui/container';


import { cn } from '@/utils/misc';

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
					className="absolute inset-0 w-full h-full object-cover z-0"
				>
					Tu navegador no soporta la etiqueta de video.
				</video>

				<div className="absolute inset-0 w-full h-full bg-black opacity-40 z-0"></div>
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
					<a href="/#karmona" aria-label="Scroll to next section">
						<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white animate-bounce">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
						</div>
					</a>
				</div>
			</section>

			{/* Sección 2: "Karmona Automotriz" */}
			<section
							id="karmona"
							className="bg-[#0A101D] py-34 sm:py-38 lg:py-42 w-screen text-white"
						>
							<Container>
								<div className="flex flex-col items-center text-center">
									<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl
                                   mb-12 sm:mb-16 lg:mb-20">
										Karmona Automotriz
									</h2>
									<div
                            className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl
                                       aspect-video
                                       border-2 border-white border-opacity-50
                                       rounded-2xl
                                       shadow-2xl
                                       overflow-hidden
                                       bg-black bg-opacity-20"
                        >
										<img
											src="/images/team-karmona/karmona-team2.webp"
											alt="Mecánicos de Karmona trabajando en un vehículo"
											className="w-full h-full object-cover
                                           rounded-2xl"
										/>
									</div>
								</div>
							</Container>
						</section>
					</>
				);
}
