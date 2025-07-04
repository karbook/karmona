import { t } from '@/localization/utils';
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
    title: t("Mother's Day 💐"),
    description: t(
      "Celebrate Mother’s Month — if you’re a teacher, lawyer, doctor, mom, etc., enjoy up to 20% off with us 🥰. At Karmona, we recognize the invaluable work of the extraordinary women in our lives with exclusive discounts like this: 👉 Gather your team of moms with 3 or more vehicles for maintenance and/or brake service and get 20% off on labor. 🚨 This Mother's Month, gift them safety and confidence — come celebrate these special women at Karmona!"
    ),
    validity: t("🗓️ Valid from May 10 to June 10"),
    location: "📍 Av 2Pte 3106, Col. Amor, Puebla, Pue.",
    image: "/images/promotions/mother-day-promotion.webp",
  },
  {
    title: t("🎉 30 Years Together"),
    description: t(
      "We're celebrating at Karmona thanks to you and your trust over more than 30 years! 🙌 🎉 That’s why we want to thank you with an incredible discount. Let’s celebrate 30 years of service and reliability with 15% off engine maintenance or brake service 🤯. Pamper your car with us — get your service and enjoy 15% off 🥳🍾 📍 Avenida 2 Poniente 3106, Col. Amor, 72140, Puebla, Pue."
    ),
    validity: t("🗓️ Valid throughout the month of May"),
    details: [t("Engine or brake service with 15% discount")],
    location: "📍 Av. 2 Poniente 3106, Col. Amor, Puebla, Pue.",
    image: "/images/promotions/promotion-engine-service.webp",
  },
  {
    title: t("🛢️ Premium Motul Oil"),
    description: t(
      "We’re celebrating at Karmona and taking care of your car’s soul — especially this special month for moms! Celebrate 30 years of security and reliability for your car with 10% off Premium Motul synthetic oil 🤯 🙌🎉. Give the gift of protection to those who love you most this May 10 🙌 🎉 Karmona, your trusted ally. 📍 Av 2Pte 3106, Col. Amor 72140, Puebla, Pue."
    ),
    validity: t("🗓️ Valid through May while supplies last"),
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
    title: t('Who We Are'),
    content: t(
      'At Karmona, we take pride in being a company dedicated and passionate about excellence in automotive service. With a solid track record in the industry, we are committed to providing our customers with an exceptional experience in vehicle maintenance and repair.'
    ),
    icon: 'message-circle-question',
  },
  {
    value: 'mision',
    title: t('Mission'),
    content: t(
      'Our mission is to provide comprehensive automotive solutions of the highest quality, ensuring the safety, efficiency, and durability of our clients’ vehicles. We aim to exceed expectations through honest and transparent service, delivered by highly trained staff.'
    ),
    icon: 'target',
  },
  {
    value: 'vision',
    title: t('Vision'),
    content: t(
      'To be recognized for our service excellence, operational transparency, and reliability in every repair, building strong and lasting relationships with each of our clients.'
    ),
    icon: 'eye',
  },
  {
    value: 'historia',
    title: t('History'),
    icon: 'library-big',
    content: [
      {
        date: 'Oct-1992',
        headline: t('Foundation'),
        description: t('Karmona automotive workshop is founded, focused on general repair and maintenance services.'),
        icon: 'karmona-square-simple-dark',
      },
      {
        date: 'Ene-1995',
        headline: t('Service Expansion'),
        description: t('The workshop expands its offerings to include computerized diagnostics.'),
        icon: 'car-front',
      },
      {
        date: 'Mar-1998',
        headline: t('Body and Paint Services Added'),
        description: t('The bodywork and paint areas are inaugurated.'),
        icon: 'paint-roller',
      },
      {
        date: '2019-2023',
        headline: t('Marketing and Implementation'),
        description: t('A marketing campaign is launched to promote new services.'),
        icon: 'newspaper',
      },
      {
        date: 'Jun-2023',
        headline: t('30-Year Anniversary'),
        description: t('We celebrate 30 years of service in the automotive industry.'),
        icon: 'cake',
      },
      {
        date: 'Sep-2023',
        headline: t('New Branch Opening'),
        description: t('New Karmona headquarters.'),
        icon: 'store',
      },
    ],
  },
]

