<script lang="ts">
	import { untrack } from 'svelte';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import TaskList from '$lib/components/TaskList.svelte';
	import { createTask, serializeTask, type Task } from '$lib/types';

	let { data } = $props();

	let tasks = $state<Task[]>(untrack(() => data.tasks));
	let text = $state('');

	function addTask() {
		const trimmed = text.trim();
		if (!trimmed) return;
		const task = createTask(trimmed, data.listId);
		tasks = [...tasks, task];
		text = '';
		persistTask(task);
	}

	async function persistTask(task: Task) {
		try {
			await fetch('/api/tasks', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(serializeTask(task))
			});
		} catch (e) {
			console.error(e);
		}
	}
</script>

<main class="mx-auto flex max-w-lg flex-col gap-6 p-6">
	<h1 class="text-3xl font-bold tracking-tight">Gather</h1>
	<div class="flex gap-2">
		<Input bind:value={text} placeholder="What's on your mind?" onsubmit={addTask} />
		<Button onclick={addTask} label="Capture" />
	</div>
	<TaskList {tasks} />
</main>
