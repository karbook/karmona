import { mediaItems } from '../constants';
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from '@/components/ui/tabs';
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from '@/components/ui/carousel';

const tabs = [
    { label: 'Mustang', value: 'mustang' },
    { label: 'VW', value: 'vw' },
];

export default function Projects() {
    return (
        <section id='projects' className="w-full bg-white mt-10 sm:mt-20 items-center dark:bg-[#030917] py-10 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-32 text-gray-900 dark:text-white scroll-mt-20 sm:scroll-mt-25">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 sm:mb-8">Nuestros Proyectos</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-7xl font-medium mx-auto text-center mb-6 text-gray-700 dark:text-gray-300 px-2 sm:px-0">
                En Karmona, la dedicación a la excelencia se manifiesta en cada proyecto que emprendemos.
                Cada vehículo que llega a nuestras instalaciones es tratado con la máxima atención, respaldado
                por la pasión de nuestro equipo de expertos y la firme convicción de ofrecer servicios de calidad sobresaliente.
            </p>

            <Tabs defaultValue="mustang" className="max-w-[1400px] mx-auto w-full">
                <TabsList
                    className="
        p-0 bg-transparent flex flex-wrap justify-center // Added flex-wrap, kept justify-center
        mb-4 mx-auto // Removed whitespace-nowrap, overflow-x-auto, and scrollbar classes
        h-auto sm:h-18 // Changed height to auto for wrapping content
        gap-2 sm:gap-4 // Added gap for spacing between wrapped tabs
    "
                >
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className={`
                relative group overflow-visible
                py-3 px-4 sm:py-4 sm:px-6
                rounded-4xl text-base sm:text-lg md:text-2xl lg:text-4xl font-semibold
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
                min-w-[unset] sm:min-w-[unset] // Removed explicit min-width to allow wrapping
            `}
                        >
                            <span className="relative z-10 block whitespace-nowrap">{tab.label}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((tab) => {
                    const projectMedia = mediaItems.filter(item => item.project === tab.value);
                    return (
                        <TabsContent
                            key={tab.value}
                            value={tab.value}
                            className="w-full max-w-[1500px] mx-auto"
                            onFocus={(e) => e.preventDefault()}
                        >
                            <div className="space-y-4">
                                {projectMedia.length > 0 ? (
                                    <Carousel opts={{
                                        align: 'start',
                                        loop: false,
                                    }}
                                        mousewheel={true}
                                        className="w-full max-w-[1400px] border border-gray-800 rounded-xl mx-auto shadow-[0_0_8px_rgba(255,255,255,0.15)] overflow-hidden" // Ensure overflow is handled by Carousel
                                    >
                                        <CarouselContent className="rounded-3xl pl-4 sm:pl-6 md:pl-8 lg:pl-0"> {/* Adjusted padding on content */}
                                            {projectMedia.map((item) => (
                                                <CarouselItem
                                                    key={item.id}
                                                    className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-[30%] // Responsive item width
                                                                mt-5 mb-5 flex justify-center items-center px-2 sm:px-4" // Adjusted padding
                                                >
                                                    {item.type === 'text' && (
                                                        <div className="text-center max-w-2xl space-y-2 px-2">
                                                            {item.title && <h4 className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-10 font-semibold">{item.title}</h4>}
                                                            <p className="text-sm sm:text-base md:text-lg text-left">{item.content}</p>
                                                        </div>
                                                    )}
                                                    {item.type === 'image' && (
                                                        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px]"> {/* Responsive height for images/videos */}
                                                            <img
                                                                src={item.content}
                                                                alt={item.alt}
                                                                className="rounded-xl shadow-md object-cover w-full h-full"
                                                            />
                                                        </div>
                                                    )}
                                                    {item.type === 'video' && (
                                                        <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px]"> {/* Responsive height for images/videos */}
                                                            <video
                                                                autoPlay
                                                                muted
                                                                playsInline
                                                                loop
                                                                className="rounded-xl shadow-md object-cover w-full h-full"
                                                            >
                                                                <source src={item.content} type="video/mp4" />
                                                                Tu navegador no soporta videos.
                                                            </video>
                                                        </div>
                                                    )}
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                    </Carousel>
                                ) : (
                                    <p className="text-center text-base sm:text-xl text-gray-500 dark:text-gray-400">No hay contenido multimedia para este proyecto aún.</p>
                                )}
                            </div>
                        </TabsContent>
                    );
                })}
            </Tabs>
        </section>
    );
}