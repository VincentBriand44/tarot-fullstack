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
		game.rounds.map((round) => {
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

<section class="flex flex-col w-64 p-4 pb-6 rounded-xl bg-slate-900 module">
	<h2 class="mb-2 text-lg font-bold text-center">Dernière partie</h2>
	<ul class="w-full">
		{#each players as { name, score }}
			<li class="flex justify-between">
				{name}<span class="text-slate-400">{score}</span>
			</li>
		{/each}
	</ul>
</section>
