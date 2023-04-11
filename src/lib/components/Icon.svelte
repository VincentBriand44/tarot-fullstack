<script lang="ts">
	export let { icon } = { icon: '' };
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mono-icons@1.3.1/iconfont/icons.css" />
</svelte:head>

<i class={`text-xl leading-5 text-slate-200 ${icon}`} />
