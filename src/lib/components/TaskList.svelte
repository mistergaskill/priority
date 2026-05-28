<script lang="ts">
	import { formatDate } from '$lib/helpers/date';
	import type { Task } from '$lib/types';

	interface Props {
		tasks: Task[];
	}

	let { tasks }: Props = $props();
</script>

<ul class="flex flex-col gap-2">
	{#each tasks as task (task.id)}
		<li data-testid="list-item" class="flex items-center justify-between rounded-md bg-accent-1 px-4 py-3">
			<span>{task.text}</span>
			<span class="text-sm text-primary-font/50">{formatDate(task.createdAt)}</span>
		</li>
	{/each}
</ul>
