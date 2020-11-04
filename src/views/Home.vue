<template>
  <div class="home">
    <v-container>
      <v-app-bar app color="succes" dark>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://wsappsdevs.web.app/images/playstore.png"
            transition="scale-transition"
            width="40"
          />
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-btn @click="logout"> LogOut </v-btn>
        </div>
      </v-app-bar>

      <Tabla />
      <v-btn @click="showAdd" depressed>
        <span v-if="!add">Agregar Producto</span>
        <span v-if="add">Ocultar Formulario</span>
      </v-btn>
      <AgregarProductos v-if="add" />
    </v-container>
  </div>
</template>

<script>
import Tabla from "@/components/Tabla";
import AgregarProductos from "@/components/AgregarProductos.vue";
import firebase from "firebase";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Tabla,
    AgregarProductos,

  },
  computed: {
    ...mapState("Data", ["add", "editar"]),
  },
  methods: {
    ...mapMutations("Data", ["MostrarAdd"]),
    showAdd() {
      this.MostrarAdd();
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        })
        .catch((e) => {
          alert("No funciona Wily", e);
        });
    },
  },
};
</script>
<style lang="stylus"></style>
