import { generateId } from '$lib/helpers/id';

export interface Task {
	id: string;
	listId: string;
	text: string;
	createdAt: Date;
}

export function createTask(text: string, listId: string): Task {
	return { id: generateId(), listId, text, createdAt: new Date() };
}

export interface SerializedTask extends Omit<Task, 'createdAt'> {
	createdAt: string;
}

export function serializeTask(task: Task): SerializedTask {
	return { ...task, createdAt: task.createdAt.toISOString() };
}

export function hydrateTask(task: SerializedTask): Task {
	return { ...task, createdAt: new Date(task.createdAt) };
}
