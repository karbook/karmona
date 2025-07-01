import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button" // Asegúrate de que este componente `Button` es el que modificaste
import { Icon } from "@/components/ui/icon"

export default function WhatsAppMenu() {
  const items = [
    {
      label: "Status de mi auto",
      icon: "car",
      text: "Quiero conocer el status de mi auto",
    },
    {
      label: "Solicitar información",
      icon: "help-circle",
      text: "Deseo información adicional",
    },
    {
      label: "Consulta de costos y presupuestos",
      icon: "dollar-sign",
      text: "Consulta de costos y presupuestos",
    },
    {
      label: "Solicitar factura",
      icon: "receipt",
      text: "Quiero solicitar una factura",
    },
    {
      label: "Enviar mensaje",
      icon: "message-circle",
      text: "Quiero enviar un mensaje",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="whatsapp"
            size="whatsapp"
            aria-label="Abrir WhatsApp"
          >
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              // Ajusta el tamaño del SVG para que sea proporcional al botón (ej. 64px para 96px de botón)
              className="w-[64px] h-[64px] !w-[64px] !h-[64px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fff" // Ahora el fondo del SVG es blanco, ya que el botón es verde
                d="M16.001 2.667c-7.333 0-13.333 6-13.333 13.333 0 2.427.667 4.707 1.84 6.693L2.667 29.333l6.96-1.867c1.893 1.187 4.133 1.867 6.373 1.867 7.333 0 13.333-6 13.333-13.333S23.334 2.667 16.001 2.667Z"
              />
              <path
                fill="#25D366" // El ícono interno ahora es verde, para el contraste
                d="M24.08 20.293c-.4-.2-2.4-1.187-2.773-1.333-.373-.133-.64-.2-.907.2-.267.4-1.04 1.333-1.28 1.6-.24.267-.467.293-.867.067-.4-.2-1.693-.627-3.227-2-1.2-1.067-2-2.387-2.24-2.787-.24-.4-.027-.613.18-.813.187-.187.427-.48.64-.747.213-.267.28-.467.427-.747.133-.267.067-.493-.04-.693-.107-.2-1.173-2.827-1.6-3.8-.42-.973-.84-.867-1.147-.88l-.98-.013c-.333 0-.873.133-1.333.667-.48.507-1.84 1.867-1.84 4.547s1.893 5.28 2.147 5.627c.253.347 3.64 5.587 8.84 7.84.893.387 1.587.613 2.127.787.893.28 1.707.24 2.347.147.72-.107 2.213-.893 2.533-1.76.32-.867.32-1.6.213-1.76-.107-.16-.427-.267-.893-.467Z"
              />
            </svg>
            <span className="sr-only">Abrir WhatsApp</span>
          </Button>
        </DrawerTrigger>

        <DrawerContent className="
  fixed bottom-0 inset-x-0 w-full
  bg-gradient-to-b from-zinc-900 to-black
  border-t border-zinc-700
  rounded-t-[1.25rem] shadow-2xl
  h-[70vh] sm:h-[65vh] md:h-[60vh] lg:h-[55vh] xl:h-[50vh] 2xl:h-[55vh]
  flex flex-col p-0
">
          <div className="px-6 pt-8 pb-5 border-b border-zinc-800 text-center">
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              ¿Cómo podemos ayudarte hoy?
            </h3>
            <p className="text-lg text-zinc-400 mt-2">
              Selecciona una opción para chatear con nosotros por WhatsApp.
            </p>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 space-y-5">
            {items.map(({ label, icon, text }) => (
              <a
                key={label}
                href={`https://wa.me/522218246060?text=${encodeURIComponent(text)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 bg-zinc-800 hover:bg-zinc-700 transition-all duration-200 ease-in-out rounded-xl px-6 py-5 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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