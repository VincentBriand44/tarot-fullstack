<script lang="ts">
	import Icon from '$components/Icon.svelte';

	export let data;
	const { game, user } = data;
	const users = game?.users || [];
	const rounds = game?.rounds || [];

	const editMode = false;

	let taker: string = '';
	let conscript: string = '';
	let score: number = 0;
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
						{#if user.role === 'ADMIN'}
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
							{#if user.role === 'ADMIN'}
								<td colspan="5" class="text-center">O</td>
								<td colspan="6" class="text-center">X</td>
							{/if}
						</tr>
					{/each}
				</tbody>
			</table>
			{#if user.role === 'ADMIN'}
				<div class="flex gap-2 mt-2">
					{#if editMode}
						{#each Array(5) as _, index}
							<input
								type="number"
								name={index.toString()}
								class="w-full px-2 py-1 rounded-lg bg-slate-950"
							/>
						{/each}
					{:else}
						<select
							name="taker"
							class="w-full px-2 py-1 rounded-lg bg-slate-950"
							on:change={(e) => (taker = e.currentTarget.value)}
						>
							<option value="">Choisir le preneur</option>
							{#each users as { name, id }}
								<option value={id} class="w-full px-2 py-1 rounded-lg bg-slate-950">{name}</option>
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
									<option value={id} class="w-full px-2 py-1 rounded-lg bg-slate-950">{name}</option
									>
								{/if}
							{/each}
						</select>
						<input
							type="number"
							class="w-full px-2 py-1 rounded-lg bg-slate-950"
							placeholder={taker !== '' ? 'Score du preneur' : ''}
							disabled={taker === ''}
							on:change={(e) => (score = parseInt(e.currentTarget.value))}
						/>
					{/if}
					<button class="px-2 py-1 rounded-lg w-96 bg-slate-950">Envoyer</button>
					<button
						class="flex items-center justify-center w-8 px-2 py-1 bg-red-700 rounded-lg hover:bg-red-600"
					>
						<Icon icon="mi-chevron-double-right" />
					</button>
				</div>
			{/if}
		</div>
	</section>
	<section class="flex justify-center w-full max-w-5xl gap-4 mt-8">
		{#if user.role === 'ADMIN'}
			<button class="font-semibold bg-slate-900 py-2 px-4 rounded-lg text-red-500">
				Terminer la partie
			</button>
		{/if}
	</section>
</div>