export type Service= {
	title: string
	description: string
	info: string
	icon: IconName
}
export const services: Service[] = [
  {
    title: t('General Maintenance'),
    description: t(
      'General vehicle maintenance is essential to extend its lifespan, prevent unexpected breakdowns, and ensure optimal performance. This comprehensive service covers key aspects to keep your vehicle running smoothly.'
    ),
    info: t(
      'This service includes routine inspections, oil changes, filters, and general checkups to keep your car in excellent condition.'
    ),
    icon: 'wrench',
  },
  {
    title: t('Mechanical Repairs'),
    description: t(
      'Mechanical repairs cover a wide range of services focused on solving issues and maintaining the optimal function of a vehicle’s mechanical components.'
    ),
    info: t(
      'We have specialized technicians in engines, transmissions, and suspensions to offer effective solutions.'
    ),
    icon: 'bolt',
  },
  {
    title: t('Electrical System'),
    description: t(
      'Repairing a vehicle’s electrical system involves diagnosing, identifying, and resolving problems related to its electrical components.'
    ),
    info: t(
      'We specialize in detecting electrical faults using advanced diagnostic tools and resolving them with precision.'
    ),
    icon: 'zap',
  },
  {
    title: t('Air Conditioning System'),
    description: t(
      'Repairing the climate control system in a vehicle involves diagnosing and resolving issues that affect the system’s ability to heat or cool the cabin.'
    ),
    info: t(
      'We repair compressors, sensors, cabin filters, and recharge systems to maintain ideal temperatures.'
    ),
    icon: 'cloudy',
  },
  {
    title: t('Computer Diagnostics & Scanning'),
    description: t(
      'Vehicle computer diagnostics and scanning are essential processes to identify and address problems in the car’s electronic and computerized systems.'
    ),
    info: t(
      'We use OBD-II scanners to detect error codes, monitor sensors, and help you make informed decisions.'
    ),
    icon: 'laptop',
  },
  {
    title: t('Parts & Accessories Replacement'),
    description: t(
      'Replacing parts and accessories includes a wide range of tasks from swapping worn components to installing add-ons.'
    ),
    info: t(
      'We replace headlights, mirrors, wipers, batteries, brake pads, and more with high-quality parts.'
    ),
    icon: 'car-front',
  },
  {
    title: t('Alignment & Balancing Check'),
    description: t(
      'Tire repair and replacement are essential services in an auto workshop to ensure safety, performance, and vehicle efficiency.'
    ),
    info: t(
      'We perform digital alignment and balancing to improve stability, traction, and safety on the road.'
    ),
    icon: 'drafting-compass',
  },
  {
    title: t('Gas Emissions & Inspection'),
    description: t(
      'Emission inspection is a key service to ensure that vehicles meet environmental and regulatory emission standards.'
    ),
    info: t(
      'We offer deep cleaning, interior detailing, headlight polishing, and professional waxing.'
    ),
    icon: 'wind',
  },
  {
    title: t('Specialized Services'),
    description: t(
      'Specialized services include more specific and technical tasks targeting particular vehicle systems.'
    ),
    info: t(
      'Includes brake, tire, fluid level, lighting, and charging system checks to ensure road safety.'
    ),
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
	{ id: 'img-01', src: '/images/grid-cars/audi.jpeg', alt: 'Audi', column: 1, row: 1 },
	{ id: 'img-02', src: '/images/grid-cars/bmw.jpeg', alt: 'BMW', column: 2, row: 1 },
	{ id: 'img-03', src: '/images/grid-cars/bocho.jpeg', alt: 'Bocho', column: 3, row: 1 },
	{ id: 'img-04', src: '/images/grid-cars/dodge.jpeg', alt: 'Dodge', column: 4, row: 1 },
	{ id: 'img-05', src: '/images/grid-cars/explorer.jpeg', alt: 'Explorer', column: 1, row: 2 },
	{ id: 'img-06', src: '/images/grid-cars/ford.jpeg', alt: 'Ford', column: 2, row: 2 },
	{ id: 'img-07', src: '/images/grid-cars/gmc.jpeg', alt: 'GMC', column: 3, row: 2 },
	{ id: 'img-08', src: '/images/grid-cars/mazda.jpeg', alt: 'Mazda', column: 4, row: 2 },
	{ id: 'img-09', src: '/images/grid-cars/mercedez-glc.jpeg', alt: 'Mercedes GLC', column: 1, row: 3 },
	{ id: 'img-10', src: '/images/grid-cars/mercedez-volante.jpeg', alt: 'Mercedes Volante', column: 2, row: 3 },
	{ id: 'img-11', src: '/images/grid-cars/mercedez.jpeg', alt: 'Mercedes', column: 3, row: 3 },
	{ id: 'img-12', src: '/images/grid-cars/mini.jpeg', alt: 'Mini', column: 4, row: 3 },
	{ id: 'img-13', src: '/images/grid-cars/mustang.jpeg', alt: 'Mustang', column: 1, row: 4 },
	{ id: 'img-14', src: '/images/grid-cars/nissan.jpeg', alt: 'Nissan', column: 2, row: 4 },
	{ id: 'img-15', src: '/images/grid-cars/roadster.jpeg', alt: 'Roadster', column: 3, row: 4 },
	{ id: 'img-16', src: '/images/grid-cars/toyota.jpeg', alt: 'Toyota', column: 4, row: 4 }
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
    title: t('Ford Mustang 1965'),
    content: t(
      'The 1965 Ford Mustang restoration project involves reviving and upgrading a classic Mustang to restore it to its original or custom state, improving its aesthetics, performance, and functionality. These kinds of projects often require a combination of mechanical, technical, and design skills to achieve a satisfying result.'
    ),
    project: 'mustang',
  },
  {
    id: 'video-mustang-01',
    type: 'video',
    content: '/images/karmona-projects-content/ford-mustang5-WRZIEZKP.mp4',
    alt: 'Mustang front restored',
    project: 'mustang',
  },
  {
    id: 'video-mustang-02',
    type: 'video',
    content: '/images/karmona-projects-content/ford-mustang4-UOE22YOF.mp4',
    alt: 'Detailed Mustang engine',
    project: 'mustang',
  },
  {
    id: 'image-mustang-03',
    type: 'image',
    content: '/images/karmona-projects-content/karmona-mustang-IC4RMYXQ.webp',
    project: 'mustang',
  },
  {
    id: 'video-mustang-04',
    type: 'video',
    content: '/images/karmona-projects-content/ford-mustang-AQKUH433.mp4',
    alt: 'Detailed Mustang engine',
    project: 'mustang',
  },
  {
    id: 'video-mustang-05',
    type: 'video',
    content: '/images/karmona-projects-content/ford-mustang6-3ZXOAML7.mp4',
    alt: 'Detailed Mustang engine',
    project: 'mustang',
  },
  {
    id: 'video-mustang-06',
    type: 'video',
    content: '/images/karmona-projects-content/ford-mustang2-4DNM75MB.mp4',
    alt: 'Detailed Mustang engine',
    project: 'mustang',
  },
  {
    id: 'text-vw-01',
    type: 'text',
    title: t('Classic Volkswagen'),
    content: t(
      'The transformation of this classic Volkswagen focused on merging the nostalgia of its original design with an eco-friendly and high-performance approach. A full structural restoration was carried out, mechanical components were upgraded, and aesthetic improvements were added with chrome accents and premium finishes.'
    ),
    project: 'vw',
  },
  {
    id: 'video-vw-01',
    type: 'video',
    content: '/images/karmona-projects-content/volkswagen-QHBH3UND.mp4',
    alt: 'VW restoration process',
    project: 'vw',
  },
]

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
    question: t('Is preventive maintenance necessary every certain number of kilometers?'),
    answer: t(
      'Yes, preventive maintenance is essential to maintain performance and avoid costly issues in the long term.'
    ),
  },
  {
    question: t('What should I do if my vehicle makes strange noises?'),
    answer: t(
      'Strange noises can indicate various issues. It’s best to schedule an inspection to identify and resolve the problem.'
    ),
  },
  {
    question: t('How can I tell if my brakes need replacing?'),
    answer: t(
      'Signs include squealing, vibrations, or a spongy brake pedal. Regular inspections are key.'
    ),
  },
  {
    question: t('Why might my vehicle be overheating?'),
    answer: t(
      'Issues with the cooling system, thermostat, or coolant can cause overheating. A system check is recommended.'
    ),
  },
  {
    question: t('What can I do to improve my car’s fuel efficiency?'),
    answer: t(
      'Keep tires properly inflated, schedule regular maintenance, drive efficiently, and use quality fuel.'
    ),
  },
  {
    question: t('What are your accepted payment methods?'),
    answer: t(
      'We accept a variety of payment methods, including cash, debit cards, and credit cards.'
    ),
  },
  {
    question: t('How do I know if my battery is failing?'),
    answer: t(
      'Slow engine start, dim lights, and a lit battery warning light are indicators. Test the battery if you notice these signs.'
    ),
  },
  {
    question: t('How often should I change the oil in my vehicle?'),
    answer: t(
      'It’s recommended to change the oil every 8,000 to 12,000 kilometers or as per the manufacturer’s guidelines.'
    ),
  },
]
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
    label: t('Phone'),
    value: '(222) 5 39 03 69',
    icon: 'phone',
    type: 'tel',
  },
  {
    label: t('Email'),
    value: 'oficina@karmona.mx',
    icon: 'mail',
    type: 'email',
  },
  {
    label: t('Business Hours'),
    value: [
      t('Mon–Fri: 9:00 AM – 6:00 PM'),
      t('Saturday: 9:00 AM – 2:00 PM'),
    ],
    icon: 'history',
    type: null,
  },
  {
    label: t('Location'),
    value: [
      t('Av 2 Pte 3106, Amor'),
      t('72140 Heroica Puebla de Zaragoza, Pue.'),
    ],
    icon: 'map-pin',
    type: null,
    buttonText: t('Get Directions'),
    href: 'https://www.google.com/maps/place/Karmona/@19.0577392,-98.2230611,17z/data=!3m1!4b1!4m6!3m5!1s0x85cfc72c254b6ee9:0xefd5da50a79db37d!8m2!3d19.0577341!4d-98.2204862!16s%2Fg%2F1tcwlxb2?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D',
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
        title: t('Acceptance of Terms'),
        text: t(
          'By accessing and using Karmona’s services, you agree to comply with these terms and conditions. If you do not agree to any part of these terms, please do not use our services.'
        ),
      },
      {
        title: t('Use of Services'),
        text: t(
          'You agree to use Karmona’s services solely for lawful purposes and in accordance with these terms. You must not damage, overload, or impair the availability or performance of our services.'
        ),
      },
      {
        title: t('User Information'),
        text: t(
          'By providing information to Karmona, you guarantee it is accurate, complete, and up-to-date. We may suspend accounts or deny access if false data is detected.'
        ),
      },
      {
        title: t('Appointments and Bookings'),
        text: t(
          'The appointment and booking process is subject to availability. Karmona reserves the right to cancel or reschedule appointments if necessary.'
        ),
      },
      {
        title: t('Payment and Billing'),
        text: t(
          'Paid services are subject to current rates and may be modified with prior notice.'
        ),
      },
      {
        title: t('Cancellations and Refunds'),
        text: t(
          'Cancellations and refunds will follow the terms defined at the time of booking. Karmona may modify or cancel appointments at its discretion.'
        ),
      },
      {
        title: t('Limitation of Liability'),
        text: t(
          'Karmona shall not be held liable for any direct, indirect, or consequential damages arising from the use of our services.'
        ),
      },
      {
        title: t('Modifications'),
        text: t(
          'We reserve the right to modify these terms at any time. Continued use implies your acceptance of any changes.'
        ),
      },
      {
        title: t('Governing Law'),
        text: t(
          'These terms are governed by the laws of the State of Puebla, Mexico. You agree to the exclusive jurisdiction of its courts.'
        ),
      },
      {
        title: t('Contact'),
        text: t(
          'If you have any questions about these terms and conditions, you can contact us via email at oficina@karmona.mx.'
        ),
      },
    ],
  },
]
export type TermsContent = {
  title: string;
  body: string;
}	
export const termsContent: TermsContent[] = [
  {
    title: t('User Privacy'),
    body: t(
      'Karmona respects the privacy of its customers and online visitors. This policy explains how we collect, use, and protect your personal information. By using our site, you agree to these practices.'
    ),
  },
  {
    title: t('Acceptance of Terms'),
    body: t(
      'By using Karmona’s services, you agree to comply with these terms. If you do not agree with any part, please do not use our services.'
    ),
  },
  {
    title: t('Use of Services'),
    body: t(
      'You agree to use our services only for lawful purposes. You must not cause intentional harm or negatively affect the site’s performance or our systems.'
    ),
  },
  {
    title: t('User Information'),
    body: t(
      'All information you provide must be accurate and up to date. We reserve the right to restrict access if false data is detected.'
    ),
  },
  {
    title: t('Appointments and Bookings'),
    body: t(
      'Appointments are subject to availability and specific conditions. Karmona may reschedule or cancel if necessary.'
    ),
  },
  {
    title: t('Payment and Billing'),
    body: t(
      'Paid services are subject to established rates. Karmona may modify them with prior notice.'
    ),
  },
  {
    title: t('Cancellations and Refunds'),
    body: t(
      'These are subject to the terms of the booking process. Karmona may reschedule or cancel services as it deems necessary.'
    ),
  },
  {
    title: t('Limitation of Liability'),
    body: t(
      'Karmona shall not be liable for any direct or indirect damages resulting from the use of our services.'
    ),
  },
  {
    title: t('Modifications'),
    body: t(
      'We may update these terms at any time. Continued use of our services implies your acceptance of the updated terms.'
    ),
  },
  {
    title: t('Governing Law'),
    body: t(
      'These terms are governed by the laws of the State of Puebla, Mexico, and any dispute will be resolved under its jurisdiction.'
    ),
  },
  {
    title: t('Contact'),
    body: t(
      'If you have questions regarding these terms, please write to us at: oficina@karmona.mx'
    ),
  },
]

