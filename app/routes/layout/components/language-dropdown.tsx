// CORE
import { useNavigate } from 'react-router'

// UTILS
import { useTranslation } from 'react-i18next'
import useUpdateSearchParams from '@/utils/hooks/use-update-search-params'

// COMPONENTS
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
const LanguageDropDown = () => {
	const { t, i18n } = useTranslation()
	const navigate = useNavigate()
	const { updateSearchParams } = useUpdateSearchParams()

	const onValueChange = (lang: string) => {
		i18n.changeLanguage(lang)
		document.cookie = `kb_lang=${lang}; path=/; max-age=31536000`
		navigate(location.pathname)
	}
	const currentLangCode = i18n.language.toUpperCase()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="default" className="flex items-center gap-2 rounded-full px-3 py-2 dark:hover:bg-gray-700 hover:bg-[#ebf0f7]">
					<Icon name="globe" className="w-5 h-5 text-black dark:text-white" />
					<span className="text-sm font-medium text-black dark:text-white">{currentLangCode}</span>
					<span className="sr-only">{t('Language')}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" className='bg-white dark:bg-[#030917] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2'>
				<DropdownMenuRadioGroup value={i18n.language} onValueChange={onValueChange}>
					<DropdownMenuRadioItem
						className="p-2 data-[state=checked]:font-bold cursor-pointer"
						indicator={false}
						value="es"
					>
						<img
							src="/images/flag/mx.svg"
							alt="ES"
							className="mr-2 font-semibold"
							width={27}
							height={27}
							loading="lazy"
						/>
						{t('Español')}
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem
						className="p-2 data-[state=checked]:font-bold cursor-pointer"
						indicator={false}
						value="en"
					>
						<img
							src="/images/flag/us.svg"
							alt="EN"
							className="mr-2 font-semibold"
							width={27}
							height={27}
							loading="lazy"
						/>
						{t('English')}
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}


export default LanguageDropDown
