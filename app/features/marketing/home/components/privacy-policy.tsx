import { privacyPolicies } from "../constants";
export default function PrivacyPolicy() {
    return (
        <section className="w-full max-w-[1580px] bg-white dark:bg-[#030917] text-gray-800 dark:text-gray-100 px-4 sm:px-6 lg:px-12 xl:px-20 py-16 mx-auto space-y-20">
            <h1 className="text-7xl font-bold text-center mb-6">Política de Privacidad</h1>
            <p className="text-2xl md:text-2xl max-w-6xl font-semibold mx-auto text-center mb-12 text-gray-700 dark:text-gray-300">
                Karmona respeta la privacidad de sus clientes y visitantes en línea. La presente política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal. Al utilizar nuestro sitio web, aceptas las prácticas descritas en esta política.

            </p>
            <div className="space-y-10 max-w-7xl mx-auto w-full px-4">
                {privacyPolicies.map((item, title) => (
                    <div key={title} className="space-y-2">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">{item.title}:**</h2>
                        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">{item.content}</p>
                    </div>
                ))}
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
    );
}