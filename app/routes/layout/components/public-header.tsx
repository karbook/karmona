<<<<<<< HEAD
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
=======
{/* Los comentarios que se dejan son unicamente para el entendimiento del codigo
	Algunos son AI y otros son puetos por el desarrollador*/}

// UTILS
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


// COMPONENTS
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuContent,
	NavigationMenuTrigger,
	ListItem,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import {
	aboutUsItems,
	ourWorksItems,
	contactUsItems,
	Laptop,
} from '@/routes/layout/components/hero-maps-items.tsx';

import { Link } from 'react-router-dom';
import Logo from './logo';
import { cn } from '@/utils/misc';
import { buttonVariants } from '@/components/ui/button';

//Menu mobil
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { MobileNav } from './public-mobile-nav';
import { Menu as MenuIcon } from 'lucide-react';

export function Header() {
	// const { t } = useTranslation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const CUSTOM_HOVER_EFFECT_FOR_LINKS =
		'hover:bg-blue-900 hover:text-white transition-colors duration-200 ease-in-out';
	const CUSTOM_HOVER_EFFECT_FOR_BUTTON =
		'hover:bg-blue-900 hover:text-white transition-colors duration-200 ease-in-out';
	const CUSTOM_HOVER_EFFECT_FOR_ICON =
		'hover:bg-blue-900  transition-colors duration-200 ease-in-out';
	const mainItemFontSize = 'text-2xl';
	const navItemBaseStyles = `bg-transparent text-white font-semibold h-auto rounded-md ${mainItemFontSize}`;

	const navTriggerClasses = cn(
		navigationMenuTriggerStyle(),
		navItemBaseStyles,
		CUSTOM_HOVER_EFFECT_FOR_LINKS,
		'data-[active]:bg-slate-100 data-[active]:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900',
		'px-3 py-2 lg:px-4 lg:py-3'
	);
	const navLinkClasses = cn(
		navigationMenuTriggerStyle(),
		navItemBaseStyles,
		CUSTOM_HOVER_EFFECT_FOR_LINKS,
		'data-[active]:bg-slate-100 data-[active]:text-slate-900',
		'px-3 py-2 lg:px-4 lg:py-3'
	);

	return (
		<nav
					className={cn(
                "w-full bg-[#0F172A] text-white flex items-center justify-between py-4 sm:py-5 px-4 sm:px-6 lg:px-8 shadow-xl",
                "fixed top-0 left-0 right-0 z-50" // Clases para hacerlo fijo
            )}
				>
			{/* Logo */}
			<div className="flex-shrink-0">
				<Link to="/" aria-label="Página de inicio">
					<Logo className={`h-10 ml-10 md:h-12 lg:h-[55px]`} variant="long" />
				</Link>
			</div>

			{/* Contenedor para MENÚ y ACCIONES */}

			{/* Nosotros */}
			<div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
				<NavigationMenu>
					<NavigationMenuList className="gap-x-1 md:gap-x-1.5 lg:gap-x-2">
						<NavigationMenuItem>
							<NavigationMenuTrigger className={navTriggerClasses}>
								Nosotros
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[500px] gap-4 p-6 md:w-[600px] lg:w-[760px] md:grid-cols-1 bg-slate-800 text-white rounded-2xl shadow-2xl">
									{aboutUsItems.map(
										({ title, href, description, icon: IconComponent }) => (
											<ListItem
												key={title}
												href={href}
												className="hover:bg-blue-950 rounded-md transition-colors duration-150 ease-in-out"
											>
												<div className="flex flex-col items-center text-center gap-3 p-3">
													{IconComponent && (
														<IconComponent
														className="w-20 h-20 text-white mb-2 md:w-14 md:h-14 size-1.5"/>
													)}
													<h3 className="font-semibold text-white text-xl md:text-2xl">
														{title}
													</h3>
													<p className="text-base md:text-lg text-gray-300">
														{description}
													</p>
												</div>
											</ListItem>
										)
									)}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>

						{/* Servicios */}
						<NavigationMenuItem>
							<Link to="/servicios">
								<NavigationMenuLink className={navLinkClasses}>
									Servicios
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>

						{/*NUESTRO TRABAJO */}
						<NavigationMenuItem>
							<NavigationMenuTrigger className={navTriggerClasses}>
								Nuesto Trabajo
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[500px] gap-4 p-6 md:w-[600px] lg:w-[760px] md:grid-cols-1 bg-slate-800 text-white rounded-2xl shadow-2xl">
									{ourWorksItems.map(
										({ title, href, description, icon: IconComponent }) => (
											<ListItem
												key={title}
												href={href}
												className="hover:bg-blue-950 rounded-md transition-colors duration-150 ease-in-out"
											>
												<div className="flex flex-col items-center text-center gap-3 p-3">
													{IconComponent && (
														<IconComponent
															className="w-20 h-20 text-white mb-2 md:w-14 md:h-14 size-1.5"
														/>
													)}
													<h3 className="font-semibold text-white text-xl md:text-2xl">
														{title}
													</h3>
													<p className="text-base md:text-lg text-gray-300">
														{description}
													</p>
												</div>
											</ListItem>
										)
									)}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>

						{/*FAQ */}
						<NavigationMenuItem>
							<Link to="/faq">
								<NavigationMenuLink className={navLinkClasses}>
									FAQ
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>

						{/* Contacto */}
						<NavigationMenuItem>
							<NavigationMenuTrigger className={navTriggerClasses}>
								Contacto
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[500px] gap-4 p-6 md:w-[600px] lg:w-[760px] md:grid-cols-1 bg-slate-800 text-white rounded-2xl shadow-2xl">
									{contactUsItems.map(
										({ title, href, description, icon: IconComponent }) => (
											<ListItem
												key={title}
												href={href}
												className="hover:bg-blue-950 rounded-md transition-colors duration-250 ease-in-out"
											>
												<div className="flex flex-col items-center text-center gap-3 p-3">
													{IconComponent && (
														<IconComponent
															className="w-20 h-20 text-white mb-2 md:w-14 md:h-14 size-1.5"
														/>
													)}
													<h3 className="font-semibold text-white text-xl md:text-2xl">
														{title}
													</h3>
													<p className="text-base md:text-lg text-gray-300">
														{description}
													</p>
												</div>
											</ListItem>
										)
									)}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				{/* Acciones a la Derecha (botón e icono) */}
				<div className="flex items-center space-x-2">
					<Link
						to="/agendar-cita"
						className={cn(
							buttonVariants({ variant: 'default' }),
							'bg-white text-slate-900',
							CUSTOM_HOVER_EFFECT_FOR_BUTTON,
							mainItemFontSize,
							'font-semibold',
							'h-auto',
							'px-4 py-2 lg:px-5 lg:py-3',
							'rounded-md'
						)}
					>
						Agendar Cita
					</Link>
					<Link
						to="/"
						aria-label="Configuración o Mi Cuenta"
						className={`p-2.5 rounded-md ${navItemBaseStyles} ${CUSTOM_HOVER_EFFECT_FOR_ICON}`}
					>
						<Laptop size={32} strokeWidth={1.75} />
					</Link>
				</div>
			</div>

			{/* Botón Menú cambio de tema (o menú móvil) */}
			<div className="lg:hidden">
							<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
								<SheetTrigger asChild>
									<button
										type="button"
										aria-label="Open navigation menu"
										className="p-2.5 rounded-md text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
									>
										<MenuIcon size={32} strokeWidth={1.75} />
									</button>
								</SheetTrigger>
								<SheetContent side="right" className="w-[300px] sm:w-[340px] p-0 bg-white overflow-y-auto">
									<MobileNav />
								</SheetContent>
							</Sheet>
						</div>
		</nav>
	);
>>>>>>> 6c098227fa35a5094a05777aab029ab2355d8c87
}
