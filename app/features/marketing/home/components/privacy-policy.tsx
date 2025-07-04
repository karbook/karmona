import { privacyPolicies } from "../constants";
import { useTranslation } from "react-i18next";
export default function PrivacyPolicy() {
    const { t } = useTranslation();
    return (
        <section className="w-full max-w-[1580px] bg-white dark:bg-[#030917] text-gray-800 dark:text-gray-100 px-4 sm:px-6 lg:px-12 xl:px-20 py-16 mx-auto space-y-20">
            <h1 className="text-7xl font-bold text-center mb-6">{t('Privacy Policy')}</h1>
            <p className="text-2xl md:text-2xl max-w-6xl font-semibold mx-auto text-center mb-12 text-gray-700 dark:text-gray-300">
                {t('Karmona respects the privacy of its customers and online visitors. This privacy policy describes how we collect, use, and protect personal information. By using our website, you agree to the practices described in this policy.')}

            </p>
            <div className="space-y-10 max-w-7xl mx-auto w-full px-4">
                {privacyPolicies.map((item, title) => (
                    <div key={title} className="space-y-2">
                        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">{t(item.title)}:**</h2>
                        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">{t(item.content)}</p>
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