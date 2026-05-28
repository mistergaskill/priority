<script lang="ts">
	interface Props {
		onclick: () => void;
		label: string;
	}

	let { onclick, label }: Props = $props();
</script>

<button
	{onclick}
	class="rounded-md bg-primary-button px-6 py-3 font-semibold text-primary-font"
>
	{label}
</button>
