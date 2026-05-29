import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getDb } from '$lib/server/db';
import { tasks as tasksTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { SerializedTask } from '$lib/types';

export const GET: RequestHandler = async ({ url, platform }) => {
	const listId = url.searchParams.get('listId');
	if (!listId) {
		error(400, 'listId is required');
	}

	const db = getDb(platform!.env.DB);

	try {
		const rows = await db
			.select()
			.from(tasksTable)
			.where(eq(tasksTable.listId, listId));

		return json(rows satisfies SerializedTask[]);
	} catch {
		return json([]);
	}
};

export const POST: RequestHandler = async ({ request, platform }) => {
	const task: SerializedTask = await request.json();
	const db = getDb(platform!.env.DB);

	await db.insert(tasksTable).values(task);

	return json({ success: true });
};
