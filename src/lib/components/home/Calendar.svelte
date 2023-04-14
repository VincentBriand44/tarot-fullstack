<script lang="ts">
	import type { PageServerData } from '../../../routes/$types';

	export let calendars: PageServerData['calendars'];
</script>

<section class="flex flex-col w-64 p-4 rounded-xl bg-slate-900 module relative">
	<h2 class="mb-2 text-lg font-bold text-center">Calendrier</h2>
	<ul>
		{#each calendars as { date }}
			{@const format = new Date(date).toLocaleDateString('fr-FR', {
				weekday: 'long',
				day: 'numeric',
				month: 'long'
			})}
			<li class="flex justify-between">{format}</li>
		{/each}
	</ul>
	<a
		href="/calendar"
		class="w-4/5 self-center bottom-4 px-2 py-1 mt-4 text-center rounded-lg bg-slate-800 absolute"
		>Modifier</a
	>
</section>
