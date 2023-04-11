<script>
	import Calendar from '$components/home/Calendar.svelte';
	import PlayerRanking from '$components/home/PlayerRanking.svelte';

	export let data;
	const { players, calendar } = data;
</script>

<div class="flex justify-center gap-4">
	<PlayerRanking {players} />
	<Calendar {calendar} />
</div>
