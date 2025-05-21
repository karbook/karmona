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
} from '@/routes/layout/components/public-header-items';
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
}
