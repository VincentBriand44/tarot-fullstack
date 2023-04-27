<script lang="ts">
	export let { icon } = { icon: '' };
	export let { size } = { size: 1.25 };
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.3.1/iconfont/icons.css" />
</svelte:head>

<i class={`text-slate-200 ${icon}`} style={`font-size: ${size}rem; line-height: ${size}rem`} />
