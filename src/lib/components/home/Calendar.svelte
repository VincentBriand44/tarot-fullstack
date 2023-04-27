<script lang="ts">
	import type { PageServerData } from '../../../routes/$types';

	export let calendars: PageServerData['calendars'];
</script>

<section class="relative flex flex-col w-full h-full p-4 rounded-xl bg-slate-900 module">
	<h2 class="mb-2 text-lg font-bold text-center">Calendrier</h2>
	<ul class="content">
		{#each calendars as { date }}
			{@const format = new Date(date).toLocaleDateString('fr-FR', {
				weekday: 'long',
				day: 'numeric',
				month: 'long',
			})}
			<li class="flex justify-between">{format}</li>
		{/each}
	</ul>
	<a
		href="/calendar"
		class="absolute self-center w-4/5 px-2 py-1 mt-4 text-center rounded-lg bottom-4 bg-slate-800"
		>Modifier</a
	>
</section>
