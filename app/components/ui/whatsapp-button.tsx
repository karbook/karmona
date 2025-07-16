import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { useTranslation } from "react-i18next"
export default function WhatsAppMenu() {
  const { t } = useTranslation()
  const items = [
    {
      label: t("Status of my car"),
      icon: "car",
      text: t("Hello, I'd like to ask you about the current status of my car repair. I'm interested in learning how the process is going and if there are any updates I should be aware of. Thank you!"),
    },
    {
      label: t("Request information"),
      icon: "message-circle-question-mark",
      text: t("Hello, I'm interested in learning more about your services."),
    },
    {
      label: t("Cost and budget inquiry"),
      icon: "dollar-sign",
      text: t("Could you provide me with an estimate for '[type of service]' on my car?\nMake:\nModel:\nYear:\nColor:\nThank you."),
    },
    {
      label: t("Request invoice"),
      icon: "receipt",
      text: t("I want to request an Good morning, I hereby request that my invoice be generated for the following order\nwith the following information"),
    },
    {
      label: t("Send message"),
      icon: "message-circle",
      text: t("Hola, quisiera ponerme en contacto con ustedes."),
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="whatsapp"
            size="whatsapp"
            aria-label="Abrir WhatsApp"
          >
            <Icon name="whatsapp" className="text-[#030917] dark:text-white !w-14 !h-14 sm:!w-16 sm:!h-16" />

            <span className="sr-only">{t('Open WhatsApp')}</span>
          </Button>
        </DrawerTrigger>

        <DrawerContent className="
          fixed bottom-0 inset-x-0 w-full
          bg-white dark:bg-[#030917]
          border-t border-zinc-700
          rounded-t-[1.25rem] shadow-2xl
          h-[70vh] sm:h-[65vh] md:h-[60vh] lg:h-[55vh] xl:h-[50vh] 2xl:h-[55vh]
          flex flex-col p-0
        ">
          <div className="px-6 pt-8 pb-5 text-center">
            <h3 className="text-3xl font-extrabold text-black dark:text-white tracking-tight">
              {t('How can we help you today?')}
            </h3>
            <p className="text-lg text-black dark:text-white mt-2">
              {t('Select an option to chat with us on WhatsApp.')}
            </p>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 space-y-5">
            {items.map(({ label, icon, text }) => (
              <a
                key={label}
                href={`https://wa.me/522225390369?text=${encodeURIComponent(text)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 bg-white dark:bg-[#030917] border border-gray-300 dark:border-gray-700 hover:bg-[#eff4f8] dark:hover:bg-zinc-700 transition-all duration-200 ease-in-out rounded-xl px-6 py-5 text-black dark:text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Icon name={icon} className="w-7 h-7 text-green-400" />
                <span className="text-xl">{label}</span>
              </a>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}