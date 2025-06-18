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

import { ColorSchemeSwitch } from '@/components/color-scheme-switch';
import Logo from './logo';
import LanguageDropDown from './language-dropdown';
import { MobileNavigation } from './public-mobile-navigation';

const menuItems = [
  {
    type: 'dropdown',
    label: 'Us',
    dropdownItems: [
      { path: '/programs/sub1', label: 'Karmona' },
      { path: '/programs/sub2', label: 'About Us' },
      { path: '/programs/sub3', label: 'Promotions' },
    ],
  },
  { type: 'link', path: '/events', label: 'Services' },
  {
    type: 'dropdown',
    label: 'Our Work',
    dropdownItems: [
      { path: '/projects', label: 'Our projects' },
      { path: '/specialists', label: 'We are specialists' },
      { path: '/cars', label: 'Cars' },
    ],
  },
  { type: 'link', path: '/faq', label: 'FAQ' },
  {
    type: 'dropdown',
    label: 'Contact',
    dropdownItems: [
      { path: '/contact', label: 'Contact Us' },
      { path: '/support', label: 'Our Instagram' },
    ],
  },
] as const;

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <nav className="sticky top-0 w-full py-8 min-h-[80px] bg-white/70 dark:bg-[#03091780] backdrop-blur-md shadow-md z-50 flex items-center justify-between px-4 2xl:px-20">
      {/* Mobile Header */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <div className="flex-shrink-0">
          <MobileNavigation />
        </div>
        <div className="flex-grow flex justify-center">
          <Logo className="h-10 w-auto" variant="long" />
        </div>
        <div className="flex-shrink-0 flex items-center gap-4" />
      </div>

      {/* Desktop Header */}
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
                      <NavigationMenuContent>
                        <ul className="flex gap-4 p-4 md:w-[600px]">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex} className="flex-1">
                              <NavigationMenuLink asChild>
                                <Link
                                  to={dropdownItem.path}
                                  className={cn(
                                    "block p-3 text-center rounded-md transition-colors",
                                    "hover:bg-blue-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black",
                                    location.pathname === dropdownItem.path
                                      ? "bg-blue-900 text-white dark:bg-blue-400 dark:text-black"
                                      : ""
                                  )}
                                >
                                  <div className="text-sm font-medium">{t(dropdownItem.label)}</div>
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
                            ? "text-black dark:text-white border-b-2 border-black dark:border-white"
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

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "ml-5 p-4 text-lg flex items-center justify-between",
                buttonVariants({ variant: "black" })
              )}
            >
              {t("Schedule Appointment")}
            </a>
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
