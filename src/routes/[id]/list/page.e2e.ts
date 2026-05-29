import { expect, test } from '@playwright/test';

test('gather phase has correct header', async ({ page }) => {
	await page.goto(`/${crypto.randomUUID()}/list`);
	await expect(page.getByRole('heading', { name: 'Gather' })).toBeVisible();
});

test('can add a task and see it in the list', async ({ page }) => {
	await page.goto(`/${crypto.randomUUID()}/list`);

	await page.getByRole('textbox').fill('Buy oat milk');
	await page.getByRole('button', { name: 'Capture' }).click();

	const item = page.getByTestId('list-item').first();
	await expect(item).toBeVisible();
	await expect(item).toContainText('Buy oat milk');
	await expect(item).toContainText(/\d{1,2}\/\d{2}/);
});

test('clears the input after adding a task', async ({ page }) => {
	await page.goto(`/${crypto.randomUUID()}/list`);

	await page.getByRole('textbox').fill('Buy oat milk');
	await page.getByRole('button', { name: 'Capture' }).click();

	await expect(page.getByRole('textbox')).toHaveValue('');
});

test('preserves insertion order when multiple tasks are added', async ({ page }) => {
	await page.goto(`/${crypto.randomUUID()}/list`);

	const tasks = ['First thing', 'Second thing', 'Third thing'];

	for (const task of tasks) {
		await page.getByRole('textbox').fill(task);
		await page.getByRole('button', { name: 'Capture' }).click();
	}

	const listItems = page.getByTestId('list-item');
	await expect(listItems).toHaveCount(3);

	for (let i = 0; i < tasks.length; i++) {
		await expect(listItems.nth(i)).toContainText(tasks[i]);
	}
});
