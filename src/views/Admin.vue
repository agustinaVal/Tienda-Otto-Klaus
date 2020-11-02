<template>
	<div class="admin">
	<v-container fluid>
  	<v-btn @click="Logout" color="succes">
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
