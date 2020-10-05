<template>
  <div>
      <div class="tab">
        <button @click="tab = 1">Create equip</button>
        <button @click="tab = 2">Search equip</button>
        <button @click="tab = 3">Update equip</button>
      </div>
      <div class="tabcontent" v-if="tab === 1"><CreateEquip/></div>
      <div class="tabcontent" v-if="tab === 2"><SearchEquip/></div>
      <div class="tabcontent" v-if="tab === 3"><UpdateEquip/></div>
  </div>
</template>
<script>
import SearchEquip from '../views/equip/SearchEquip';
import CreateEquip from '../views/equip/CreateEquip';
import UpdateEquip from '../views/equip/UpdateEquip';
export default {
  name: 'Engineer',
  components:{SearchEquip, CreateEquip, UpdateEquip},
  data() {
    return {
      tab: 1
    }
  }
}
</script>
<style>
</style>
