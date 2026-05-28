<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { generateId } from '$lib/id';
	import Button from '$lib/components/Button.svelte';

	function createList() {
		goto(resolve(`/${generateId()}/list`));
	}
</script>

<main class="flex min-h-screen flex-col items-center justify-center gap-6">
	<h1 class="text-4xl font-bold tracking-tight">Priority</h1>
	<Button onclick={createList} label="Find Your Priority" />
</main>
