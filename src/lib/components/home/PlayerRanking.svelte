<script lang="ts">
	import type { PageServerData } from '../../../../.svelte-kit/types/src/routes/$types';

	export let users: PageServerData['users'];
</script>

<section class="flex flex-col w-full h-full p-4 pb-6 rounded-xl bg-slate-900 module">
	<h2 class="mb-2 text-lg font-bold text-center">Classement</h2>
	<ul class="w-full content">
		{#each users as { name, scores }}
			{@const total = scores.reduce((prev, current) => prev + current.value, 0)}
			<li class="flex justify-between">
				{name}
				<span class="text-slate-400">{total}</span>
			</li>
		{/each}
	</ul>
</section>
