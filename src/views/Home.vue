<template>
	<div class="home">
		<v-container>
			<Tabla />
		</v-container>
	</div>
</template>

<script>
import Tabla from '@/components/Tabla';

export default {
	name: 'Home',
	components: {
		Tabla,
	},
};
</script>
<style lang="stylus"></style>
