<template>
  <div>
    <SearchEquip/>
    <div>
      <div>
        <input v-model='getCurrentEquip.name'></input>
        <input v-model='getCurrentEquip.serialNumber'></input>
        <select v-model='getCurrentEquip.location'>
          <option v-for='(location, index) in getLocations' :value="location" :id="index" @click="setLocation">
            {{location.name}}
          </option>
        </select>
        <input type='number' v-model='getCurrentEquip.minimalCount'/>
        <button @click="updateEquip">Update equip</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import SearchEquip from "./SearchEquip"
import { mapGetters } from "vuex"

  export default {
    components: {SearchEquip},
    name: 'UpdateEquip',
    data() {
      return {
      }
    },
    methods: {
      setLocation(event) {
        this.$store.dispatch("setEquip", this.getCurrentEquip);
      },
      updateEquip() {
        axios
          .post("/api/equip/updateEquip/", this.getCurrentEquip)
          .then(response => {
            this.getCurrentEquip = response.data;
          });
      }
    },
    computed: {
      ...mapGetters(['getCurrentEquip', 'getLocations'])
    }
  }

</script>
<style>


</style>
