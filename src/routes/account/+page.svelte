<script>
	import Icon from '$components/Icon.svelte';

	export let data;
	const { total, user, position, playedGames, games } = data;
	const lastGames = games?.games || [];

	let played = true;
</script>

<div class="flex flex-col items-center">
	<div class="bg-slate-900 rounded-full p-8 w-min">
		<Icon icon={'mi-user'} size={5} />
	</div>
	<h2 class="bold text-xl uppercase">
		{user?.name}
		<span class="text-red-500 font-bold">
			{user?.role !== 'USER' ? ` (${user?.role})` : ''}
		</span>
	</h2>
	<h3 class="font-light italic text-slate-400">@{user?.username.toLowerCase()}</h3>

	<section class="flex justify-center gap-4 mt-8 w-full max-w-5xl">
		<div class="bg-slate-900 rounded-xl px-4 py-2 w-full">
			<h4 class="font-bold text-center">Saison actuelle</h4>
			{#if played}
				<ul>
					<li class="flex justify-between">
						Points total
						<span class="text-slate-400">{total}</span>
					</li>
					<li class="flex justify-between">
						Classement
						<span class="text-slate-400">{position}</span>
					</li>
					<li class="flex justify-between">
						Parties jouées
						<span class="text-slate-400">{playedGames}</span>
					</li>
				</ul>
			{:else}
				<p class="text-center">Aucune partie jouée</p>
			{/if}
		</div>
		<div class="bg-slate-900 rounded-xl px-4 py-2 w-full">
			<h4 class="font-bold text-center">Médailles <span class="text-red-500">(WIP)</span></h4>
			<ul>
				<li class="flex justify-between">
					Médailles d'or
					<span class="text-slate-400">0</span>
				</li>
				<li class="flex justify-between">
					Médailles d'argent
					<span class="text-slate-400">0</span>
				</li>
				<li class="flex justify-between">
					Médailles d'bronze
					<span class="text-slate-400">0</span>
				</li>
			</ul>
		</div>
	</section>

	<section class="flex justify-center gap-4 mt-8 w-full max-w-5xl">
		<div class="bg-slate-900 rounded-xl px-4 py-2 w-full">
			<h4 class="font-bold text-center">Dernières parties</h4>
			<ul class="flex flex-col gap-2 py-2">
				{#each lastGames as game}
					<li class="bg-slate-800 rounded-xl py-2 px-4">
						{new Date(game.createdAt).toLocaleDateString('fr')} -
					</li>
				{/each}
			</ul>
		</div>
	</section>
</div>
