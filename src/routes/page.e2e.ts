import { expect, test } from '@playwright/test';

test('Find Your Priority button navigates to /<id>/list', async ({ page }) => {
	await page.goto('/');

	const button = page.getByRole('button', { name: 'Find Your Priority' });
	await expect(button).toBeVisible();

	await button.click();

	await expect(page).toHaveURL(/\/[a-zA-Z0-9-]+\/list$/);
});
