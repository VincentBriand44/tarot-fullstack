<script lang="ts">
	import { page } from '$app/stores';

	const status = $page.status;
	const message = status === 404 ? [`La page demandée n'existe pas.`] : $page.error?.message;
</script>

<section class="fullpage">
	<h1 class="text-6xl font-bold">Erreur {status}</h1>
	<p class="text-xl">{message}</p>
	<a href="/" class="px-4 py-2 mt-8 rounded-full bg-slate-900">Revenir à l'accueil</a>
</section>
