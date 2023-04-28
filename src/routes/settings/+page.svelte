<script lang="ts">
	export let data;
	const { user } = data;
</script>

<div class="flex flex-col items-center">
	<section class="flex justify-center w-full max-w-5xl gap-4 mt-8">
		<div class="flex flex-col justify-between w-full px-4 py-2 bg-slate-900 rounded-xl">
			<div>
				<h4 class="mb-2 font-bold text-center">Changer d'email</h4>
				<label for="email" class="ml-2 font-medium text-slate-300">Email :</label>
				<input
					type="email"
					name="email"
					class="w-full px-2 py-1 mb-2 lowercase rounded-lg bg-slate-950"
					value={user?.email}
				/>
				<label for="remail" class="ml-2 font-medium text-slate-300">Répéter l'email :</label>
				<input type="email" name="remail" class="w-full px-2 py-1 mb-4 rounded-lg bg-slate-950" />
			</div>
			<button class="self-end w-4/5 px-2 py-1 mx-auto my-2 text-center rounded-lg bg-slate-800">
				Changer l'email
			</button>
		</div>
		<div class="flex flex-col justify-between w-full px-4 py-2 bg-slate-900 rounded-xl">
			<div>
				<h4 class="mb-2 font-bold text-center">Changer de mot de passe</h4>
				<label for="lastpassword" class="ml-2 font-medium text-slate-300"
					>Ancien mot de passe :</label
				>
				<input
					type="password"
					name="lastpassword"
					autocomplete="current-password"
					class="w-full px-2 py-1 mb-2 rounded-lg bg-slate-950"
				/>
				<label for="password" class="ml-2 font-medium text-slate-300">Nouveau mot de passe :</label>
				<input
					type="password"
					name="password"
					autocomplete="new-password"
					class="w-full px-2 py-1 mb-2 rounded-lg bg-slate-950"
				/>
				<label for="repassword" class="ml-2 font-medium text-slate-300"
					>Répéter le nouveau mot de passe :</label
				>
				<input
					type="password"
					name="repassword"
					autocomplete="new-password"
					class="w-full px-2 py-1 mb-4 rounded-lg bg-slate-950"
				/>
			</div>
			<button
				class="flex self-center justify-center w-4/5 px-2 py-1 mx-auto my-2 text-center rounded-lg bg-slate-800"
			>
				Changer le mot de passe
			</button>
		</div>
	</section>
	<section class="flex justify-center w-full max-w-5xl gap-4 mt-8">
		<div class="flex flex-col justify-between w-full px-4 py-2 bg-slate-900 rounded-xl">
			<div>
				<h4 class="mb-2 font-bold text-center">Changer mes informations</h4>
				<label for="name" class="ml-2 font-medium text-slate-300">Prénom NOM :</label>
				<input
					type="text"
					name="name"
					autocomplete="name"
					class="w-full px-2 py-1 mb-2 capitalize rounded-lg bg-slate-950"
					value={user?.name}
				/>
				<label for="username" class="ml-2 font-medium text-slate-300">Nom d'utilisateur :</label>
				<input
					type="username"
					name="username"
					autocomplete="new-password"
					class="w-full px-2 py-1 mb-4 lowercase rounded-lg bg-slate-950"
					value={user?.username}
				/>
			</div>
			<button
				class="flex self-center justify-center w-4/5 px-2 py-1 mx-auto my-2 text-center rounded-lg bg-slate-800"
			>
				Changer mes informations
			</button>
		</div>
	</section>
</div>
