<script lang="ts">
	import type { Player } from '$types/app';

	export let players: Player[];
</script>

<section class="flex flex-col items-center w-64 p-4 pb-6 rounded-xl bg-slate-900 module">
	<h2 class="mb-2 text-lg font-bold">Classement</h2>
	<ul class="w-full">
		{#each players as { name, score }}
			<li class="flex justify-between">{name}<span class="text-slate-400">{score}</span></li>
		{/each}
	</ul>
</section>
