{/* Los comentarios que se dejan son unicamente para el entendimiento del codigo
	Algunos son AI y otros son puetos por el desarrollador*/}


// UTILS
import { useTranslation } from 'react-i18next';
import React from 'react';

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
import { Link } from 'react-router-dom';
import Logo from './logo';
import { cn } from '@/utils/misc'
import { buttonVariants } from '@/components/ui/button';
import { Laptop } from 'lucide-react';

// DATOS PARA LOS DROPDOWNS
const nosotrosItems: { title: string; href: string; description?: string }[] = [
	{
		title: 'Karmona',
		href: '/docs/primitives/alert-dialog',
		description: 'A modal dialog that interrupts the user with important content and expects a response.',
	},
	{
		title: 'Sobre Nosotros',
		href: '/sobre-nosotros',
		description: 'Conoce más sobre quiénes somos y nuestra misión.',
	},
	{
		title: 'Promociones',
		href: '/promociones',
		description: 'Descubre nuestras ofertas especiales.',
	},
];

const nuestroTrabajoItems: { title: string; href: string; description?: string }[] = [
    { title: 'Proyectos Destacados', href: '/trabajos/destacados', description: "Explora nuestros mejores proyectos." },
    { title: 'Galería Completa', href: '/trabajos/galeria', description: "Un vistazo a todo nuestro portafolio." },
    { title: 'Casos de Éxito', href: '/trabajos/casos-exito', description: "Resultados que hablan por sí mismos." },
];

const contactoItems: { title: string; href: string; description?: string }[] = [
    { title: 'Formulario de Contacto', href: '/contacto/formulario', description: "Envíanos un mensaje directo." },
    { title: 'Nuestras Oficinas', href: '/contacto/oficinas', description: "Encuéntranos en nuestras ubicaciones." },
    { title: 'Soporte al Cliente', href: '/contacto/soporte', description: "Estamos aquí para ayudarte." },
];


export function Header() {
	// const { t } = useTranslation();

    // --- ESTILOS PERSONALIZADOS ---

    // Efecto Hover para los links del menú principal (Nosotros, Servicios, etc.)
    // Fondo blanco, texto negro al hacer hover.
    // transition-colors duration-200 (o duration-300) para la suavidad.
    const CUSTOM_HOVER_EFFECT_FOR_LINKS = "hover:bg-white hover:text-slate-900 transition-colors duration-200 ease-in-out";

    // Efecto Hover para el botón "Agendar Cita" (ya es blanco, quizás un ligero oscurecimiento)
    // Por ahora lo dejamos como un gris más oscuro al hacer hover.
    const CUSTOM_HOVER_EFFECT_FOR_BUTTON = "hover:bg-gray-200 transition-colors duration-200 ease-in-out";

    // Efecto Hover para el icono ShoppingBag (puede ser similar a los links o diferente)
    // Ejemplo: un fondo gris oscuro sutil
    const CUSTOM_HOVER_EFFECT_FOR_ICON = "hover:bg-slate-700 transition-colors duration-200 ease-in-out";


    // Tamaño de fuente para los items principales del menú y el botón
    const mainItemFontSize = "text-2xl"; // Prueba text-3xl si 2xl no es suficiente.

    // Clases base para todos los items clickeables del menú (sin el hover específico)
	const navItemBaseStyles = `bg-transparent text-white font-semibold h-auto rounded-md ${mainItemFontSize}`; // Quitamos transition-colors de aquí para que cada hover lo defina

    // Clases para los triggers y links del menú (incluyendo TU efecto hover)
	const navTriggerClasses = cn(
		navigationMenuTriggerStyle(),
		navItemBaseStyles,
        CUSTOM_HOVER_EFFECT_FOR_LINKS,
        "data-[active]:bg-slate-100 data-[active]:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900", // Estilos para activo/abierto (fondo blanco, texto negro)
		"px-3 py-2 lg:px-4 lg:py-3"
	);
	const navLinkClasses = cn(
		navigationMenuTriggerStyle(),
		navItemBaseStyles,
        CUSTOM_HOVER_EFFECT_FOR_LINKS,
        "data-[active]:bg-slate-100 data-[active]:text-slate-900", // Estilo para activo (fondo blanco, texto negro)
		"px-3 py-2 lg:px-4 lg:py-3"
	);

	return (
		<nav className={`w-full bg-[#0F172A] text-white flex items-center justify-between py-4 sm:py-5 px-4 sm:px-6 lg:px-8 shadow-xl`}>
            {/* Logo */}
            <div className="flex-shrink-0">
				<Link to="/" aria-label="Página de inicio">
					<Logo className={`h-10 md:h-12 lg:h-[55px]`} variant="long" />
				</Link>
			</div>

            {/* Contenedor para MENÚ y ACCIONES */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">

                {/* Menú de Navegación */}
                <NavigationMenu>
                    <NavigationMenuList className="gap-x-1 md:gap-x-1.5 lg:gap-x-2">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={navTriggerClasses}>
                                Nosotros
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[360px] gap-3 p-4 md:w-[450px] lg:w-[550px] md:grid-cols-1 bg-slate-800 text-white rounded-lg shadow-xl">
                                    {nosotrosItems.map((item) => (
                                        <ListItem
                                            key={item.title}
                                            href={item.href}
                                            title={item.title}

                                            className={`hover:bg-slate-600 rounded-md transition-colors duration-150 ease-in-out`}
                                        >
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link to="/servicios">
                                <NavigationMenuLink className={navLinkClasses}>
                                    Servicios
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={navTriggerClasses}>
                                Nuestro Trabajo
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[300px] gap-3 p-4 md:w-[350px] lg:w-[400px] md:grid-cols-1 bg-slate-800 text-white rounded-lg shadow-xl">
                                    {nuestroTrabajoItems.map((item) => (
                                        <ListItem key={item.title} href={item.href} title={item.title} className={`hover:bg-slate-600 rounded-md transition-colors duration-150 ease-in-out`}>
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link to="/faq">
                                <NavigationMenuLink className={navLinkClasses}>
                                    FAQ
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={navTriggerClasses}>
                                Contacto
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[360px] gap-3 p-4 md:w-[400px] bg-slate-800 text-white rounded-lg shadow-xl">
                                    {contactoItems.map((item) => (
                                        <ListItem key={item.title} href={item.href} title={item.title} className={`hover:bg-slate-600 rounded-md transition-colors duration-150 ease-in-out`}>
                                            {item.description}
                                        </ListItem>
                                    ))}
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
                            "bg-white text-slate-900",
                            CUSTOM_HOVER_EFFECT_FOR_BUTTON,
                            mainItemFontSize,
                            "font-semibold",
                            "h-auto",
                            "px-4 py-2 lg:px-5 lg:py-3",
                            "rounded-md"
                        )}
                    >
                        Agendar Cita
                    </Link>
                    <Link
                        to="/"
                        aria-label="Carrito de compras"

                        className={`p-2.5 rounded-md ${navItemBaseStyles} ${CUSTOM_HOVER_EFFECT_FOR_ICON}`}
                    >
                    <Laptop size={32} strokeWidth={1.75} /> {/* Ajusta size y strokeWidth según necesites */}
                    </Link>
                </div>
            </div>

			{/* Botón Menú cambio de tema */}

		</nav>
	);
}
