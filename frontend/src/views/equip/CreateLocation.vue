<template>
  <div>
    <h2 v-model='status'>{{status}}</h2>
        <p>Name</p>
        <input v-model="name"></input>
        <button @click='createLocation'>Create location</button>
  </div>
</template>
<script>
import axios from 'axios';


//const API_URL = 'http://localhost:8088/api/equip';

export default {
  name: 'CreateLocation',
  data() {
    return{
      name: '',
      status: 'Status of operation'
    };
  },
  methods: {
    createLocation() {
      return axios
        .post("/api/equip/createLocation", {name: this.name})
        .then(response => {
          if(response.data.name === this.name) {
            this.status = 'Location ' + response.data.name + ' was created successfully!';
          }
        });
    }
  }
}
</script>
