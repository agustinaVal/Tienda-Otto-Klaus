<template>
	<div class="home">
		<v-container>
			<Tabla />
			<v-btn @click="showAdd" depressed>
				Agregar Producto
			</v-btn>
			<AgregarProductos v-if="add"/>
		</v-container>
	</div>
</template>

<script>
import Tabla from '@/components/Tabla';
import AgregarProductos from '@/components/AgregarProd';
import { mapMutations, mapState } from 'vuex';

export default {
	name: 'Home',
	components: {
		Tabla,
		AgregarProductos,
	},
	computed: {
		...mapState('Data', ['add']),
  },
  methods: {
    ...mapMutations("Data", ["MostrarAdd"]),
    showAdd() {
      this.MostrarAdd();
    }
  }
};
</script>
<style lang="stylus"></style>
