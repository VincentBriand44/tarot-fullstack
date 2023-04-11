<script lang="ts">
	import type { LayoutData } from './$types';

	import Header from '$components/Header.svelte';
	import Navbar from '$components/Navbar.svelte';

	import '$css';
	export let data: LayoutData;
</script>

<main class="min-h-screen">
	<Header accountDropdown={data.accountDropdown} />
	<slot />
	<Navbar nav={data.nav} />
</main>
