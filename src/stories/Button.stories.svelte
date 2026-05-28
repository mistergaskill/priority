<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from '$lib/components/Button.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Priority/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
      onclick: fn(),
    }
  });
</script>

<Story name="Default" args={{ label: 'Find Your Priority' }} />