export type PromoSteps = {
  id: 'promotiongeneral' | 'promotionmom'
  title: string
  items: string[]
  note: string
}
export const promoRules: PromoSteps[] = [
  {
    id: 'promotiongeneral',
    title: t('General Promotion Rules 2024'),
    items: [
      t('Request the promotion at the beginning.'),
      t('Bring your coupon.'),
      t('Follow us on social media.'),
      t('Schedule your appointment before June 10th.'),
      t('Not combinable with other promotions.'),
      t('Attend the scheduled appointment.'),
      t('Leave your car in our hands.'),
      t("Enjoy your day, we’ll call you when it’s ready (same-day delivery by 6pm)."),
      t('Give us 5 stars on Google Maps.'),
      t('Enjoy your discount and pay (we accept all cards, cash, or transfers).'),
    ],
    note: t('3-month maintenance warranty.'),
  },
  {
    id: 'promotionmom',
    title: t('Team Mamá Promotion Rules 2024'),
    items: [
      t('Request the promotion at the beginning.'),
      t('Bring your coupon.'),
      t('Follow us on social media.'),
      t('Book a team of at least 3 women before June 10th.'),
      t('Not combinable with other promotions.'),
      t('Attend the scheduled appointment.'),
      t('Leave your car in our hands.'),
      t("Enjoy your day, we’ll call you when it’s ready (same-day delivery by 6pm)."),
      t('Give us 5 stars on Google Maps.'),
      t('Enjoy your discount and pay (we accept all cards, cash, or transfers).'),
    ],
    note: t('3-month maintenance warranty.'),
  },
]
export type PrivacyPolicies = {
  title: string
  content: string
}

