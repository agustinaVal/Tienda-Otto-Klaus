<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
        <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Código
          </th>
          
           <th class="text-left">
            Stock
          </th>
           <th class="text-left">
            Precio
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in Productos"
          :key="item.nombre"
        >
          <td>{{ item.nombre }}</td>
          <td>{{ item.codigo }}</td>
           <td>{{ item.stock }}</td>
            <td>{{ item.precio }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapState } from "vuex"

  export default {
      name: "Tabla",
    
    computed:{
      ...mapState( "Data" , ["Productos"])
    }
  }
</script>

