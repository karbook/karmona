import type { IconName } from "@/components/ui/icons/types";

export type Promotions = {
	title: string;
	description: string;
	details?: string[];
	location: string;
	validity?: string;
	image: string;
}
export const promotions: Promotions[] = [
	{
		title: "Día de las Madres 💐",
		description:
			"Celebra el mes de la madre, si eres maestra, abogada, doctora, madre de familia, etc. obtén con nosotros 🥰 hasta 20% de descuento para ustedes” 🤯 En Karmona, reconocemos la labor de las mujeres extraordinarias en nuestras vidas con descuentos exclusivos como este: 👉 Arma tu team de mamás de 3 unidades o más para servicio de mantenimiento y/o frenos y obtén un 20% de descuento en la mano de obra. 🚨 ¡Este mes de la madre, regala seguridad y confianza en su movilidad, ven a Karmona y celebremos a esas mujeres especiales juntos!",

		location: "📍 Av 2Pte 3106, Col. Amor, Puebla, Pue.",
		validity: "🗓️ Válido del 10 de mayo al 10 de junio",
		image: "/images/promotions/mother-day-promotion.webp",
	},
	{
		title: "🎉 30 años juntos",
		description:
			"¡En Karmona estamos de fiesta gracias a ti y tu confianza por más de 30 años! 🙌 🎉Por eso queremos agradecerte con este increíble descuento. Festejemos juntos nuestros 30 años de servicio y confiabilidad con un 15% de descuento en servicio de mantenimiento de motor o frenos ” 🤯Trae a consentir tu auto con nosotros, adquiere tu servicio de mantenimiento y/o a servicio de frenos y obtén un 15% de descuento 🥳🍾 📍 Avenida 2 poniente 3106 Col. Amor 72140, Puebla, Pue.",
		details: ["Mantenimiento de motor o frenos con 15% de descuento"],
		location: "📍 Av. 2 Poniente 3106, Col. Amor, Puebla, Pue.",
		image: "/images/promotions/promotion-engine-service.webp",
	},
	{
		title: "🛢️ Aceite Premium Motul",
		description:
			'En Karmona estamos de fiesta y celebramos juntos cuidando el alma de tu vehículo y más en este mes tan especial de las Madres! "Ven y celebra 30 años de seguridad y confiabilidad para tu auto obten 10% de descuento en aceite Premium Motul sintético” 🤯 🙌🎉 Regala seguridad a quien más te ama este 10 de mayo 🙌 🎉 Karmona, tu aliado de confianza.📍 Av 2Pte 3106 Col. Amor 72140, Puebla, Pue.',
		location: "📍 Av 2Pte 3106, Col. Amor, Puebla, Pue.",
		image: "/images/promotions/promotion-discount-oil.webp",
	},
]

export type Details = {
	value: string;
	title: string;
	content: string | HistorySlide[];
	icon: IconName;
}

