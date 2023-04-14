<script>
	import Calendar from '$components/home/Calendar.svelte';
	import LastGame from '$components/home/LastGame.svelte';
	import PlayerRanking from '$components/home/PlayerRanking.svelte';

	export let data;
	const { users, calendars, games } = data;
</script>

<div class="flex justify-center gap-4">
	<PlayerRanking {users} />
	<Calendar {calendars} />
	<LastGame {games} />
</div>
