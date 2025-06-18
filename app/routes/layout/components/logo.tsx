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
			long: 'w-20 h-auto',
            icon: 'w-5 h-5',
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
				alt={alt ? alt : 'Karmona Logo'}
				src={`/images/logo/karmona-${variant}-${colorScheme === 'dark' ? 'dark' : preferredColorScheme === 'dark' ? 'dark' : 'light'}.png`}
			/>
		</Link>
	)
}