export type HistorySlide = {
	date: string
	headline: string
	description: string
	icon: IconName;

}
export const details: Details[] = [
	{
		value: 'karmona',
		title: '¿Quiénes Somos?',
		content: `En Karmona, nos enorgullecemos de ser una empresa dedicada y apasionada por la excelencia en el servicio automotriz. Con una trayectoria sólida en la industria, nos comprometemos a brindar a nuestros clientes una experiencia excepcional en mantenimiento y reparación de vehículos.`,
		icon: 'message-circle-question',
	},
	{
		value: 'mision',
		title: 'Misión',
		content: `Nuestra misión es proporcionar soluciones automotrices integrales de la más alta calidad, garantizando la seguridad, eficiencia y durabilidad de los vehículos de nuestros clientes. Buscamos superar las expectativas a través de un servicio honesto, transparente y con personal altamente capacitado.`,
		icon: 'target',
	},
	{
		value: 'vision',
		title: 'Visión',
		content: `Ser reconocidos por nuestra excelencia en el servicio, la transparencia en nuestras operaciones y la confiabilidad en cada reparación, construyendo relaciones sólidas y duraderas con cada uno de nuestros clientes.`,
		icon: 'eye',
	},
	{
		value: 'historia',
		title: 'Historia',
		icon: 'library-big',

		content: [
			{
				date: 'Oct-1992',
				headline: 'Fundación',
				description: 'Se funda el taller automotriz Karmona con un enfoque en servicios generales de reparación y mantenimiento.',
				icon: 'karmona-square-simple-dark'
			},
			{
				date: 'Ene-1995',
				headline: 'Ampliación de servicios',
				description: 'El taller amplía sus servicios para incluir diagnósticos computarizados.',
				icon: 'car-front'
			},
			{
				date: 'Mar-1998',
				headline: 'Incorporación de servicio de hojalatería y pintura',
				description: 'Se inauguran las áreas de hojalatería y pintura.',
				icon: 'paint-roller'
			},
			{
				date: '2019-2023',
				headline: 'Implementación y Marketing',
				description: 'Se inicia una campaña de marketing para promocionar los nuevos servicios.',
				icon: 'newspaper'
			},
			{
				date: 'Jun-2023',
				headline: 'Celebración de 30 años de servicio',
				description: 'Se celebra 30 años de servicio en la industria automotriz.',
				icon: 'cake'
			},

			{
				date: 'Sep-2023',
				headline: 'Apertura de nueva sucursal',
				description: 'Nueva Casa de Karmona',
				icon: 'store'
			}
		]
	}
];

export type Service= {
	title: string
	description: string
	info: string
	icon: IconName
}

export const services: Service[] = [
	{
		title: 'Mantenimiento General',
		description: 'El mantenimiento general de un vehículo es esencial para prolongar su vida útil, prevenir averías inesperadas y garantizar un rendimiento óptimo. Este servicio integral abarca una variedad de aspectos clave para el buen funcionamiento del vehículo.',
		info: 'Este servicio incluye revisiones periódicas, cambios de aceite, filtros y chequeos generales para mantener tu auto en óptimas condiciones.',
		icon: 'wrench',
	},
	{
		title: 'Reparaciones Mecánicas',
		description: 'Las reparaciones mecánicas comprenden un conjunto diverso de servicios que se enfocan en solucionar problemas y mantener el funcionamiento óptimo de los componentes mecánicos de un vehículo.',
		info: 'Contamos con técnicos especializados en motores, transmisiones y suspensión para brindarte soluciones efectivas.',
		icon: 'bolt',
	},
	{
		title: 'Sistema Eléctrico',
		description: 'La reparación del sistema eléctrico de un vehículo implica diagnosticar, identificar y solucionar problemas relacionados con los componentes eléctricos.',
		info: 'Nos especializamos en detectar fallas eléctricas con herramientas de diagnóstico avanzadas y resolverlas con precisión.',
		icon: 'zap',
	},
	{
		title: 'Sistema de Climatización',
		description: 'La reparación del sistema de climatización en un vehículo implica diagnosticar y solucionar problemas que puedan afectar la capacidad del sistema para enfriar o calentar el habitáculo.',
		info: 'Reparamos compresores, sensores, filtros de cabina y recargamos el sistema para mantener una temperatura ideal.',
		icon: 'cloudy',
	},
	{
		title: 'Diagnóstico y Escaneo de la Computadora',
		description: 'El diagnóstico y escaneo de la computadora en un vehículo son procesos fundamentales para identificar y solucionar problemas relacionados con los sistemas electrónicos y computarizados del automóvil.',
		info: 'Utilizamos escáner OBD-II para detectar códigos de error, monitorear sensores y ayudarte a tomar decisiones informadas.',
		icon: 'laptop',
	},
	{
		title: 'Cambio de Partes y Accesorios',
		description: 'El cambio de partes y accesorios abarca una amplia variedad de tareas que van desde la sustitución de componentes desgastados hasta la instalación de accesorios adicionales.',
		info: 'Sustituimos faros, espejos, limpiaparabrisas, baterías, pastillas de freno y más con repuestos de alta calidad.',
		icon: 'car-front',
	},
	{
		title: 'Revisión de Alineación y Balanceo',
		description: 'La reparación y reemplazo de neumáticos en un taller automotriz son servicios esenciales para garantizar la seguridad, el rendimiento y la eficiencia del vehículo.',
		info: 'Realizamos alineación digital y balanceo para mejorar estabilidad, tracción y seguridad en el camino.',
		icon: 'drafting-compass',
	},
	{
		title: 'Inspección y emisión de Gases',
		description: 'La inspección y emisión de gases es un servicio clave que se realiza para evaluar y garantizar que los vehículos cumplan con los estándares ambientales y de emisiones.',
		info: 'Ofrecemos limpieza profunda, detallado de interiores, pulido de faros y encerado profesional.',
		icon: 'wind',
	},
	{
		title: 'Servicios especializados',
		description: 'Los servicios especializados abarcan una variedad de tareas más específicas y técnicas, dirigidas a aspectos particulares del vehículo.',
		info: 'Incluye revisión de frenos, llantas, niveles de fluidos, luces y sistema de carga para asegurar tu seguridad en el trayecto.',
		icon: 'users',
	},
]

