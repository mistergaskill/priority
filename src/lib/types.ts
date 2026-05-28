import { generateId } from '$lib/helpers/id';

export interface Task {
	id: string;
	text: string;
	createdAt: Date;
}

export function createTask(text: string): Task {
	return { id: generateId(), text, createdAt: new Date() };
}
