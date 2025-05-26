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
	Users,
	Target,
	Eye,
	Milestone,
	HelpCircle,
	Wrench,
	Zap,
	Thermometer,
	HardDrive,
	CarFront,
	Replace,
	Wind,
	Users as UsersIcon
} from 'lucide-react';

// --NavMenu Items--
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
		title: 'Promociones',
		href: '/#promociones',
		description: 'Descubre nuestras ofertas especiales.',
		icon: Tag, // Icono de Lucide
	},
	{
		title: 'Sobre Nosotros',
		href: '/#about-us',
		description: 'Conoce más sobre quiénes somos y nuestra misión.',
		icon: UserRound, // Icono de Lucide
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

// -- Seccion 4 Items --

const promotionsData = [
	{
		id: 1,
		frontImage: '/images/promotions/promo-mama-karmona.webp', // RUTA A LA IMAGEN FRONTAL
		titleBack: 'Día de la Madre',
		descriptionBack:
			'¡Celebra a mamá! 20% de descuento en servicios seleccionados. Válido del 10 al 12 de Mayo. Aplican términos y condiciones.',
		footerBack: '*No acumulable con otras promociones.',
	},
	{
		id: 2,
		frontImage: '/images/promotions/aniversario-30-juntos.webp', // RUTA A LA IMAGEN FRONTAL
		titleBack: '30 Años Juntos',
		descriptionBack:
			'¡Gracias por tu confianza! 15% de descuento en mantenimiento de motor o frenos. Trae a consentir tu auto.',
		footerBack: '*Válido todo el mes de Junio.',
	},
	{
		id: 3,
		frontImage: '/images/promotions/aniversario-30-juntos-2.webp', // RUTA A LA IMAGEN FRONTAL
		titleBack: 'Mantenimiento Especial',
		descriptionBack:
			'10% de descuento en aceite Motul + Diagnóstico especializado GRATIS. ¡Tu auto en las mejores manos!',
		footerBack: '*Aplican restricciones.',
	},
];

const aboutSectionTabsData = [
	{
		id: 'quienes-somos',
		triggerTitle: 'Karmona',
		icon: HelpCircle,
		content: {
			title: 'Karmona',
			text: 'En Karmona, nos enorgullecemos de ser una empresa dedicada y apasionada por la excelencia en el servicio automotriz. Con una trayectoria sólida en la industria, nos comprometemos a brindar a nuestros clientes una experiencia excepcional en mantenimiento y reparación de vehículos.',
		},
	},
	{
		id: 'mision',
		triggerTitle: 'Misión',
		icon: Target,
		content: {
			title: 'Nuestra Misión',
			text: 'Nuestra misión es ofrecer soluciones automotrices integrales de la más alta calidad, utilizando tecnología de vanguardia y un equipo altamente capacitado, garantizando la satisfacción y seguridad de nuestros clientes en cada servicio.',
		},
	},
	{
		id: 'vision',
		triggerTitle: 'Visión',
		icon: Eye,
		content: {
			title: 'Nuestra Visión',
			text: 'Ser reconocidos por nuestra excelencia en el servicio, la transparencia en nuestras operaciones y la confiabilidad en cada reparación, construyendo relaciones sólidas y duraderas con cada uno de nuestros clientes.',
		},
	},
	//
	{
		id: 'historia',
		triggerTitle: 'Historia',
		icon: Milestone,
		content: [
			{
				year: 'Oct - 1992',
				title: 'Fundación',
				text: 'Se fundó el taller automotriz Karmona con un enfoque en servicios generales de reparación y mantenimiento.',
				icon: Milestone,
			},
			{
				year: 'Ene - 1995',
				title: 'Ampliación de Servicios',
				text: 'El taller amplía sus servicios para incluir diagnósticos computarizados y especialización en nuevas marcas.',
				icon: Laptop,
			},
		],
	},
];
// -- seccion 4 --
interface ServiceItem {
	id: string;
	title: string;
	description: string;
	icon: React.ElementType;
}

const initialServicesData: ServiceItem[] = [
	{
		id: 'mantenimiento-general',
		title: 'Mantenimiento General',
		description: 'Cambio de aceite y filtro, inspección y cambio de fluidos (transmisión, frenos, dirección asistida, refrigerante), Rotación de Neumáticos, etc.',
		icon: Wrench,
	},
	{
		id: 'reparaciones-mecanicas',
		title: 'Reparaciones Mecánicas',
		description: 'Las reparaciones mecánicas comprenden un conjunto diverso de servicios que se enfocan en solucionar problemas y mantener el funcionamiento óptimo de los componentes mecánicos de un vehículo.',
		icon: Zap, // Usando Zap para reparaciones eléctricas, puedes cambiarlo
	},
	{
		id: 'sistema-electrico',
		title: 'Sistema Eléctrico',
		description: 'La reparación del sistema eléctrico de un vehículo implica diagnosticar, identificar y solucionar problemas relacionados con los componentes eléctricos.',
		icon: Zap, // O considera `CircuitBoard` o similar
	},
	{
		id: 'sistema-climatizacion',
		title: 'Sistema de Climatización',
		description: 'La reparación del sistema de climatización en un vehículo implica diagnosticar y solucionar problemas que puedan afectar la capacidad del sistema para enfriar o calentar el habitáculo.',
		icon: Thermometer,
	},
	{
		id: 'diagnostico-computadora',
		title: 'Diagnóstico y Escaneo de Computadora',
		description: 'El diagnóstico y escaneo de la computadora en un vehículo son procesos fundamentales para identificar y solucionar problemas relacionados con los sistemas electrónicos y computarizados del automóvil.',
		icon: HardDrive,
	},
	{
		id: 'cambio-partes',
		title: 'Cambio de partes y accesorios',
		description: 'El cambio de partes y accesorios abarca una amplia variedad de tareas que van desde la sustitución de componentes desgastados hasta la instalación de accesorios adicionales.',
		icon: CarFront, // O `Settings2`
	},
];

const additionalServicesData: ServiceItem[] = [
	{
		id: 'reparacion-neumaticos',
		title: 'Reparación y reemplazo de Neumáticos',
		description: 'La reparación y reemplazo de neumáticos en un taller automotriz son servicios esenciales para garantizar la seguridad, el rendimiento y la eficiencia del vehículo.',
		icon: Replace,
	},
    {
		id: 'inspeccion-gases',
		title: 'Inspección y emisión de gases',
		description: 'La inspección y emisión de gases es un servicio clave que se realiza para evaluar y garantizar que los vehículos cumplan con los estándares ambientales y de emisiones.',
		icon: Wind,
	},
    {
		id: 'servicios-especializados',
		title: 'Servicios especializados',
		description: 'Los servicios especializados abarcan una variedad de tareas más específicas y técnicas, dirigidas a aspectos particulares del vehículo.',
		icon: UsersIcon, // Icono de ejemplo
	},
];

// --- Exportaciones ---
export {
	aboutUsItems,
	ourWorksItems,
	contactUsItems,
	aboutSectionTabsData,
	promotionsData,
	additionalServicesData,
	initialServicesData,
	Laptop,
};
