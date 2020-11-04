<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
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
	
	created() {
		this.getData();
	},
	methods: {
		...mapActions('Data', ['getData']),
	},
};
</script>
<style lang="scss">

</style>
