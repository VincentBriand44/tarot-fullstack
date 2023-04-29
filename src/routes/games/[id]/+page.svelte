<script lang="ts">
	export let data;
	const { game } = data;

	const users = game?.users || [];
	const rounds = game?.rounds || [];
</script>

<div class="flex flex-col items-center">
	<section class="flex justify-center w-full max-w-5xl gap-4 mt-8">
		{#if game}
			<div class="w-full px-4 py-2 bg-slate-900 rounded-xl">
				<table class="w-full">
					<thead>
						<tr>
							{#each users as { name }, index}
								<th colspan={index + 1}>{name}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each rounds as { scores }}
							<tr>
								{#each scores as { value }, index}
									<td colspan={index + 1} class="text-center">{value}</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else}
			<p class="text-2xl">Impossible de trouver la partie</p>
		{/if}
	</section>
</div>
