<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from '$lib/components/Input.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Priority/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
      onsubmit: fn(),
    }
  });
</script>

<Story name="Empty" args={{ value: '', placeholder: "What's on your mind?" }} />
<Story name="Filled" args={{ value: 'Buy oat milk', placeholder: "What's on your mind?" }} />
