// CORE
import { Link } from 'react-router'

// UTILS
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/misc'

// COMPONENTS
import { useColorScheme, type ColorScheme } from '@/routes/resource/color-scheme'

type LogoProps = {
	redirect?: string
	className?: string
	variant: 'long' | 'icon'
	colorScheme?: ColorScheme
	alt?: string
}

export const logoVariants = cva('', {
	variants: {
		variant: {
<<<<<<< HEAD
			long: 'w-20 h-auto',
            icon: 'w-5 h-5',
=======
			long: 'w-85 h-auto',
			icon: 'size-7',
>>>>>>> 6c098227fa35a5094a05777aab029ab2355d8c87
		},
	},
})

export default function Logo({ redirect, className, variant, alt, colorScheme }: LogoProps) {
	const preferredColorScheme = useColorScheme()
	return (
		<Link to={redirect ? redirect : '/'}>
			<img
				loading="lazy"
				className={cn(logoVariants({ variant }), className)}
<<<<<<< HEAD
				alt={alt ? alt : 'Karmona Logo'}
				src={`/images/logo/karmona-${variant}-${colorScheme === 'dark' ? 'dark' : preferredColorScheme === 'dark' ? 'dark' : 'light'}.png`}
=======
				alt={alt ? alt : 'Karmona | Logo'}
				src={`/images/logo/karmona-long-white.svg`}
>>>>>>> 6c098227fa35a5094a05777aab029ab2355d8c87
			/>
		</Link>
	)
}
