<script lang="ts">
	import type { LayoutData } from './$types';

	import Header from '$components/Header.svelte';
	import Navbar from '$components/Navbar.svelte';

	import '$css';
	export let data: LayoutData;
</script>

<main class="px-4 pb-20 h-main">
	<Header accountDropdown={data.accountDropdown} />
	<slot />
	<Navbar nav={data.nav} />
</main>

<style>
	.h-main {
		min-height: calc(100vh - 5rem);
	}
</style>
