<script lang="ts">
	import type { Calendar } from '$types/app';

	export let calendar: Calendar[];
</script>

<section class="flex flex-col items-center justify-between w-64 p-4 rounded-xl bg-slate-900 module">
	<h2 class="mb-2 text-lg font-bold">Calendrier</h2>
	<ul>
		{#each calendar as { date }}
			<li class="flex justify-between">{date}</li>
		{/each}
	</ul>
	<a href="/calendar" class="w-full px-2 py-1 mt-4 text-center rounded-lg bg-slate-800">Modifier</a>
</section>
