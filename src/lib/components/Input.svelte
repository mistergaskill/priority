<script lang="ts">
	interface Props {
		value: string;
		placeholder?: string;
		onsubmit?: () => void;
	}

	let { value = $bindable(''), placeholder = '', onsubmit }: Props = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') onsubmit?.();
	}
</script>

<input
	type="text"
	bind:value
	onkeydown={handleKeydown}
	{placeholder}
	class="w-full rounded-md bg-accent-1 px-4 py-3 text-primary-font placeholder:text-primary-font/40 focus:outline-none"
/>
