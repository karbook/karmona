import React from 'react';
import {
	UserRound,
	Tag,
	BadgeCheck,
	FolderOpen,
	Car,
	Instagram,
	GalleryHorizontalEnd,
	Laptop,
} from 'lucide-react';

const CustomIcon = () => (
	<img
		src="images/logo/karmona-square-simple-white.svg"
		alt="Logotipo Karmona"
		className="w-8 h-8"
	/>
);

interface DropdownItem {
	title: string;
	href: string;
	description?: string;
	icon: React.ElementType;
}

// --- Definiciones de los Items del Menú ---

const aboutUsItems: DropdownItem[] = [
	{
		title: 'Karmona',
		href: '/#karmona',
		description:
			'A modal dialog that interrupts the user with important content and expects a response.',
		icon: CustomIcon, //icono SVG personalizado
	},
	{
		title: 'Sobre Nosotros',
		href: '/',
		description: 'Conoce más sobre quiénes somos y nuestra misión.',
		icon: UserRound, // Icono de Lucide
	},
	{
		title: 'Promociones',
		href: '/#promociones',
		description: 'Descubre nuestras ofertas especiales.',
		icon: Tag, // Icono de Lucide
	},
];

const ourWorksItems: DropdownItem[] = [
	{
		title: 'Somos Especialistas',
		href: '/',
		description: 'Explora nuestros mejores proyectos.',
		icon: BadgeCheck, // Icono de Lucide
	},
	{
		title: 'Nuestros Proyectos',
		href: '/',
		description: 'Un vistazo a todo nuestro portafolio.',
		icon: FolderOpen, // Icono de Lucide
	},
	{
		title: 'Autos',
		href: '/',
		description: 'Resultados que hablan por sí mismos.',
		icon: Car, // Icono de Lucide
	},
];

const contactUsItems: DropdownItem[] = [
	{
		title: 'Instagram',
		href: '/',
		description: 'Envíanos un mensaje directo.',
		icon: Instagram, // Icono de Lucide
	},
	{
		title: 'Proyectos',
		href: '/',
		description: 'Encuéntranos en nuestras ubicaciones.',
		icon: GalleryHorizontalEnd, // Icono de Lucide
	},
];

// --- Exportaciones ---
export {
	aboutUsItems,
	ourWorksItems,
	contactUsItems,
	Laptop,
};
