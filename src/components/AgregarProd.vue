<template>
	<v-form>
		<v-container>
			<h1>Agregar productos</h1>
			<v-row>
				<v-col cols="12" md="4">
					<v-text-field v-model="juguete.nombre" label="Producto"></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field v-model="juguete.codigo" label="Codigo"></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field v-model="juguete.stock" label="Stock"></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-text-field v-model="juguete.precio" label="Precio"></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<v-btn
						@click="AgregarProducto(); ClearData()"
						depressed
					>
						Agregar
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'AgregarProductos',
	data: () => ({
		juguete: {
			nombre: '',
			codigo: '',
			stock: '',
			precio: '',
		},
	}),
	methods: {
		...mapActions('Data', ['addData']),
		AgregarProducto() {
			this.addData(this.juguete);
		},
		ClearData() {
			(this.juguete.nombre = ''),
				(this.juguete.codigo = ''),
				(this.juguete.stock = ''),
				(this.juguete.precio = '');
		},
	},
};
</script>
