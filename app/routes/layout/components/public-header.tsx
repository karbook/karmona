import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/misc';
import { buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Icon } from '@/components/ui/icon';
import { ColorSchemeSwitch } from '@/components/color-scheme-switch';
import Logo from './logo';
import LanguageDropDown from './language-dropdown';
import { MobileNavigation } from './public-mobile-navigation';
import { menuItems } from '../constants';

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="sticky top-0 w-full py-8 min-h-[80px] bg-white dark:bg-[#030917] z-50 flex items-center justify-between px-4 2xl:px-20 border-b border-gray-300 dark:border-gray-700">
      <div className="flex items-center justify-between w-full lg:hidden">
        <div className="flex-shrink-0">
          <MobileNavigation />
        </div>
        <div className="flex-grow flex justify-center">
          <Logo className="h-7 w-auto" variant="long" />
        </div>
        <div className="flex-shrink-0 flex items-center gap-4" />
      </div>
      <div className="hidden lg:flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo className="h-5 w-auto" variant="long" />
        </div>

        <div className="flex flex-1 justify-end items-center gap-6">
          <NavigationMenu className="flex">
            <NavigationMenuList className="flex gap-4">
              {menuItems.map((item, index) => {
                if (item.type === 'dropdown') {
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger
                        className={cn(
                          "px-4 py-2 text-lg font-semibold tracking-wide rounded-md transition-colors duration-300",
                          "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#030917]"
                        )}
                      >
                        {t(item.label)}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        className="bg-white dark:bg-[#030917] min-h-[220px] p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg"
                      >                        
                      <ul className="flex gap-4 p-4 md:w-[600px]">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex} className="flex-1">
                              <NavigationMenuLink asChild>
                                <Link
                                  to={dropdownItem.path}
                                  className={cn(
                                    "block p-3 text-center rounded-xl min-h-[200px] transition-colors duration-300",
                                    "bg-[#ecf2f6] dark:bg-gray-800",
                                    " hover:text-dark",
                                    "flex flex-col items-center justify-center",
                                    location.pathname === dropdownItem.path
                                      ? "bg-blue-900 text-white dark:bg-blue-400 dark:text-black"
                                      : ""
                                  )}
                                >
                                  <div className="flex flex-col items-center gap-1">
                                    <Icon
                                      name={dropdownItem.icon}
                                      className="w-20 h-20 text-dark dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                                    />
                                    <div className="text-2xl font-semibold">{t(dropdownItem.label)}</div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>

                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                } else {
                  const isActive = location.pathname === item.path;
                  return (
                    <NavigationMenuItem key={index}>
                      <Link
                        to={item.path}
                        className={cn(
                          "relative inline-flex items-center justify-center px-4 py-2 text-lg font-semibold tracking-wide rounded-md transition-all duration-300",
                          "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#030917]",
                          "hover:shadow-md hover:scale-105",
                          isActive
                            ? "text-black dark:text-white"
                            : "text-gray-800 dark:text-gray-300"
                        )}
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {t(item.label)}
                      </Link>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>

            <Link to="/appointment"
              className={cn(
                "ml-5 p-4 text-lg flex items-center justify-between",
                buttonVariants({ variant: "black" })
              )}
            >
              {t("Schedule Appointment")}
            </Link>
          </NavigationMenu>

          <div className="flex gap-4 items-center">
            <ColorSchemeSwitch />
            <LanguageDropDown />
          </div>
        </div>
      </div>
    </nav>
  );
}
