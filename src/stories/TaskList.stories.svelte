<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TaskList from '$lib/components/TaskList.svelte';

  const { Story } = defineMeta({
    title: 'Priority/TaskList',
    component: TaskList,
    tags: ['autodocs'],
  });

  const tasks = [
    { id: '1', listId: 'list-1', text: 'Buy oat milk', createdAt: new Date('2026-05-29') },
    { id: '2', listId: 'list-1', text: 'Call the dentist', createdAt: new Date('2026-05-29') },
    { id: '3', listId: 'list-1', text: 'Finish the report', createdAt: new Date('2026-05-29') },
  ];
</script>

<Story name="Empty" args={{ tasks: [] }} />
<Story name="With Tasks" args={{ tasks }} />
