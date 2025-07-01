// components/ui/textarea.tsx
import * as React from "react"

import { cn } from "@/utils/misc"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-gray-700 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        // >>>>> AGREGAR ESTAS CLASES AQUÍ PARA REDUCIR Y CENTRAR EL ANCHO PREDETERMINADO <<<<<
        "max-w-5xl mx-auto", // O usa 'max-w-5xl' o 'max-w-6xl' según tu preferencia
        className // Esta línea asegura que las clases personalizadas pasadas por props aún funcionen
      )}
      {...props}
    />
  )
}

export { Textarea }