<template>
  <v-form>
    <v-container>
    <h1>Editar productos</h1>
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
            Cambiar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
    name: "EditarProd"

}
</script>

<style>

</style>