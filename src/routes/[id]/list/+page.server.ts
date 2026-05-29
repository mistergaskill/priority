import type { PageServerLoad } from './$types';
import { getDb } from '$lib/server/db';
import { lists, tasks as tasksTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { hydrateTask, type Task } from '$lib/types';

export const load: PageServerLoad = async ({ params, platform }) => {
	const db = getDb(platform!.env.DB);

	try {
		await db
			.insert(lists)
			.values({ id: params.id, createdAt: new Date().toISOString() })
			.onConflictDoNothing();

		const rows = await db
			.select()
			.from(tasksTable)
			.where(eq(tasksTable.listId, params.id));

		return { listId: params.id, tasks: rows.map(hydrateTask) };
	} catch {
		return { listId: params.id, tasks: [] as Task[] };
	}
};
