import firebase from 'firebase';

export default {
	namespaced: true,
	state: {
		Productos: [],
	},
	getters: {},
	actions: {
		async getData({ commit }) {
			const db = await firebase
				.firestore()
				.collection('productos')
				.get();
			db.forEach((el) => {
				const producto = {
					id: el.id,
					nombre: el.data().nombre,
					codigo: el.data().codigo,
					stock: el.data().stock,
					precio: el.data().precio,
				};
				commit('setData', producto);
			});
		},
		async addData({ commit }, payload) {
			// agregar firestore

			// agregar a store
			commit('addData', payload);
		},
	},
	mutations: {
		setData(state, payload) {
			state.Productos.push(payload);
		},
		addData(state, payload) {
			state.Productos.push(payload);
		},
	},
};
