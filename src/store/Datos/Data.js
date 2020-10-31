import firebase from 'firebase';

export default {
    namespaced: true,
    state: {
        Productos: [],
        add: false,
        edit: false,
        editProducto: {

        },

    },
    getters: {
        datos(state) {
            return state.Productos;
        },
    },
    actions: {
        async getData({
            commit
        }) {
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
        async addData({
            commit
        }, payload) {
            const precio = Number(payload.precio);
            const stock = Number(payload.stock);
            const nombre = payload.nombre.toLowerCase();
            const codigo = payload.codigo.toUpperCase();

            const juguete = {
                precio,
                stock,
                nombre,
                codigo,
            };

            // agregar firestore
            try {
                await firebase
                    .firestore()
                    .collection('productos')
                    .add(juguete);
            } catch (error) {
                alert("Algo salio mal, reintente", error)
            }


            // agregar a store
            commit('addData', juguete);
        },
    },
    mutations: {
        setData(state, payload) {
            state.Productos.push(payload);
        },
        addData(state, payload) {
            state.Productos.push(payload);
        },
        MostrarAdd(state) {
            state.add = !state.add
        },
        showEditProducto(state, payload) {
            const finder = state.Productos.find((el) => el.id === payload);
            state.editProducto = finder
        }
    },
};