export type CarLogo = {
	id: number
	file: string
}
export const carLogos: CarLogo[] = [
	{ id: 1, file: 'acura.svg' },
	{ id: 2, file: 'audi.svg' },
	{ id: 3, file: 'bentley.svg' },
	{ id: 4, file: 'bmw.svg' },
	{ id: 5, file: 'cadillac.svg' },
	{ id: 6, file: 'chevrolet.svg' },
	{ id: 7, file: 'chrysler.svg' },
	{ id: 8, file: 'fiat.svg' },
	{ id: 9, file: 'ford.svg' },
	{ id: 10, file: 'honda.svg' },
	{ id: 11, file: 'jeep.svg' },
	{ id: 12, file: 'kia.svg' },
	{ id: 13, file: 'landrover.svg' },
	{ id: 14, file: 'mazda.svg' },
	{ id: 15, file: 'mg.svg' },
	{ id: 16, file: 'mini.svg' },
	{ id: 17, file: 'nissan.svg' },
	{ id: 18, file: 'peugeot.svg' },
	{ id: 19, file: 'porsche.svg' },
	{ id: 20, file: 'ram.svg' },
	{ id: 21, file: 'renault.svg' },
	{ id: 22, file: 'seat.svg' },
	{ id: 23, file: 'subaru.svg' },
	{ id: 24, file: 'suzuki.svg' },
	{ id: 25, file: 'toyota.svg' },
	{ id: 26, file: 'volkswagen.svg' },
];

export type GridImage = {
	id: string
	src: string
	alt: string
	column: 1 | 2 | 3 | 4
	row: 1 | 2 | 3 | 4
}

export const gridImages: GridImage[] = [
	{ id: 'img-01', src: '/images/grid-cars/audi.jpeg', alt: 'Auto deportivo rojo', column: 1, row: 1 },
	{ id: 'img-02', src: '/images/grid-cars/bmw.jpeg', alt: 'Mecánico revisando motor', column: 2, row: 1 },
	{ id: 'img-03', src: '/images/grid-cars/bocho.jpeg', alt: 'Interior de taller', column: 3, row: 1 },
	{ id: 'img-04', src: '/images/grid-cars/dodge.jpeg', alt: 'Interior de taller', column: 4, row: 1 },
	{ id: 'img-05', src: '/images/grid-cars/explorer.jpeg', alt: 'Interior de taller', column: 1, row: 2 },
	{ id: 'img-06', src: '/images/grid-cars/ford.jpeg', alt: 'Interior de taller', column: 2, row: 2 },
	{ id: 'img-07', src: '/images/grid-cars/gmc.jpeg', alt: 'Interior de taller', column: 3, row: 2 },
	{ id: 'img-08', src: '/images/grid-cars/mazda.jpeg', alt: 'Interior de taller', column: 4, row: 2 },
	{ id: 'img-09', src: '/images/grid-cars/mercedez-glc.jpeg', alt: 'Interior de taller', column: 1, row: 3 },
	{ id: 'img-10', src: '/images/grid-cars/mercedez-volante.jpeg', alt: 'Interior de taller', column: 2, row: 3 },
	{ id: 'img-11', src: '/images/grid-cars/mercedez.jpeg', alt: 'Interior de taller', column: 3, row: 3 },
	{ id: 'img-12', src: '/images/grid-cars/mini.jpeg', alt: 'Interior de taller', column: 4, row: 3 },
	{ id: 'img-13', src: '/images/grid-cars/mustang.jpeg', alt: 'Interior de taller', column: 1, row: 4 },
	{ id: 'img-14', src: '/images/grid-cars/nissan.jpeg', alt: 'Interior de taller', column: 2, row: 4 },
	{ id: 'img-15', src: '/images/grid-cars/roadster.jpeg', alt: 'Interior de taller', column: 3, row: 4 },
	{ id: 'img-16', src: '/images/grid-cars/toyota.jpeg', alt: 'Interior de taller', column: 4, row: 4 }
]
export type MediaItem = {
	id: string;
	type: 'text' | 'image' | 'video';
	title?: string;
	content: string;
	alt?: string;
	project: 'mustang' | 'vw';
};

