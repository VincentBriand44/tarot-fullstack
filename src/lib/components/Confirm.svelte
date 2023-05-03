<script lang="ts">
	export let active = false;
	export let title = 'Êtes-vous sûr ?';
	export let message = 'Cette action ne peut être annulée.';
	export let result = () => console.log('Confirm');
</script>

{#if active}
	<section
		class="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/60"
		on:click={() => (active = false)}
		on:keypress={() => (active = false)}
	>
		<div class="px-4 py-2 w-80 bg-slate-900 rounded-xl">
			<h3 class="font-bold">{title}</h3>
			<p>{message}</p>
			<div class="flex gap-2 mt-4">
				<button class="w-1/2 px-4 py-2 text-red-500 rounded-xl hover:bg-slate-950/50">
					Annuler
				</button>
				<button
					class="w-1/2 px-4 py-2 text-green-500 bg-slate-950 rounded-xl hover:bg-slate-950/50"
					on:click={() => result()}
					on:keypress={() => result()}
				>
					Confirmer
				</button>
			</div>
		</div>
	</section>
{/if}
