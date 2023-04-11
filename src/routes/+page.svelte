<script>
	import PlayerRanking from '$components/PlayerRanking.svelte';

	export let data;
	const { players } = data;
</script>

<div class="flex justify-center gap-4">
	<PlayerRanking {players} />
</div>