export const mediaItems: MediaItem[] = [
	{
		id: 'text-mustang-01',
		type: 'text',
		title: 'Ford Mustang 1965',
		content: 'El proyecto de restauración de un Ford Mustang 1965 implica la recuperación y mejora de un clásico automóvil Mustang para devolverlo a su estado original o personalizado, mejorando su estética, rendimiento y funcionalidad. Este tipo de proyectos a menudo requiere una combinación de habilidades mecánicas, técnicas y estéticas para lograr un resultado satisfactorio.',
		project: 'mustang'
	},
	{
		id: 'video-mustang-01',
		type: 'video',
		content: '/image-video-projects-karmona/ford-mustang5-WRZIEZKP.mp4',
		alt: 'Mustang restaurado frontal',
		project: 'mustang'
	},
	{
		id: 'video-mustang-02',
		type: 'video',
		content: '/images/karmona-projects-content/ford-mustang4-UOE22YOF.mp4',
		alt: 'Motor Mustang detallado',
		project: 'mustang'
	},
	{
		id: 'image-mustang-03',
		type: 'image',
		content: '/images/karmona-projects-content/karmona-mustang-IC4RMYXQ.webp',
		project: 'mustang'
	},
	{
		id: 'video-mustang-04',
		type: 'video',
		content: '/images/karmona-projects-content/ford-mustang-AQKUH433.mp4',
		alt: 'Motor Mustang detallado',
		project: 'mustang'
	},
	{
		id: 'video-mustang-05',
		type: 'video',
		content: '/images/karmona-projects-content/ford-mustang6-3ZXOAML7.mp4',
		alt: 'Motor Mustang detallado',
		project: 'mustang'
	},
	{
		id: 'video-mustang-06',
		type: 'video',
		content: '/images/karmona-projects-content/ford-mustang2-4DNM75MB.mp4',
		alt: 'Motor Mustang detallado',
		project: 'mustang'
	},
	{
		id: 'text-vw-01',
		type: 'text',
		title: 'Volkswagen Clásico',
		content: 'La transformación de este clásico Volkswagen se centró en fusionar la nostalgia de su diseño original con un enfoque ecológico y de alto rendimiento. Se realizó una restauración estructural completa, se actualizaron los componentes mecánicos y se implementaron mejoras estéticas con detalles cromados y acabados premium.',
		project: 'vw'
	},

	{
		id: 'video-vw-01',
		type: 'video',
		content: '/images/karmona-projects-content/volkswagen-QHBH3UND.mp4',
		alt: 'Proceso de restauración VW',
		project: 'vw'
	}
];

