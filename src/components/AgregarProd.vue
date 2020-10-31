<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="juguete.nombre"
            label="Producto"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="juguete.codigo" label="Codigo"></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="juguete.stock" label="Stock"></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="juguete.precio" label="Precio"></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-btn
            @click="
              Agregar();
              limpiarData();
            "
            depressed
          >
            Agregar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AgregarProductos",
  data: () => ({
    juguete: {
      nombre: "",
      codigo: "",
      stock: "",
      precio: "",
    },
  }),
  methods: {
    ...mapActions("Data", ["addData"]),
    Agregar() {
      this.addData(this.juguete);
    },
    limpiarData() {
        (this.juguete.nombre = ""),
        (this.juguete.codigo = ""),
        (this.juguete.stock = ""),
        (this.juguete.precio = "");
    },
  },
};
</script>
