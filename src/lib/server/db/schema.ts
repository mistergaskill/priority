import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const lists = sqliteTable('lists', {
	id: text('id').primaryKey(),
	createdAt: text('created_at').notNull()
});

export const tasks = sqliteTable('tasks', {
	id: text('id').primaryKey(),
	listId: text('list_id')
		.notNull()
		.references(() => lists.id),
	text: text('text').notNull(),
	createdAt: text('created_at').notNull()
});