export const tabs = [
	{ value: 'mustang', label: 'Mustang' },
	{ value: 'vw', label: 'VW' },
];
export type Faq = {
	question: string;
	answer: string;
};
export const faqs: Faq[] = [
	{
		question: "¿Es necesario realizar el mantenimiento preventivo cada ciertos kilómetros?",
		answer:
			"Sí, el mantenimiento preventivo es crucial para mantener el rendimiento y prevenir problemas costosos a largo plazo."
	},
	{
		question: "¿Qué debo hacer si mi vehículo emite ruidos extraños?",
		answer:
			"Los ruidos extraños pueden indicar varios problemas. Es recomendable una inspección para identificar y abordar el problema."
	},
	{
		question: "¿Cómo puedo saber si mis frenos necesitan ser reemplazados?",
		answer:
			"Los signos incluyen chirridos, vibraciones o un pedal de freno esponjoso. Realizar una inspección regular es crucial."
	},
	{
		question: "¿Por qué mi vehículo podría estar experimentando problemas de sobrecalentamiento?",
		answer:
			"Problemas con el sistema de refrigeración, termostato o líquido refrigerante pueden causar sobrecalentamiento. Se recomienda una revisión."
	},
	{
		question: "¿Qué puedo hacer para mejorar la eficiencia de combustible de mi automóvil?",
		answer:
			"Mantén neumáticos inflados, realiza un mantenimiento regular, conduce de manera eficiente y utiliza combustibles de calidad."
	},
	{
		question: "¿Cuáles son sus Métodos de Pago Aceptados?",
		answer:
			"Aceptamos una variedad de métodos de pago, que pueden incluir efectivo, tarjetas de débito y crédito."
	},
	{
		question: "¿Cómo sé si mi batería está fallando?",
		answer:
			"Arranque lento, luces tenues, y la luz de la batería encendida son indicadores. Prueba la batería si experimentas estos problemas."
	},
	{
		question: "¿Cada cuántos kilómetros debo realizar el cambio de aceite en mi vehículo?",
		answer:
			"Se recomienda cambiar el aceite cada 8,000 a 12,000 kilómetros o según las indicaciones del fabricante."
	},
];
export type Contact = {
  label: string
  value: string | string[]
  icon: IconName
  type: "tel" | "email" | "map" | null
  buttonText?: string
  href?: string
}

export const contacts: Contact[] = [
  {
    label: "Teléfono",
    value: "(222) 5 39 03 69",
    icon: "phone",
    type: "tel",
  },
  {
    label: "Correo",
    value: "oficina@karmona.mx",
    icon: "mail",
    type: "email",
  },
  {
    label: "Horario de Atención",
    value: ["Lun–Vie: 9:00 AM – 6:00 PM", "Sábado: 9:00 AM – 2:00 PM"],
    icon: "history",
    type: null,
  },
 {
  label: "Ubicación",
  value: [
    "Av 2 Pte 3106, Amor",
    "72140 Heroica Puebla de Zaragoza, Pue.",
  ],
  icon: "map-pin",
  type: null,
  buttonText: "¿Cómo llegar?",
  href: "https://www.google.com/maps/place/Karmona/@19.0577392,-98.2230611,17z/data=!3m1!4b1!4m6!3m5!1s0x85cfc72c254b6ee9:0xefd5da50a79db37d!8m2!3d19.0577341!4d-98.2204862!16s%2Fg%2F1tcwlxb2?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
},
]
export type TermsOfService = {
  id: string
  items: {
    title: string
    text: string
  }[]
}

