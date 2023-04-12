<script lang="ts">
	import type { Calendar } from '$types/app';

	export let calendar: Calendar[];
</script>

<section class="flex flex-col w-64 p-4 rounded-xl bg-slate-900 module relative">
	<h2 class="mb-2 text-lg font-bold text-center">Calendrier</h2>
	<ul>
		{#each calendar as { date }}
			<li class="flex justify-between">{date}</li>
		{/each}
	</ul>
	<a
		href="/calendar"
		class="w-4/5 self-center bottom-4 px-2 py-1 mt-4 text-center rounded-lg bg-slate-800 absolute"
		>Modifier</a
	>
</section>
