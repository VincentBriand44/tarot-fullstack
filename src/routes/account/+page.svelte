<script>
	import Icon from '$components/Icon.svelte';

	export let data;
	const { total, user } = data;

	let played = true;
</script>

<div class="flex flex-col items-center">
	<div class="bg-slate-900 rounded-full p-8 w-min">
		<Icon icon={'mi-user'} size={5} />
	</div>
	<h2 class="bold text-xl uppercase">
		{user?.name}
		<span class="text-red-500 font-bold">
			{user?.role !== 'USER' ? ` (${user?.role})` : ''}
		</span>
	</h2>
	<h3 class="font-light italic text-slate-400">@{user?.username.toLowerCase()}</h3>

	<section class="flex justify-center gap-4 mt-8 w-full max-w-5xl">
		<div class="bg-slate-900 rounded-xl px-4 py-2 w-full">
			<h4 class="font-bold text-center">Saison actuelle</h4>
			{#if played}
				<ul>
					<li class="flex justify-between">
						Points total
						<span class="text-slate-400">{total}</span>
					</li>
					<li class="flex justify-between">
						Classement
						<span class="text-slate-400">0</span>
					</li>
					<li class="flex justify-between">
						Parties jouées
						<span class="text-slate-400">0</span>
					</li>
				</ul>
			{:else}
				<p class="text-center">Aucune partie jouée</p>
			{/if}
		</div>
		<div class="bg-slate-900 rounded-xl px-4 py-2 w-full">
			<h4 class="font-bold text-center">Médailles</h4>
			<ul>
				<li class="flex justify-between">
					Médailles d'or
					<span class="text-slate-400">0</span>
				</li>
				<li class="flex justify-between">
					Médailles d'argent
					<span class="text-slate-400">0</span>
				</li>
				<li class="flex justify-between">
					Médailles d'bronze
					<span class="text-slate-400">0</span>
				</li>
			</ul>
		</div>
	</section>
</div>
