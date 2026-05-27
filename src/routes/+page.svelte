<script lang="ts">
	import { goto } from '$app/navigation';
	import { generateId } from '$lib/id';

	function findPriority() {
		goto(`/${generateId()}/list`);
	}
</script>

<main>
	<h1>Priority</h1>
	<button onclick={findPriority}>Find Your Priority</button>
</main>
