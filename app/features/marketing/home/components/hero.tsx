// UTILS
import { useTranslation } from 'react-i18next'
import { cn } from '@/utils/misc'

// COMPONENTS
import { Container } from '@/components/ui/container'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'


export default function Hero() {
	const { t } = useTranslation()

	return (
		<Container className="px-0">
			<main className="grid h-full place-items-center">

			</main>
		</Container>
	)
}
