import { dev } from '$app/environment';
import type { Handle } from '@sveltejs/kit';

let proxy: Awaited<ReturnType<typeof import('wrangler').getPlatformProxy>> | null = null;

export const handle: Handle = async ({ event, resolve }) => {
	if (dev) {
		if (!proxy) {
			const { getPlatformProxy } = await import('wrangler');
			proxy = await getPlatformProxy();
		}
		// getPlatformProxy's ExecutionContext type doesn't perfectly match the Workers
		// runtime type (missing `exports`), so we cast through unknown.
		event.platform = proxy as unknown as App.Platform;
	}
	return resolve(event);
};
