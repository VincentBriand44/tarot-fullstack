<script lang="ts">
	export let data;
	const { user, isEnded } = data;
	console.log('🚀 ~ file: +page.svelte:4 ~ isEnded:', isEnded);
</script>

<div class="flex flex-col items-center">
	<section class="flex justify-center w-full max-w-5xl gap-4 mt-8">
		{#if user?.role === 'ADMIN' && isEnded.ended}
			<div class="flex items-center justify-center w-full gap-4 p-4 bg-slate-900 rounded-xl">
				<p>Aucune partie n'est en cours, souhaitez-vous en commencer une ?</p>
				<button class="w-40 px-4 py-2 bg-slate-950 rounded-xl">Créer une partie</button>
			</div>
		{:else if !isEnded.ended}
			<div class="flex items-center justify-center w-full gap-4 p-4 bg-slate-900 rounded-xl">
				<p>Une partie est en cours, souhaitez-vous la voir ?</p>
				<a href={`/games/play`}
					><button class="w-40 px-4 py-2 bg-slate-950 rounded-xl">Voir la partie</button></a
				>
			</div>
		{/if}
	</section>
</div>
