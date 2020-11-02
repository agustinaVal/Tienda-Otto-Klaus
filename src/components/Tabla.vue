<template>
  <v-simple-table>
    <template v-slot:default >
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Código</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Precio</th>
          <th class="text-left">Id</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in Productos"
          :key="item.nombre"
          @click="editarJuguete(item.id)"
        >
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <td v-bind="attrs" v-on="on">{{ item.nombre }}</td>
            </template>
            <span>Pincha para editar / borrar</span>
          </v-tooltip>
          <td>{{ item.codigo }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>
          <td>{{ item.id }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Tabla",

  computed: {
    ...mapState("Data", ["Productos"]),
  },
  methods: {
    ...mapMutations("Data", ["showEditProducto"]),
    editarJuguete(juguete) {
      this.showEditProducto(juguete);
    },
  },
};
</script>
