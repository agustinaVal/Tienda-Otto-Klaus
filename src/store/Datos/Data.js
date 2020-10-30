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
			console.log(db);
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
	},
	mutations: {
		setData(state, payload) {
			state.Productos.push(payload);
			console.log(state.Productos);
		},
	},
};
