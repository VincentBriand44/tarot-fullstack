<script lang="ts">
	import type { Nav } from '$types/app';

	import Icon from './Icon.svelte';

	export let nav: Nav[];
</script>

<nav class="fixed bottom-0 flex items-center justify-center w-full h-20 gap-4 mb-2">
	<ul class="flex gap-4">
		{#each nav as { name, href, icon, active }}
			<li>
				<a class="flex flex-col items-center text-sm" {href}>
					<div
						class={`flex items-center justify-center w-12 h-12 rounded-full hover:bg-slate-900/75 ${
							active ? 'bg-slate-900' : 'bg-slate-900/50'
						}`}
					>
						{#if icon !== undefined}
							<Icon {icon} />
						{/if}
					</div>
					<span class={`mt-1 text-xs select-none ${active ? 'text-slate-400' : 'text-slate-500'}`}
						>{name}</span
					>
				</a>
			</li>
		{/each}
	</ul>
</nav>
