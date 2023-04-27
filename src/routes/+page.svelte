<script>
	import Calendar from '$components/home/Calendar.svelte';
	import LastGame from '$components/home/LastGame.svelte';
	import PlayerRanking from '$components/home/PlayerRanking.svelte';

	export let data;
	const { users, calendars, games } = data;
</script>

<div
	class="grid h-auto grid-rows-4 gap-4 px-4 mx-auto my-3 sm:grid-cols-2 sm:grid-rows-2 h-container max-w-7xl"
>
	<PlayerRanking {users} />
	<Calendar {calendars} />
	<LastGame {games} />
</div>

<style lang="postcss">
	@media screen and (min-width: 640px) {
		.h-container {
			height: calc(100vh - 11rem);
			min-height: 24rem;
		}
	}
</style>
