// CORE
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/routes/+types/index'

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
	const title = t("Karmona")
	return { meta: { title } }
}

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

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [{ title: data?.meta.title }]
}
