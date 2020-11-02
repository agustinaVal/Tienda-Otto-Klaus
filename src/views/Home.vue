<template>
  <div class="home">
    <v-container>
      <Tabla />
      <v-btn @click="showAdd" depressed  >
        <span v-if="!add" >Agregar Producto</span>
        <span v-if="add">Ocultar Formulario</span>
      </v-btn>
      <AgregarProductos v-if="add" />
      <EditarProd v-if="!edit" />
    </v-container>
  </div>
</template>

<script>
import Tabla from "@/components/Tabla";
import AgregarProductos from "@/components/AgregarProd.vue";
import EditarProd from "@/components/EditarProd.vue";

import { mapMutations, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Tabla,
    AgregarProductos,
    EditarProd,

  },
  computed: {
    ...mapState("Data", ["add", "edit"]),
  },
  methods: {
    ...mapMutations("Data", ["MostrarAdd"]),
    showAdd() {
      this.MostrarAdd();
    },
  },
};
</script>
<style lang="stylus"></style>
