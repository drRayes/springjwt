<template>
  <div>
    <div>
      <button @click="getMinimalCountList">Get list</button>
      <select v-model='destination'>
        <option v-for='destination in getLocations' v-bind:value='destination'>{{destination.name}}</option>
      </select>
    </div>
    <table v-if="this.minimalCountList.length >= 1">
      <tr>
        <th>Equip</th>
        <th>Quantity</th>
        <th>Minimal quantity</th>
      </tr>
      <tr v-for="(quantity, index) in minimalCountList" v-bind="quantity">
        <td>{{quantity.equip.name}}</td>
        <td>{{quantity.sum}}</td>
        <td>{{quantity.equip.minimalCount}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import axios from "axios"

  export default {
  name: 'MinimalCount',
  data() {
    return {
      minimalCountList: [],
      destination:{}
    }
  },
  computed: mapGetters(["getLocations"]),
  methods: {
    getMinimalCountList() {
      axios
        .post("/api/equip/getMinimalCountList", this.destination)
        .then(response => {
          this.minimalCountList = response.data;
        });
    }
  }
  }
</script>
