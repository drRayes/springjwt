<template>
  <div>
    <div class="tab">
      <button @click="tab = 1">Create equip</button>
      <button @click="tab = 2">Create location</button>
      <button @click="tab = 3">Search equip</button>
      <button @click="tab = 4">Update equip</button>
      <button @click="tab = 5">Set role</button>
      <button @click="tab = 6">Move equip</button>
      <button @click="tab = 7">Minimal count</button>
    </div>
    <div class="tabcontent" v-if="tab === 1"><CreateEquip/></div>
    <div class="tabcontent" v-if="tab === 2"><CreateLocation/></div>
    <div class="tabcontent" v-if="tab === 3"><SearchEquip/></div>
    <div class="tabcontent" v-if="tab === 4"><UpdateEquip/></div>
    <div class="tabcontent" v-if="tab === 5"><SetRole/></div>
    <div class="tabcontent" v-if="tab === 6"><MoveEquip/></div>
    <div class="tabcontent" v-if="tab === 7"><MinimalCount/></div>
  </div>
</template>
<script>
import CreateEquip from '../views/equip/CreateEquip';
import CreateLocation from '../views/equip/CreateLocation';
import SearchEquip from '../views/equip/SearchEquip';
import UpdateEquip from '../views/equip/UpdateEquip';
import SetRole from '../views/equip/SetRole';
import MoveEquip from '../views/equip/MoveEquip'
import MinimalCount from '../views/equip/MinimalCount'


export default {
  name: 'BoardAdmin',
  components: {CreateLocation, CreateEquip, SearchEquip, UpdateEquip, SetRole, MoveEquip, MinimalCount},
  data() {
    return {
      tab: 1
    }
  },
  mounted: function() {
    this.$store.dispatch("fetchLocations");
  }
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
</style>
