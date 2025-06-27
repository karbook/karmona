import { mediaItems } from '../constants'
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from '@/components/ui/tabs'
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from '@/components/ui/carousel'
const tabs = [
    { label: 'Mustang', value: 'mustang' },
    { label: 'VW', value: 'vw' },
];
export default function Projects() {
    return (
        <section id='projects' className="w-full bg-white mt-20 items-center dark:bg-[#030917] py-20 px-6 md:px-20 lg:px-32 text-gray-900 dark:text-white scroll-mt-25">
            <h2 className="text-7xl font-bold text-center mb-8">Nuestros Proyectos</h2>
            <p className="text-lg md:text-2xl max-w-7xl font-medium mx-auto text-center mb-6 text-gray-700 dark:text-gray-300">
                En Karmona, la dedicación a la excelencia se manifiesta en cada proyecto que emprendemos.
                Cada vehículo que llega a nuestras instalaciones es tratado con la máxima atención, respaldado
                por la pasión de nuestro equipo de expertos y la firme convicción de ofrecer servicios de calidad sobresaliente.
            </p>

            <Tabs defaultValue="mustang" className="max-w-[1400px] mx-auto w-full">
                <TabsList
                    className="
                                    p-0 bg-transparent flex justify-center
                                    mb-4 mx-auto whitespace-nowrap
                                    scrollbar-none h-18
                                "
                >
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className={`
                               relative group overflow-visible
                                                py-4 px-6 sm:py-6 sm:px-10 
                                                rounded-4xl text-lg sm:text-4xl font-semibold 
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
                                        className="w-full max-w-[1400px] border border-gray-800 mr-5 rounded-xl mx-auto shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                                    >
                                        <CarouselContent className="rounded-3xl mr-10" >
                                            {projectMedia.map((item) => (
                                                <CarouselItem
                                                    key={item.id}
                                                    className="basis-[30%] mt-5 mb-5 flex justify-center items-center px-4"
                                                >
                                                    {item.type === 'text' && (
                                                        <div className="text-center max-w-2xl space-y-2 px-2">
                                                            {item.title && <h4 className="text-3xl mb-10 font-semibold">{item.title}</h4>}
                                                            <p className="text-lg text-left">{item.content}</p>
                                                        </div>
                                                    )}
                                                    {item.type === 'image' && (
                                                        <div className="w-full max-h-[550px] h-[550px]">
                                                            <img
                                                                src={item.content}
                                                                alt={item.alt}
                                                                className="rounded-xl shadow-md object-cover w-full h-full"
                                                            />
                                                        </div>
                                                    )}

                                                    {item.type === 'video' && (
                                                        <div className="w-full max-h-[550px] h-[550px]">
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
                                    <p className="text-center text-xl text-gray-500 dark:text-gray-400">No hay contenido multimedia para este proyecto aún.</p>
                                )}
                            </div>
                        </TabsContent>
                    );
                })}
            </Tabs>
        </section>
    );
}