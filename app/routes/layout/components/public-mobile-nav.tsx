import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import {
	aboutUsItems,
	ourWorksItems,
	contactUsItems,
} from '@/routes/layout/components/public-header-items';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { SheetClose } from '@/components/ui/sheet';


const MobileNavLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => (
	<SheetClose asChild>
		<Link
			to={href}
			className="block py-3 px-4 text-lg font-medium text-white hover:bg-blue-900 rounded-md transition-colors"
		>
			{children}
		</Link>
	</SheetClose>
);

export function MobileNav() {
	return (
			<div className="flex flex-col h-full bg-[#0F172A]">
				{/* Logo en la parte superior del menú móvil */}
				<div className="p-4 border-b border-gray-200"> {/* Mantengo border-gray-200 como lo tenías */}
					<SheetClose asChild>
						<div className="p-8"> {/* Mantengo el p-8 que tenías */}
							<Link to="/" aria-label="Página de inicio"> {/* Texto en español */}
								<Logo className="h-15 w-100" variant="long" /> {/* Clases originales del logo */}
							</Link>
						</div>
					</SheetClose>
				</div>

				{/* Contenedor de navegación con scroll */}
				<nav className="flex-grow p-4 space-y-1 overflow-y-auto">
					{/* Nosotros */}
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="about-us" className="border-b-0"> {/* border-b-0 para quitar línea, puedes ajustarlo */}
							<AccordionTrigger className="py-3 px-4 text-lg font-normal text-white hover:bg-blue-900 rounded-md no-underline hover:no-underline data-[state=open]:bg-blue-900 [&[data-state=open]>svg]:rotate-180">
								Nosotros {/* Texto en español */}
							</AccordionTrigger>
							<AccordionContent className="pb-1 pl-4">
								{aboutUsItems.map((item) => ( // item.title ya viene en español desde el array
									<MobileNavLink key={item.title} href={item.href}>
										<div className="flex items-center gap-3 py-1">
											{item.icon && <item.icon className="w-5 h-5 text-white" size={20} />}
											<span className="text-md text-white">{item.title}</span>
										</div>
									</MobileNavLink>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					{/* Servicios (Link directo) */}
					<MobileNavLink href="/">Servicios</MobileNavLink> {/* Texto en español */}

					{/* Nuestros Trabajos */}
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="our-work" className="border-b-0">
							<AccordionTrigger className="py-3 px-4 text-lg font-normal text-white hover:bg-blue-900 rounded-md no-underline hover:no-underline data-[state=open]:bg-blue-900 [&[data-state=open]>svg]:rotate-180">
								Nuestros Trabajos {/* Texto en español */}
							</AccordionTrigger>
							<AccordionContent className="pb-1 pl-4">
								{ourWorksItems.map((item) => (
									<MobileNavLink key={item.title} href={item.href}>
										<div className="flex items-center gap-3 py-1">
											{item.icon && <item.icon className="w-5 h-5 text-white" size={20} />}
											<span className="text-md">{item.title}</span> {/* Mantuve text-md sin text-white aquí como en tu original */}
										</div>
									</MobileNavLink>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					{/* FAQ (Link directo) */}
					<MobileNavLink href="/">FAQ</MobileNavLink> {/* Texto en español (o como lo tengas) */}

					{/* Contacto */}
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="contact" className="border-b-0">
							<AccordionTrigger className="py-3 px-4 text-lg font-normal text-white hover:bg-blue-900 rounded-md no-underline hover:no-underline data-[state=open]:bg-blue-900 [&[data-state=open]>svg]:rotate-180">
								Contacto {/* Texto en español */}
							</AccordionTrigger>
							<AccordionContent className="pb-1 pl-4">
								{contactUsItems.map((item) => (
									<MobileNavLink key={item.title} href={item.href}>
										<div className="flex items-center gap-3 py-1">
											{item.icon && <item.icon className="w-5 h-5 text-white" size={20} />}
											<span className="text-md">{item.title}</span> {/* Mantuve text-md sin text-white aquí como en tu original */}
										</div>
									</MobileNavLink>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					<div className="pt-6 mt-auto">
						<SheetClose asChild>
							<Link
								to="/schedule-appointment"
								className="block w-full text-center py-3 px-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
							>
								Agendar Cita {/* Texto en español */}
							</Link>
						</SheetClose>
					</div>
				</nav>
			</div>
		);
}
