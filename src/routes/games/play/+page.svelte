<script lang="ts">
	import Confirm from '$components/Confirm.svelte';

	interface Input {
		id: string;
		value: number;
	}

	export let data;
	const { game, user, auctions } = data;
	const users = game?.users || [];
	const rounds = game?.rounds || [];

	let editMode = false;

	let taker = '';
	let auction = '';
	let conscript = '';
	let score = 0;
	let active = false;
	// let gameId: string = game?.id ?? '';
	let inputs: Input[] = [];

	const handleClick = () => {
		editMode = !editMode;

		inputs = [];
		for (let i = 0; i < 5; i++) {
			const user = users[i].id;
			let value = 0;

			if (taker !== '') {
				if (user === taker) {
					value = score;
				} else if (conscript !== '') {
					if (user === conscript) {
						value = score / 2;
					} else {
						value = -(score / 2);
					}
				} else {
					value = -(score / 4);
				}
			} else {
				value = 0;
			}
			inputs.push({
				id: user,
				value: value,
			});
			console.log('🚀 ~ file: +page.svelte:27 ~ handleClick ~ inputs:', inputs);
		}
	};
</script>

<div class="flex flex-col items-center">
	<section class="flex justify-center w-full max-w-5xl gap-4 mt-8">
		<div class="w-full px-4 py-2 bg-slate-900 rounded-xl">
			<table class="w-full">
				<thead>
					<tr>
						{#each users as { name }, index}
							<th colspan={index + 1}>{name}</th>
						{/each}
						{#if user?.role === 'ADMIN'}
							<th colspan="5">Mise</th>
							<th colspan="6">Actions</th>
						{/if}
					</tr>
				</thead>
				<tbody>
					{#each rounds as { scores }}
						<tr>
							{#each scores as { value }, index}
								<td colspan={index + 1} class="text-center">{value}</td>
							{/each}
							{#if user?.role === 'ADMIN'}
								<td colspan="5" class="text-center">O</td>
								<td colspan="6" class="text-center">X</td>
							{/if}
						</tr>
					{/each}
				</tbody>
			</table>
			{#if user?.role === 'ADMIN'}
				<form method="POST">
					<div class="flex gap-2 mt-2">
						{#if editMode}
							{#each inputs as { id, value }}
								<input
									type="number"
									{value}
									name={id}
									class="w-full px-2 py-1 rounded-lg bg-slate-950"
								/>
							{/each}
							<input type="hidden" name="gameId" value={game?.id} />
							<button class="px-2 py-1 rounded-lg w-96 bg-slate-950">Envoyer</button>
						{:else}
							<select
								name="taker"
								class="w-full px-2 py-1 rounded-lg bg-slate-950"
								on:change={(e) => (taker = e.currentTarget.value)}
							>
								<option value="">Choisir le preneur</option>
								{#each users as { name, id }}
									<option value={id} class="w-full px-2 py-1 rounded-lg bg-slate-950">{name}</option
									>
								{/each}
							</select>
							<select
								name="auction"
								class="w-full px-2 py-1 rounded-lg bg-slate-950"
								disabled={taker === ''}
								on:change={(e) => (auction = e.currentTarget.value)}
							>
								<option value="">Choisir la mise</option>
								{#each auctions as { id, name }}
									{#if name !== 'skip'}
										<option value={id} class="w-full px-2 py-1 rounded-lg bg-slate-950">
											{name}
										</option>
									{/if}
								{/each}
							</select>
							<select
								name="conscript"
								class="w-full px-2 py-1 rounded-lg bg-slate-950"
								disabled={taker === ''}
								on:change={(e) => (conscript = e.currentTarget.value)}
							>
								<option value="">Choisir l'appelé</option>
								{#each users as { name, id }}
									{#if id !== taker}
										<option value={id} class="w-full px-2 py-1 rounded-lg bg-slate-950">
											{name}
										</option>
									{/if}
								{/each}
							</select>
							<input
								type="number"
								class="w-full px-2 py-1 rounded-lg bg-slate-950"
								name="score"
								placeholder={taker === '' ? 'Score du preneur' : ''}
								disabled={taker === ''}
								on:change={(e) => (score = parseInt(e.currentTarget.value))}
							/>

							<!-- <input
								type="checkbox"
								{value}
								name={id}
								class="w-full px-2 py-1 rounded-lg bg-slate-950"
							/> -->
						{/if}
						<button
							class="px-2 py-1 rounded-lg w-96 bg-slate-950"
							on:click|preventDefault={handleClick}
							style={editMode ? 'display: none' : 'display: block'}
						>
							Valider
						</button>
						<!-- mal donne <button
							class="flex items-center justify-center w-8 px-2 py-1 bg-red-700 rounded-lg hover:bg-red-600"
						>
							<Icon icon="mi-chevron-double-right" />
						</button> -->
					</div>
				</form>
			{/if}
		</div>
	</section>
	<section class="flex justify-center w-full max-w-5xl gap-4 mt-8">
		{#if user?.role === 'ADMIN'}
			<button
				class="px-4 py-2 font-semibold text-red-500 rounded-lg bg-slate-900"
				on:click={() => (active = true)}
				on:keypress={(e) => e.key === 'Enter' && (active = true)}
			>
				Terminer la partie
			</button>
		{/if}
	</section>
	<Confirm
		{active}
		title="Êtes-vous sûr de vouloir terminer la partie ?"
		result={() => console.log('test')}
	/>
</div>
