import { describe, it, expect } from 'vitest';
import { generateId } from './id';

describe('generateId', () => {
	it('returns a non-empty string', () => {
		expect(generateId()).toBeTruthy();
	});

	it('generates unique values', () => {
		const ids = new Set(Array.from({ length: 100 }, generateId));
		expect(ids.size).toBe(100);
	});

	it('is URL-safe', () => {
		expect(generateId()).toMatch(/^[a-zA-Z0-9-]+$/);
	});
});
