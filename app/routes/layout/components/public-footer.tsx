import { footerLinks } from "../constants";
import { Link } from "react-router"; 
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="w-full bg-white dark:bg-[#030917] min-h-[300px] sm:min-h-[400px] border-t border-b border-gray-300 dark:border-gray-700 py-6 sm:py-10 text-white flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 sm:gap-y-6 md:gap-4 text-center md:text-left">
            <div className="col-span-full mb-4 sm:mb-8 flex justify-center">
              <img
                src="/images/logo/karmona-long-dark.svg"
                alt="Logo Karmona Light"
                className="w-auto h-10 sm:h-12 dark:hidden" 
              />
              <img
                src="/images/logo/karmona-long-white.svg"
                alt="Logo Karmona Dark"
                className="w-auto h-10 sm:h-12 hidden dark:block" 
              />
            </div>

            {footerLinks.map(({ id, label, path }) =>
              path.startsWith("/") ? (
                <Link
                  key={id}
                  to={path}
                  className="group text-sm transition-colors duration-200 hover:underline"
                >
                  <span className="block text-base sm:text-lg md:text-xl text-center font-semibold mt-2 sm:mt-5 tracking-wide text-gray-700 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 hover:underline hover:decoration-blue-600 dark:hover:decoration-blue-400">
                    {t(label)}
                  </span>
                </Link>
              ) : (
                <a
                  key={id}
                  href={path}
                  className="group text-sm transition-colors duration-200 hover:underline"
                >
                  <span className="block text-base sm:text-lg md:text-xl text-center font-semibold mt-2 sm:mt-5 tracking-wide text-gray-700 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 hover:underline hover:decoration-blue-600 dark:hover:decoration-blue-400">
                    {t(label)}
                  </span>
                </a>
              )
            )}
          </div>
        </div>
      </footer>

      <section className="w-full bg-white dark:bg-[#020814] min-h-[100px] sm:min-h-[120px] border-t border-gray-200 dark:border-gray-700 py-4 sm:py-6 text-sm text-gray-600 dark:text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2 text-center">
          <Link
            to="/tos"
            className="font-semibold text-sm sm:text-base hover:underline cursor-pointer"
          >
            {t("Terms and Conditions")}
          </Link>

          <p className="text-sm sm:text-base">{t("© 2025 Karmona Automotriz")}</p>

          <Link
            to="/privacy"
            className="hover:underline font-semibold text-sm sm:text-base cursor-pointer"
          >
            {t("Privacy Policy")}
          </Link>
        </div>
      </section>
    </>
  );
}