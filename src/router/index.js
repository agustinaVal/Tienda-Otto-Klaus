import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [{
		path: '*',
		redirect: '/login',
	},
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			login: true,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
router.beforeEach((to, from, next) => {
	let user = firebase.auth().currentUser;
	let authRequired = to.matched.some((route) => route.meta.login);
	if (!user && authRequired) {
		next('/home');
	} else if (user && !authRequired) {
		next('login');
	} else {
		next();
	}
});

export default router;