export const tosRules: TermsOfService[] = [
  {
    id: 'tos',
    items: [
      {
        title: 'Aceptación de los Términos',
        text:
          'Al acceder y utilizar los servicios de Karmona, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor, no utilices nuestros servicios.',
      },
      {
        title: 'Uso de los Servicios',
        text:
          'Aceptas utilizar los servicios de Karmona únicamente con fines legales y de acuerdo con estos términos. No debes dañar, sobrecargar o perjudicar la disponibilidad o el rendimiento de nuestros servicios.',
      },
      {
        title: 'Información del Usuario',
        text:
          'Al proporcionar información a Karmona, garantizas que es precisa, completa y actualizada. Podemos suspender cuentas o rechazar el acceso si se detectan datos falsos.',
      },
      {
        title: 'Citas y Reservas',
        text:
          'El proceso de programación de citas y reservas está sujeto a disponibilidad. Karmona se reserva el derecho de cancelar o reprogramar citas si es necesario.',
      },
      {
        title: 'Pago y Facturación',
        text:
          'Los servicios pagos están sujetos a las tarifas vigentes y pueden ser modificadas previo aviso.',
      },
      {
        title: 'Cancelaciones y Reembolsos',
        text:
          'Las cancelaciones y los reembolsos seguirán los términos definidos al momento de reservar. Karmona puede modificar o cancelar citas según su criterio.',
      },
      {
        title: 'Limitación de Responsabilidad',
        text:
          'Karmona no será responsable por ningún daño directo, indirecto o consecuente que surja del uso de nuestros servicios.',
      },
      {
        title: 'Modificaciones',
        text:
          'Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado implica tu aceptación de los cambios.',
      },
      {
        title: 'Ley Aplicable',
        text:
          'Estos términos se rigen por las leyes del Estado de Puebla, México. Aceptas la jurisdicción exclusiva de sus tribunales.',
      },
      {
        title: 'Contacto',
        text:
          'Si tienes alguna pregunta sobre estos términos y condiciones, puedes contactarnos a través de nuestro correo electrónico: oficina@karmona.mx',
      },
    ],
  },
]

export type TermsContent = {
  title: string;
  body: string;
}	

export const termsContent:TermsContent[] = [
  {
    title: 'Privacidad del Usuario',
    body:
      'Karmona respeta la privacidad de sus clientes y visitantes en línea. Esta política describe cómo recopilamos, utilizamos y protegemos tu información personal. Al usar nuestro sitio, aceptas estas prácticas.',
  },
  {
    title: 'Aceptación de los Términos',
    body:
      'Al usar los servicios de Karmona, aceptas cumplir con estos términos. Si no estás de acuerdo con alguna parte, por favor no utilices nuestros servicios.',
  },
  {
    title: 'Uso de los Servicios',
    body:
      'Te comprometes a usar nuestros servicios solo con fines legales. No debes causar daño intencional ni afectar el rendimiento del sitio o nuestros sistemas.',
  },
  {
    title: 'Información del Usuario',
    body:
      'Toda la información que proporciones debe ser precisa y actualizada. Nos reservamos el derecho de restringir el acceso si se detectan datos falsos.',
  },
  {
    title: 'Citas y Reservas',
    body:
      'Las citas están sujetas a disponibilidad y condiciones específicas. Karmona puede reprogramar o cancelar si es necesario.',
  },
  {
    title: 'Pago y Facturación',
    body:
      'Servicios de pago están sujetos a las tarifas establecidas. Karmona puede modificarlas previo aviso.',
  },
  {
    title: 'Cancelaciones y Reembolsos',
    body:
      'Sujetos a los términos del proceso de reserva. Karmona podrá reagendar o cancelar servicios si lo considera necesario.',
  },
  {
    title: 'Limitación de Responsabilidad',
    body:
      'Karmona no será responsable por daños directos o indirectos derivados del uso de nuestros servicios.',
  },
  {
    title: 'Modificaciones',
    body:
      'Podemos actualizar estos términos en cualquier momento. El uso continuado de nuestros servicios implica tu aceptación de los nuevos términos.',
  },
  {
    title: 'Ley Aplicable',
    body:
      'Estos términos se rigen por las leyes del Estado de Puebla, México, y cualquier disputa será resuelta bajo su jurisdicción.',
  },
  {
    title: 'Contacto',
    body:
      'Para consultas sobre estos términos, escríbenos a: oficina@karmona.mx',
  },
]

export type PromoSteps = {
  id: 'promogeneral' | 'promomama'
  title: string
  items: string[]
  note: string
}