export const privacyPolicies: PrivacyPolicies[] = [
  {
    title: t('Collected Information'),
    content: t(
      'We collect personal information such as names, email addresses, phone numbers, and vehicle details.'
    ),
  },
  {
    title: t('Use of Information'),
    content: t(
      'We use the information to schedule appointments, send updates about vehicle status, provide services, and improve user experience.'
    ),
  },
  {
    title: t('Consent'),
    content: t(
      'We obtain user consent before collecting their information and offer options to withdraw consent.'
    ),
  },
  {
    title: t('Data Retention'),
    content: t(
      'We retain personal information for as long as necessary to provide services and enhance the user experience.'
    ),
  },
  {
    title: t('Security'),
    content: t(
      'We implement security measures to protect users’ personal information.'
    ),
  },
  {
    title: t('Disclosure'),
    content: t(
      'We do not sell or rent users’ personal information to third parties.'
    ),
  },
  {
    title: t('Links'),
    content: t(
      'Our website contains links to other websites. We are not responsible for the privacy practices of those websites.'
    ),
  },
  {
    title: t('Changes'),
    content: t(
      'We may update this privacy policy from time to time. We will notify you by posting the new policy on this page.'
    ),
  },
  {
    title: t('Contact'),
    content: t(
      'If you have any questions about this privacy policy, you can contact us through our contact form.'
    ),
  },
  {
    title: t('Last Updated'),
    content: t(
      'This privacy policy was last updated on January 10, 2024.'
    ),
  },
]
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
export const socialPlatforms: SocialPlatform[] = [
  {
    name: t('Facebook'),
    icon: 'facebook',
    color: '#1877f2',
    url: 'https://www.facebook.com/karmonamx',
    username: 'Karmona',
    description: t('Automotive Club redefining the traditional auto workshop — everything your car needs.'),
    stats: t('1.8K Likes • 1.9K Followers'),
    extra: 'facebook.com/karmonamx',
  },
  {
    name: t('Instagram'),
    icon: 'instagram',
    color: '#e1306c',
    url: 'https://www.instagram.com/karmona.mx/',
    username: '@karmona.mx',
    description: t('Comprehensive Automotive Service Center. 📍Puebla, Puebla, MX. Specialists in: Engines | Suspension | Restoration | Bodywork and Painting.'),
    stats: t('399 Followers • 230 Following'),
    extra: 'instagram.com/karmona.mx',
  },
  {
    name: t('TikTok'),
    icon: 'tiktok',
    color: '#00f3eb',
    url: 'https://www.tiktok.com/@karmona.mx',
    username: '@karmona.mx',
    description: t('Automotive service specialists — Restorations and Specialized Mechanics 🚗🔧'),
    stats: t('+3.5K Followers • 15.3K Likes'),
    extra: 'tiktok.com/@karmona.mx',
  },
]