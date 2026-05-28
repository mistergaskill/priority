export function formatDate(date: Date): string {
	const mm = String(date.getMonth() + 1);
	const dd = String(date.getDate()).padStart(2, '0');
	return `${mm}/${dd}`;
}
