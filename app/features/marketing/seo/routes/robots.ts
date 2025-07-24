// CORE
import type { Route } from '@/rr/features/marketing/seo/routes/+types/robots'

// UTILS
import { generateRobotsTxt } from '@forge42/seo-tools/robots'
import { createDomain } from '@/utils/misc'

export async function loader({ request, context }: Route.LoaderArgs) {
	const { isProductionDeployment } = context
	const domain = createDomain(request)
	const robotsTxt = generateRobotsTxt([
		{
			userAgent: '*',
			[isProductionDeployment ? 'allow' : 'disallow']: ['/'],
			sitemap: [`${domain}/sitemap.xml`],
		},
	])
	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
		},
	})
}
