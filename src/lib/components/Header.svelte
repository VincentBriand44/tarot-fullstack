<script lang="ts">
	import type { Nav } from '$types/app';

	import Icon from './Icon.svelte';

	export let accountDropdown: Nav[];

	let showDropdown: boolean = false;

	const toggleDropdown = () => {
		showDropdown = !showDropdown;
	};
</script>

<header class="flex items-center justify-end w-full h-16 px-4 xl:px-16">
	<button
		class="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-900/75"
		on:click={toggleDropdown}
	>
		<Icon icon="mi-user" />

		<ul
			class={`absolute right-0 p-2 top-14 w-max rounded-xl bg-slate-900 border border-slate-950 2xl:border-none ${
				showDropdown ? 'block' : 'hidden'
			}`}
		>
			{#each accountDropdown as { name, href }}
				{#if href === '/logout'}
					<div class="h-px mx-4 my-2 bg-slate-800" />
				{/if}
				<li class="px-4 py-1 rounded-lg hover:bg-slate-950">
					<a {href} class={href === '/logout' ? 'text-red-500' : ''}>{name}</a>
				</li>
			{/each}
		</ul>
	</button>
</header>
