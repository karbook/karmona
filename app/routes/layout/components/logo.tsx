import { Link } from 'react-router'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/misc'
import { Icon } from '@/components/ui/icon'

type LogoProps = {
	redirect?: string
	className?: string
	variant: 'long' | 'icon'
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

export default function Logo({ redirect, className, variant, alt }: LogoProps) {
	return (
		<Link to={redirect ?? '/'}>
			<Icon
				name={'karmona-long-white-XMOO6ZKG'}
				className={cn(
					logoVariants({ variant }),
					'text-dark dark:text-white',
					className
				)}
				aria-label={alt ?? 'Karmona Logo'}
				size={variant === 'long' ? '4xl' : 'md'}
			/>
		</Link>
	)
}
