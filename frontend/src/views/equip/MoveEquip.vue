<template>
  <div>
    <SearchEquip/>
    <div v-cloak>
      Wrong sum!
    </div>
    <div v-if="getCurrentEquip.name != ''">
      <p>{{getCurrentEquip.name}}</p>
      <input v-model="getEquipWaybill.quantity">
      <select v-model='getEquipWaybill.sourceLocation'>
        <option v-for='quantity in getCurrentEquip.quantity' v-bind:value='quantity.location' v-if="quantity.sum > 0">
          {{quantity.location.name + " ----- " + quantity.sum + " pcs"}}
        </option>
      </select>
      <select v-model='getEquipWaybill.destination'>
        <option v-for='destination in getLocations' v-bind:value='destination'>{{destination.name}}</option>
      </select>
      <input v-model="getEquipWaybill.comment"/>
      <button @click="addWaybill">Add waybill</button>
    </div>
    <table v-if="visible">
      <tr>
        <th>Equip name</th>
        <th>Quantity</th>
        <th>Source location</th>
        <th>Destination</th>
        <th>Comment</th>
      </tr>
      <tr>
        <td>{{getEquipWaybill.equip.name}}</td>
        <td>{{getEquipWaybill.quantity}}</td>
        <td @click="changeToNull">{{getEquipWaybill.sourceLocation.name}}</td>
        <td>{{getEquipWaybill.destination.name}}</td>
        <td>{{getEquipWaybill.comment}}</td>
      </tr>
      <tr><td><button @click="confirmWaybill">Confirm waybill</button></td></tr>
    </table>
  </div>
</template>
<script>
import SearchEquip from "./SearchEquip";
import { mapGetters } from "vuex";
import axios from "axios";
  export default {
    name: "MoveEquip",
    components: {SearchEquip},
    computed: mapGetters(["getEquipWaybill", "getLocations", "getEquipWaybillList", "getCurrentEquip"]),
    data() {
      return {
        visible: false
      }
    },
    methods: {
      addWaybill() {
        this.getEquipWaybill.equip = this.getCurrentEquip;
        this.$store.dispatch("setEquipWaybill", this.getEquipWaybill);
        this.visible = true;
      },
      selectCurrentWaybill(event) {
        this.$store.dispatch("setEquipWaybill", this.getEquipWaybillList[event.currentTarget.id]);
      },
      confirmWaybill() {
        //this.$store.dispatch("setEquipWaybillList", this.getEquipWaybillList);
        axios.post("/api/equip/confirmWaybill", this.getEquipWaybill)
          .then(response => {
            this.$store.dispatch("setEquip", response.data);
          });
        this.visible = false;
      },
      changeToNull(){
        this.getEquipWaybill.sourceLocation = {
          id:'',
          name: ''
        }
      }

    }
  }
</script>
<style>
[v-cloak] {
  display: none
  }
</style>
