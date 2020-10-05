<template>
  <div>
    <h2 v-model='status'>{{status}}</h2>
    <div class="input-field">
      <p>Name</p>
      <input v-model='currentEquip.name'></input>
    </div>
    <div class="input-field">
      <p>Serial number</p>
      <input v-model='currentEquip.serialNumber'>
    </div>
    <div class="input-field">
      <p>Location</p>
      <select v-model='currentEquip.location'>
        <option v-for='location in getLocations' v-bind:value='location'>{{location.name}}</option>
      </select>
    </div>
    <div class="input-field">
      <p>Minimal count</p>
      <input type='number' v-model='currentEquip.minimalCount'/>
    </div>
    <button class="create-equip" @click="createEquip">Create equip</button>

  </div>
</template>
<script>
import axios from 'axios';
import {mapGetters} from "vuex";


export default {
  name: 'CreateEquip',
  data() {
    return {
      currentEquip: {
        name: '',
        serialNumber:'',
        location: {},
        minimalCount:''
      },
      status: ' '
    }
  },
  computed: mapGetters(['getLocations']),
  methods: {
    createEquip() {
      axios
        .post('/api/equip/createEquip', this.currentEquip)
        .then(response => {
          this.status = 'Equip ' + response.data.name + ' was created successfully';
        });
    }
  }
}
</script>
<style>
p {
  margin-top: 1%;
}
button {
  margin-top: 1%
}
</style>
