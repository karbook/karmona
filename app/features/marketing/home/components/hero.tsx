
export default function Hero() {
	const mainVideoUrl = "/images/karmona-projects-content/karmona-video-FBTHMESM.mp4";
	
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
					src="/images/team-karmona/karmona-team-XDXJGO4H.webp"
					alt="Equipo Karmona"
					className="w-full max-w-[95%] sm:max-w-[1600px] rounded-2xl sm:rounded-3xl shadow-xl border-4 sm:border-8 border-white dark:border-white transition-transform duration-700 hover:scale-105 hover:-translate-y-2"
				/>
			</section>
		</div>
	);
}