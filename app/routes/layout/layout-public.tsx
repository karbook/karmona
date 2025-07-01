// CORE
import { Outlet, type MetaFunction } from 'react-router'
import type { Route } from '@/rr/routes/layout/+types/layout-public'

// UTILS
import { remixI18Next } from '@/localization/i18n.server'

// COMPONENTS
import { Layout } from './components/public-layout'
import WhatsAppButton from '@/components/ui/whatsapp-button'
export async function loader({ request }: Route.LoaderArgs) {
	const t = await remixI18Next.getFixedT(request)
	const title = t('Karmona')
	return { meta: { title } }
}

export default function PublicLayout() {
	return (
		<>
		<Layout>
			<Outlet />
		</Layout>
		<WhatsAppButton />
		</>
	)
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [{ title: data?.meta.title }]
}
