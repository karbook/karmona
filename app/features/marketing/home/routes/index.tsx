// CORE
import type { LoaderFunctionArgs, MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/routes/+types/index'

// SEO
import { generateMeta } from "@forge42/seo-tools/remix/metadata";

// UTILS
import { remixI18Next } from '@/localization/i18n.server'

// COMPONENTS
import Club from '../components/club'
import Services from '../components/services'
import ShowcaseGrid from '../components/especialits'
import Projects from '../components/projects'
import FAQ  from '../components/frequently-asked-questions'
import AboutUs from '../components/about-us'
import Promotions from '../components/promotions'
import Cars from '../components/cars'


export async function loader({ request }: Route.LoaderArgs) {
	const t = await remixI18Next.getFixedT(request)
	const url = new URL(request.url)
	const title = t("Karmona")
	return { 
		meta: { 
			title, 
			url: url.toString(),
			origin: url.origin
		} 
	}
}


export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const title = data?.meta.title || "Karmona"
  const url = data?.meta.url || ""
  const origin = data?.meta.origin || ""

  const image = "https://karmona.mx/images/team-karmona/karmona-team-BAPWJSBV.webp";

  const meta = generateMeta({
    title: `${title} | Automotriz`,
    description: "Club Automotriz, cambiando el concepto común de taller automotriz, todo lo que tu auto necesita.",
    url: url,
    image: image,
  }, [
    {
		"script:ld+json": {
			"@context": "https://schema.org",
			"@type": "AutoRepair", // More specific than Organization
			"name": "Karmona",
			"description": "Premium automotive services in Puebla",
			"url": url,
			"logo": "https://karmona.mx/kbfavicon.ico",
			"telephone": "+52-222-539-0369", // Add your phone
			"address": {
			"@type": "PostalAddress",
			"addressLocality": "Puebla",
			"addressCountry": "Mexico"
			},
			"serviceArea": "Puebla",
			"priceRange": "$$",
			"sameAs": [
				"https://www.facebook.com/karmonamx",
				"https://www.instagram.com/karmona.mx/",
				"https://www.tiktok.com/@karmona.mx"
			],
		}
    }
  ])
  return meta
};


export default function Index() {
	return (
		<>
			<Club />
			<Promotions />
			<AboutUs />
			<Services />
			<Cars />
			<ShowcaseGrid />
			<Projects /> 
			<FAQ />
		</>
	)
}

