<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import TaskList from '$lib/components/TaskList.svelte';
	import { createTask, type Task } from '$lib/types';

	let tasks = $state<Task[]>([]);
	let text = $state('');

	function addTask() {
		const trimmed = text.trim();
		if (!trimmed) return;
		tasks = [...tasks, createTask(trimmed)];
		text = '';
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
