<template>
	<div class="admin">
		<v-container>
			<v-btn @click="Logout" depressed>
				Cerrar sesion
			</v-btn>
		</v-container>
	</div>
</template>

<script>
import firebase from 'firebase';

export default {
	name: 'Admin',
	created() {
		console.log(firebase.auth().currentUser);
	},
	methods: {
		Logout() {
			firebase
				.auth()
				.signOut()
				.then(() => alert('Usuario Deslogueado'));
		},
	},
};
</script>