export const promoRules: PromoSteps[] = [
  {
    id: 'promogeneral',
    title: 'General Promotion Rules 2024',
    items: [
      'Request the promotion at the beginning.',
      'Bring your coupon.',
      'Follow us on social media.',
      'Schedule your appointment before June 10th.',
      'Not combinable with other promotions.',
      'Attend the scheduled appointment.',
      'Leave your car in our hands.',
      'Enjoy your day, we’ll call you when it’s ready (same-day delivery by 6pm).',
      'Give us 5 stars on Google Maps.',
      'Enjoy your discount and pay (we accept all cards, cash, or transfers).',
    ],
    note: '3-month maintenance warranty.',
  },
  {
    id: 'promomama',
    title: 'Team Mamá Promotion Rules 2024',
    items: [
      'Request the promotion at the beginning.',
      'Bring your coupon.',
      'Follow us on social media.',
      'Book a team of at least 3 women before June 10th.',
      'Not combinable with other promotions.',
      'Attend the scheduled appointment.',
      'Leave your car in our hands.',
      'Enjoy your day, we’ll call you when it’s ready (same-day delivery by 6pm).',
      'Give us 5 stars on Google Maps.',
      'Enjoy your discount and pay (we accept all cards, cash, or transfers).',
    ],
    note: '3-month maintenance warranty.',
  },
]
export type PrivacyPolicies = {
  title: string
  content: string
}

export const privacyPolicies: PrivacyPolicies[] = [
  {
    title: 'Información Recopilada',
    content: 'Recopilamos información personal, como nombres, direcciones de correo electrónico, números de teléfono y detalles del vehículo.',
  },
  {
    title: 'Uso de la Información',
    content: 'Utilizamos la información para programar citas, enviar actualizaciones sobre el estado del vehículo, proporcionar servicios y mejorar la experiencia del usuario.',
  },
  {
    title: 'Consentimiento',
    content: 'Obtenemos el consentimiento de los usuarios antes de recopilar su información y ofrecemos opciones para retirar el consentimiento.',
  },
  {
    title: 'Retención de Datos',
    content: 'Retenemos la información personal durante el tiempo que sea necesario para proporcionar servicios y mejorar la experiencia del usuario.',
  },
  {
    title: 'Seguridad',
    content: 'Implementamos medidas de seguridad para proteger la información personal de los usuarios.',
  },
  {
    title: 'Divulgación',
    content: 'No vendemos ni alquilamos la información personal de los usuarios a terceros.',
  },
  {
    title: 'Enlaces',
    content: 'Nuestro sitio web contiene enlaces a otros sitios web. No somos responsables de las prácticas de privacidad de otros sitios web.',
  },
  {
    title: 'Cambios',
    content: 'Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva política de privacidad en esta página.',
  },
  {
    title: 'Contacto',
    content: 'Si tienes alguna pregunta sobre esta política de privacidad, puedes contactarnos a través de nuestro formulario de contacto.',
  },
  {
    title: 'Última Actualización',
    content: 'Esta política de privacidad se actualizó por última vez el 10 de enero de 2024.',
  },
]

// types.ts or directly in your component file

export type SocialPlatform = {
  name: string;
  icon: IconName;
  color: string;
  url: string;
  username: string;
  description: string;
  stats: string;
  extra?: string;
};
// data.ts

export const socialPlatforms: SocialPlatform[] = [
  {
    name: "Facebook",
    icon: "facebook",
    color: "#1877f2",
    url: "https://www.facebook.com/karmonamx",
    username: "Karmona",
    description: "Club Automotriz, cambiando el concepto común de taller automotriz, todo lo que tu auto necesita.",
    stats: "1.8K Me gusta • 1.9K Seguidores",
    extra: "facebook.com/karmonamx",
  },
  {
    name: "Instagram",
    icon: "instagram",
    color: "#e1306c",
    url: "https://www.instagram.com/karmona.mx/",
    username: "@karmona.mx",
    description: "Centro Integral de Servicios automotrices. 📍Puebla, Puebla. Mx. Especialistas en: Motores | Suspensión | Restauración | Hojalateria y pintura.",
    stats: "399 Seguidores • 230 seguidos",
    extra: "instagram.com/karmona.mx",
  },
  {
    name: "TikTok",
    icon: "music-2",
    color: "#00f3eb",
    url: "https://www.tiktok.com/@karmona.mx",
    username: "@karmona.mx",
    description: "Especialistas en servicio automotriz Restauraciones y Mecánica Especializada🚗🔧",
    stats: "+3.5K Seguidores • 15.3k Me gusta",
    extra: "tiktok.com/@karmona.mx",
  },
];

