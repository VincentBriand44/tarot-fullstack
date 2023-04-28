<script lang="ts">
	export let data;
	const { game } = data;
	console.log(game);
</script>

ID: {game ? game.id : 'Impossible de trouver la partie'}
