<script lang="ts">
	export let data;
	const { users, selected } = data;

	let players: string[] = selected;

	const handleClick = (e: any) => {
		const { classList, name } = e.currentTarget;

		if (!players.includes(name) && players.length < 5) {
			players.push(name);
			classList.add('active');
		} else if (players.includes(name)) {
			players.splice(players.indexOf(name), 1);
			classList.remove('active');
		}
		players = players;
		console.log(players);
	};
</script>

<div class="flex flex-col items-center">
	<section class="flex justify-center w-full max-w-5xl gap-4 mt-8">
		<div class="p-4 bg-slate-900 w-60 rounded-xl">
			<h2 class="text-center mb-4 font-semibold">Choisir les joueurs</h2>
			<ul>
				{#each users as { name, id }}
					<li>
						<button
							name={id}
							on:click={(e) => handleClick(e)}
							on:keypress={(e) => handleClick(e)}
							class={`py-2 px-4 bg-slate-950/50 rounded-xl mb-2 w-full ${
								players.includes(id) && 'bg-slate-600'
							}`}
						>
							{name}
						</button>
					</li>
				{/each}
				<li>
					<button
						class={`py-2 px-4 bg-slate-950 rounded-xl mt-2 w-full ${
							players.length !== 5 && 'opacity-50'
						}`}
						disabled={players.length !== 5}>Valider</button
					>
				</li>
			</ul>
		</div>
	</section>
</div>
