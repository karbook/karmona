import { promoRules, tosRules } from '../constants'
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/routes/+types/index'
import { remixI18Next } from '@/localization/i18n.server'

export async function loader({ request }: Route.LoaderArgs) {
    const t = await remixI18Next.getFixedT(request)
    const title = t("Karmona")
    return { meta: { title } }
}
export default function PromoRulesSection() {
    return (
        <>
            <section className="w-full bg-white dark:bg-[#030917] text-gray-800 dark:text-gray-100 px-4 sm:px-6 lg:px-12 xl:px-20 py-16 max-w-screen-2xl mx-auto space-y-20">
                <h1 className="text-7xl font-bold text-center mb-6">Terminos y Condiciones de Karmona</h1>
                <p className="text-lg md:text-2xl max-w-6xl font-semibold mx-auto text-center mb-12 text-gray-700 dark:text-gray-300">
                    Karmona respeta la privacidad de sus clientes y visitantes en línea. La presente política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal. Al utilizar nuestro sitio web, aceptas las prácticas descritas en esta política.
                </p>
                <div
                    className="space-y-10 max-w-7xl mx-auto w-full px-4"            >
                    {tosRules.map(({ id, items }) => (
                        <article key={id} className="space-y-8 ">
                            {items.map(({ title, text }, index) => (
                                <div key={`${id}-clause-${index}`} className="space-y-1">
                                    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{title}**</h3>
                                    <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-200 leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </article>
                    ))}
                </div>

                <div className="space-y-16">
                    <h1 className="text-7xl font-bold text-center mb-10">Terminos y Condiciones generales para hacer validas nuestras promociones.</h1>

                    {promoRules.map(({ id, title, items, note }) => (
                        <article key={id} id={id} className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
                            <ul className="list-decimal ml-5 space-y-2">
                                {items.map((step, index) => (
                                    <li className='text-2xl font-semibold' key={`${id}-step-${index}`}>{step}</li>
                                ))}
                            </ul>
                            {note && (
                                <p className="text-lg md:text-2xl text-gray-700 font-semibold dark:text-gray-200 leading-relaxed">{note}</p>
                            )}
                        </article>
                    ))}
                </div>

            </section>
            <section className="w-full bg-white dark:bg-[#030917] text-gray-800 dark:text-gray-100 px-4 sm:px-6 lg:px-12 xl:px-20 py-16 max-w-screen-2xl mx-auto space-y-12">
                <h2 className="text-7xl font-bold text-center mb-4">Visítanos y síguenos</h2>

                <p className="text-lg md:text-2xl max-w-6xl font-semibold mx-auto text-center mb-12 text-gray-700 dark:text-gray-300">
                    Escanea los códigos QR para encontrarnos en Google Maps o seguirnos en Instagram.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-28 mt-8">
                    <img
                        src="/images/qr-codes/instagram-qrcode.jpg"
                        alt="QR Instagram"
                        className="w-84 h-84 rounded-xl shadow-lg"
                    />
                    <img
                        src="/images/qr-codes/maps-qrcode.png"
                        alt="QR Google Maps"
                        className="w-84 h-84 rounded-xl shadow-lg"
                    />
                </div>
                <div className="col-span-full mb-8 flex justify-center">
                    <img
                        src="/images/logo/karmona-long-dark.svg"
                        alt="Logo Karmona Light"
                        className="w-auto h-15 dark:hidden"
                    />
                    <img
                        src="/images/logo/karmona-long-white.svg"
                        alt="Logo Karmona Dark"
                        className="w-auto h-15 hidden dark:block"
                    />
                </div>
            </section>
        </>
    )
}
export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [{ title: data?.meta.title }]
}
