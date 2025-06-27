import { footerLinks } from "../constants";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-white dark:bg-[#030917] min-h-[400px] border-t border-b border-gray-300 dark:border-gray-700 py-10 text-white flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center md:text-left">
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

            {footerLinks.map(({ id, label, path }) =>
              path.startsWith("/") ? (
                <Link
                  key={id}
                  to={path}
                  className="group text-sm transition-colors duration-200 hover:underline"
                >
                  <span className="block text-3xl text-center font-semibold mt-5 tracking-wide text-gray-700 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 hover:underline hover:decoration-blue-600 dark:hover:decoration-blue-400">
                    {label}
                  </span>
                </Link>
              ) : (
                <a
                  key={id}
                  href={path}
                  className="group text-sm transition-colors duration-200 hover:underline"
                >
                  <span className="block text-3xl text-center font-semibold mt-5 tracking-wide text-gray-700 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 hover:underline hover:decoration-blue-600 dark:hover:decoration-blue-400">
                    {label}
                  </span>
                </a>
              )
            )}
          </div>
        </div>
      </footer>

      <section className="w-full bg-white dark:bg-[#020814] min-h-[280px] border-t border-gray-200 dark:border-gray-700 py-6 text-sm text-gray-600 dark:text-gray-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-center">
          <Link
            to="/tos"
            className="font-semibold text-xl hover:underline cursor-pointer"
          >
            Términos y Condiciones
          </Link>

          <p className="text-xl">© 2025 Karmona Automotriz</p>

          <Link
            to="/privacy"
            className="hover:underline font-semibold text-xl cursor-pointer"
          >
            Política de Privacidad
          </Link>
        </div>
      </section>
    </>
  );
}
