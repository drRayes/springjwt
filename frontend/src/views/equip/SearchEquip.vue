<template>
  <div>
    <div class="tab">
          <button @click="tab = 1">Search by name</button>
          <button @click="tab = 2">Search by serial number</button>
    </div>
    <div class="tabcontent" v-if="tab === 1">
      <input v-model="name"/>
      <button @click="searchByName">Search by name</button>
    </div>
    <div class="tabcontent" v-if="tab === 2">
      <input v-model="name"/>
      <button @click="searchBySerialNumber">Search by serial number</button>
    </div>
    <table class="tabcontent">
      <tr>
        <th>Name</th>
        <th>Serial number</th>
        <th>Location</th>
      </tr>
      <tr v-for="(equip, index) in getEquipList" :id="index" @click="selectCurrentEquip">
        <td>{{equip.name}}</td>
        <td>{{equip.serialNumber}}</td>
        <td>{{equip.location.name}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex";
import Modal from "./Modal"
import axios from "axios"

  export default {
    components: {Modal},
    name: 'SearchEquip',
    data() {
      return {
        tab:1,
        name:""
      }
    },
    computed: mapGetters(['getEquipList', 'getVisibility']),
    methods: {
      searchByName() {
        this.$store.dispatch("fetchEquipByName", this.name);
      },
      searchBySerialNumber() {
        this.$store.dispatch("fetchEquipBySerialNumber", this.name);
      },
      selectCurrentEquip(event) {
        this.$store.dispatch("setEquip", this.getEquipList[event.currentTarget.id]);
        this.$store.dispatch("setVisibility", this.getVisibility);
        axios.get("/api/equip/toConsole/" + this.getVisibility);
      }
    },
  }
</script>
<style>
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

/* Style for rows content */
tr {
  border: 4px solid #ccc;
}

tr:hover {
  background-color: #aaf
}

td,th {
  border: 2px solid #ccc;
  float: center;
  text-align: center;
  padding: 5px;
}

td:hover {
  transition-duration: .3s;
  font-weight: bold;
  transform: scale(1.01);
}

table {
  margin: 20px;
}
</style>
