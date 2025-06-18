import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/misc"

const buttonVariants = cva(
<<<<<<< HEAD
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: cn(
					'bg-primary text-primary-foreground hover:bg-primary-hover',
					// CUSTOM STYLES OVERRIDE
					'bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover'
				),
				destructive: cn(
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
					// CUSTOM STYLES OVERRIDE
					'bg-button-destructive text-button-destructive-foreground hover:bg-button-destructive-hover'
				),
				outline: cn(
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
					// CUSTOM STYLES OVERRIDE
					'bg-button-outline border-button-outline-border'
				),
				secondary: cn(
					'bg-secondary text-secondary-foreground hover:bg-secondary/80',
					// CUSTOM STYLES OVERRIDE
					'bg-button-secondary text-button-secondary-foreground hover:bg-button-secondary-hover'
				),
				ghost: cn(
					'hover:bg-accent hover:text-accent-foreground',
					// CUSTOM STYLES OVERRIDE
					'bg-button-ghost hover:bg-button-ghost-hover hover:text-button-ghost-foreground'
				),
				link: cn(
					'text-primary underline-offset-4 hover:underline',
					// CUSTOM STYLES OVERRIDE
					'text-button-primary'
				),

				// CUSTOM VARIANTS
				input: cn(
					'bg-button-input text-button-input-foreground hover:bg-button-input-hover hover:text-accent-foreground border border-input-border justify-start text-left overflow-auto'
				),
				dashed: cn(
					'border-2 border-dashed bg-button-outline border-button-outline-border hover:bg-accent hover:text-accent-foreground'
				),
				 black: cn(
                    'bg-black text-white text-2xl hover:bg-neutral-800',
                    'dark:bg-white dark:text-black dark:hover:bg-neutral-300 dark:hover:text-black',
                    'font-bold rounded-md'
                ),
			},
			size: {
				default: 'h-button p-button',
				sm: 'h-button-sm rounded-md p-button-sm',
				lg: 'h-button-lg rounded-md p-button-lg',
				icon: 'h-button-icon p-button-icon', // CUSTOMIZED

				// CUSTOM SIZES
				wide: 'px-24 py-5',
				pill: 'px-12 py-3 leading-3',
				xs: 'h-button-xs rounded-md px-button-xs',
				input: 'h-input p-button-sm',
				full: 'w-full h-full px-4 py-2',
				dropdown: 'h-button-lg p-button-lg justify-start w-full',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
=======
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
>>>>>>> 6c098227fa35a5094a05777aab029ab2355d8c87
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
