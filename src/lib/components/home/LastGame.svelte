<script lang="ts">
	import type { Game } from '$types/app';

	interface Score {
		name: string;
		score: number;
	}

	export let games: Game[];
	const game = games[games.length - 1];

	const calcScore = () => {
		const arr: Score[] = [];
		game?.rounds.map((round) => {
			round.scores.map((score) => {
				arr.push({ name: score.user.name, score: score.value });
				console.log(arr);
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

{@debug game}

<section class="flex flex-col w-64 p-4 pb-6 rounded-xl bg-slate-900 module relative">
	<h2 class="mb-2 text-lg font-bold text-center">Dernière partie</h2>
	{#if game === undefined}
		<h3 class="mb-2 text-lg text-center">Il n'y a aucune partie</h3>
	{:else}
		<ul class="w-full">
			{#each players as { name, score }}
				<li class="flex justify-between">
					{name}<span class="text-slate-400">{score}</span>
				</li>
			{/each}
		</ul>
		{#if game.end === undefined}
			<a
				href="/games"
				class="w-4/5 self-center bottom-4 px-2 py-1 mt-4 text-center rounded-lg bg-slate-800 absolute"
				>Rejoindre la partie</a
			>
		{:else}
			<a
				href="/games"
				class="w-4/5 self-center bottom-4 px-2 py-1 mt-4 text-center rounded-lg bg-slate-800 absolute"
				>Voir plus de détails</a
			>
		{/if}
	{/if}
</section>
