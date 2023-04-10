<script lang="ts">
	import type { Nav } from '$types/app';

	export let nav: Nav[];
</script>

<nav class="fixed bottom-0 flex items-center justify-center w-full h-20 gap-4">
	<ul class="flex gap-4">
		{#each nav as { name, href, icon }}
			<li class="rounded-full bg-slate-900 h-12 w-12">
				<a class="w-full h-full text-sm flex items-center justify-center" {href}>
					{#if icon !== undefined}
						<img src={icon} alt={name} class="h-6 w-6" />
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>
