<script lang="ts">
	import type { User } from '$types/app';

	export let players: User[];
</script>

<section class="flex flex-col w-64 p-4 pb-6 rounded-xl bg-slate-900 module">
	<h2 class="mb-2 text-lg font-bold text-center">Classement</h2>
	<ul class="w-full">
		{#each players as { name, scoreSeason }}
			<li class="flex justify-between">{name}<span class="text-slate-400">{scoreSeason}</span></li>
		{/each}
	</ul>
</section>
