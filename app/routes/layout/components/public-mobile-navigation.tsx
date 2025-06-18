import { Link } from 'react-router-dom';

// UTILS
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/misc';

// COMPONENTS
import { Button, buttonVariants } from '@/components/ui/button';
import { ColorSchemeSwitch } from '@/components/color-scheme-switch';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Icon } from '@/components/ui/icon';
import LanguageDropDown from './language-dropdown';
import Logo from './logo';
import { useColorScheme } from '@/routes/resource/color-scheme';

const mobileMenuItems = [
  { path: '/', label: 'Home' },
  { path: '/events', label: 'Events' },
  { path: '/programs', label: 'Programs' },
  { path: '/ambassors', label: 'Ambassadors' },
  { path: '/sponsor', label: 'Sponsors' },
];

export function MobileNavigation() {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  const COLOR_SCHEME_OPTIONS = [
    { value: 'light', name: t('Light'), bgColor: 'bg-white text-black', hoverColor: 'hover:bg-gray-200' },
    { value: 'dark', name: t('Dark'), bgColor: 'bg-black text-white', hoverColor: 'hover:bg-gray-700' }, 
  ];

  const mode = colorScheme;
  const currentOption = COLOR_SCHEME_OPTIONS.find((option) => option.value === mode);

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant="default"
          size="icon"
          className={`${currentOption?.bgColor} ${currentOption?.hoverColor} p-3 rounded-full transition-colors duration-200`}
        >
          <Icon name="menu" className={currentOption?.bgColor.includes('text-white') ? 'text-white' : 'text-black'} />
          <span className="sr-only">{t('Menu')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="hide-scrollbar w-4/6 overflow-y-auto lg:hidden">
        <SheetHeader>
          <Logo className="h-8 w-32" variant="long" />
          <SheetTitle className="sr-only">{('Menú of Navigation')}</SheetTitle>
          <SheetDescription className="sr-only">
            {('Navigation')}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 h-full px-2">
          <ul className="space-y-4">
            <li>
              <div className="px-4">
                <LanguageDropDown />
              </div>
            </li>
            <li>
              <div className="mb-4 px-4">
                <ColorSchemeSwitch />
              </div>
            </li>
            {mobileMenuItems.map((item, index) => (
              <li key={index}>
                <div className="flex w-full">
                  <Link
                    to={item.path}
                    className={cn(
                      buttonVariants({ variant: 'blackTransparent', size: 'full' }),
                      'w-full px-4 py-2 text-left'
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              </li>
            ))}
            <li>
              <div className="flex w-full">
              </div>
            </li>
            <li>
              <div className="flex w-full">
                <Link
                  to="/login"
                  className={cn(buttonVariants({ variant: 'blackTransparent', size: 'full' }), 'w-full px-4 py-2')}
                >
                  {t('Log in')}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}