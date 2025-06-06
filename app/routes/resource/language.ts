// CORE
import { cacheHeader } from 'pretty-cache-header'
import type { Route } from '@/rr/routes/resource/+types/language'

// UTILS
import { i18nCookie } from '@/localization/i18n.server'
import { resources } from '@/localization/resource'
import { z } from 'zod'

export async function loader({ request, context }: Route.LoaderArgs) {
	const { isProductionDeployment } = context
	const url = new URL(request.url)

	const lng = z
		.string()
		.refine((lng): lng is keyof typeof resources => Object.keys(resources).includes(lng))
		.parse(url.searchParams.get('lng'))

	const namespaces = resources[lng]

	const ns = z
		.string()
		.refine((ns): ns is keyof typeof namespaces => {
			return Object.keys(resources[lng]).includes(ns)
		})
		.parse(url.searchParams.get('ns'))

	const headers = new Headers()

	// On production, we want to add cache headers to the response
	if (isProductionDeployment) {
		headers.set(
			'Cache-Control',
			cacheHeader({
				maxAge: '5m',
				sMaxage: '1d',
				staleWhileRevalidate: '7d',
				staleIfError: '7d',
			})
		)
		headers.set('set-cookie', await i18nCookie.serialize(lng))
	}

	return Response.json(namespaces[ns], { headers })
}
