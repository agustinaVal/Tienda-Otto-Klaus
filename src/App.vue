<template>
	<v-app>
		<v-app-bar app color="succes" dark>
			<div class="d-flex align-center">
				<v-img
					alt="Vuetify Logo"
					class="shrink mr-2"
					contain
					src="https://wsappsdevs.web.app/images/playstore.png"
					transition="scale-transition"
					width="40"
				/>
			</div>
			<v-spacer></v-spacer>
			<div id="nav">
				<router-link to="/">Home</router-link> |
				<router-link :to="{ name: 'Admin' }">Admin</router-link>
			</div>
		</v-app-bar>
		<v-container>
			<v-main>
				<router-view />
			</v-main>
		</v-container>
	</v-app>
</template>

<script>
import { mapActions } from 'vuex';
import firebase from 'firebase';
export default {
	name: 'App',
	data: () => ({
		//
	}),
	mounted() {
		firebase
			.auth()
			.signInWithEmailAndPassword('admin@admin.com', '000000')
			.then((user) => console.log(user))
			.catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorMessage);
			});
	},
	created() {
		this.getData();
	},
	methods: {
		...mapActions('Data', ['getData']),
	},
};
</script>
<style lang="scss">
#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: white;

		&.router-link-exact-active {
			color: #f57f17;
		}
	}
}
</style>
