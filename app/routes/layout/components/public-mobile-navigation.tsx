import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/misc';

import { Button, buttonVariants } from '@/components/ui/button';
import { ColorSchemeSwitch } from '@/components/color-scheme-switch';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Icon } from '@/components/ui/icon';

import LanguageDropDown from './language-dropdown';
import Logo from './logo';
import { menuItems } from '../constants';

export function MobileNavigation() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Icon name="menu" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="hide-scrollbar w-4/6 overflow-y-auto bg-white dark:bg-[#030917] lg:hidden"
      >
        <SheetHeader>
          <Logo className="h-5 w-45" variant="long" />
        </SheetHeader>

        <div className="mt-8 h-full px-4 flex flex-col gap-6">
          {/* Menu items */}
          <ul className="space-y-4">
            {menuItems.map((item, index) => {
              if (item.type === 'dropdown') {
                return item.dropdownItems.map((sub, subIndex) => (
                  <li key={`${index}-${subIndex}`}>
                    <Link
                      to={sub.path}
                      className={cn(
                        'flex items-center gap-3 p-2 rounded-lg text-base font-medium transition-colors',
                        location.pathname === sub.path
                          ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-black'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      )}
                    >
                      <Icon
                        name={sub.icon}
                        className="w-5 h-5 text-muted-foreground"
                      />
                      <span>{t(sub.label)}</span>
                    </Link>
                  </li>
                ));
              } else {
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className={cn(
                        'block p-2 text-base font-medium rounded-md transition-colors',
                        location.pathname === item.path
                          ? 'bg-blue-600 text-white dark:bg-blue-400 dark:text-black'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      )}
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>

          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <Link
              to="/appointment"
              className={cn(buttonVariants({ variant: 'black' }), 'w-full')}
            >
              {t('Schedule Appointment')}
            </Link>
            
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-border">
            <LanguageDropDown />
            <ColorSchemeSwitch />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
