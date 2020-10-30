import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyC1qQDyMjYz288rYUo9QVBt31PBYpGndpo',
	authDomain: 'prueba-deploy-78473.firebaseapp.com',
	databaseURL: 'https://prueba-deploy-78473.firebaseio.com',
	projectId: 'prueba-deploy-78473',
	storageBucket: 'prueba-deploy-78473.appspot.com',
	messagingSenderId: '806028368674',
	appId: '1:806028368674:web:32e2ffd251887c2dbda37b',
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;
new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
