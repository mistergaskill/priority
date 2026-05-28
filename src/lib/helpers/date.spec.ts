import { describe, it, expect } from 'vitest';
import { formatDate } from './date';

describe('formatDate', () => {
	it('formats a date as M/DD', () => {
		expect(formatDate(new Date(2026, 0, 5))).toBe('1/05');
	});

	it('does not pad single-digit month but pads single-digit day', () => {
		expect(formatDate(new Date(2026, 2, 3))).toBe('3/03');
	});

	it('handles end of year', () => {
		expect(formatDate(new Date(2026, 11, 31))).toBe('12/31');
	});
});
