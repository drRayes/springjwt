<template>
      <div class="modal" >
        <div>
          <div >Direction</div>
          <p>Get a direction with your favourite apps</p>
          <input v-model='getCurrentEquip.name'></input>
                  <input v-model='getCurrentEquip.serialNumber'></input>
                  <select v-model='getCurrentEquip.location'>
                    <option v-for='(location, index) in getLocations' :value="location" :id="index">
                      {{location.name}}
                    </option>
                  </select>
          <button @click="close">Close</button>
        </div>
      </div>
    </template>

    <script>
      import {mapGetters} from "vuex"
        export default {
            name: 'Modal',
            computed: {
                  ...mapGetters(['getCurrentEquip', 'getLocations', 'getVisibility'])
            },
            methods: {
              close() {
                this.$store.dispatch("setVisibility", true);
              }
            }
        };
    </script>


    <style>
        .modal {
          background-color: rgba(0, 0, 0, 0.7);
      }
    </style>
