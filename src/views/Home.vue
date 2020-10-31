<template>
	<div class="home">
		<v-container>
			<Tabla />
      <AgregarProductos />
		</v-container>
	</div>
</template>

<script>
import Tabla from '@/components/Tabla'
import AgregarProductos from '@/components/AgregarProd';

export default {
	name: 'Home',
	components: {
    Tabla,
    AgregarProductos
	},
};
</script>
<style lang="stylus"></style>
