import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    Productos: [],
    add: false,
  },
  getters: {
    datos(state) {
      return state.Productos;
    },
  },
  mutations: {
    setData(state, payload) {
      state.Productos = payload;
    },
    AddData(state, payload) {
      state.Productos.push(payload);
    },
    MostrarAdd(state) {
      state.add = !state.add;
    },
  },
  actions: {
    getData({ commit }) {
      firebase
        .firestore()
        .collection("productos")
        .onSnapshot((snapshot) => {
          let products = [];
          snapshot.forEach((p) => {
            products.push({
              id: p.id,
              nombre: p.data().nombre,
              codigo: p.data().codigo,
              stock: p.data().stock,
              precio: p.data().precio,
            });
          });
          commit("setData", products);
        });
    },
    async addData({ commit }, payload) {
      const juguete = {
        precio: Number(payload.precio),
        stock: Number(payload.stock),
        nombre: payload.nombre.toLowerCase(),
        codigo: payload.codigo.toUpperCase(),
      };

      try {
        await firebase
          .firestore()
          .collection("productos")
          .add(juguete);
      } catch (error) {
        console.error("Error de carga, intente de nuevo:", error);
      }
    },

    async borrarJuguetes({ commit }, id) {
      try {
        await firebase
          .firestore()
          .collection("productos")
          .doc(id)
          .delete();
      } catch (error) {
        console.error("Error al eliminar, intenta de nuevo:", error);
      }
    },

    async editararJuguetes({ commit },juguetes ) {
      console.log(juguetes)
      try {
        await firebase
          .firestore()
          .collection("productos")
          .doc(juguetes.id)
          .update(juguetes.data);
      } catch (error) {
        console.error("Error de carga, intente de nuevo:", error);
      }
    },
  },
};