<template>
	<div class="login">
		<form @submit.prevent="login" class="form">
			<h1>Tienda Otto Klaus Inventario</h1>
			<hr>
			<h4>Ingrese agregando tus credenciales</h4>
			<hr>
			<input v-model="usuario" type="text" placeholder="Correo" />
			<input v-model="contrasena" type="password" placeholder="Clave" />

			<div class="my-2">
				<v-btn @click="login" color="success" dark large class="mx-5"> Ingresar </v-btn>
				<v-btn @click="logInGoogle" color="error" dark large> Login con Gmail </v-btn>
			</div>
		</form>
	</div>
</template>

<script>
import firebase from 'firebase';
export default {
	name: 'Login',
	data() {
		return {
			usuario: '',
			contrasena: '',
		};
	},
	methods: {
		login() {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.usuario, this.contrasena)
				.then(
					(user) => this.$router.replace('home'),
					(error) => console.error(error)
				);
		},
		logInGoogle() {
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then((result) => {
					this.$router.replace('home');
				});
		},
	},
};
</script>

<style lang="scss">
.form {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 20px;
	margin: 20px;
}
.form  input{
	width: 400px;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid grey;
	margin: 10px;

}
</style>
