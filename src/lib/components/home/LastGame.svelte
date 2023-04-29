<script lang="ts">
	import type { PageServerData } from '../../../routes/$types';

	interface Score {
		name: string;
		score: number;
	}

	export let games: PageServerData['games'];
	const game = games[games.length - 1];

	const calcScore = () => {
		const arr: Score[] = [];
		game?.rounds.map((round) => {
			round.scores.map((score) => {
				arr.push({ name: score.user.name, score: score.value });
			});
		});

		const result = arr.reduce((acc: Score[], { name, score }) => {
			const existing = acc.find((x) => x.name === name);
			if (existing) {
				existing.score += score;
			} else {
				acc.push({ name, score });
			}
			return acc;
		}, []);

		return result;
	};
	const players = calcScore();
</script>

<section class="relative flex flex-col w-full h-full p-4 pb-6 rounded-xl bg-slate-900 module">
	<h2 class="mb-2 text-lg font-bold text-center">Dernière partie</h2>
	{#if game === undefined}
		<h3 class="mb-2 text-lg text-center">Il n'y a aucune partie</h3>
	{:else}
		<ul class="w-full content">
			{#each players as { name, score }}
				<li class="flex justify-between content">
					{name}<span class="text-slate-400">{score}</span>
				</li>
			{/each}
		</ul>
		{#if game.ended === false}
			<a
				href="/games/play"
				class="absolute self-center w-4/5 px-2 py-1 mt-4 text-center rounded-lg bottom-4 bg-slate-800"
				>Rejoindre la partie</a
			>
		{:else}
			<a
				href="/games"
				class="absolute self-center w-4/5 px-2 py-1 mt-4 text-center rounded-lg bottom-4 bg-slate-800"
				>Voir plus de détails</a
			>
		{/if}
	{/if}
</section>
