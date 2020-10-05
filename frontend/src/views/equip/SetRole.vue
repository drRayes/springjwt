<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Role</th>
    </tr>
    <tr v-for="(user, index) in getUsers">
      <td>{{user.username}}</td>
      <td><a v-for="(role, index) in user.roles">{{role.name}}<br></a></td>
      <td><button :id="index" @click="addRole">Add role</button></td>
    </tr>
  </table>
</template>
<script>
import { mapGetters} from "vuex";
import axios from "axios";
export default {
  name: "SetRole",
  data() {
    return {}
  },
  computed: mapGetters(["getUsers", "getUser"]),
  methods: {
    addRole(event) {
      axios
        .post("/api/user/addRole", this.getUsers[event.currentTarget.id]  )
        .then(response => {
            this.$store.dispatch("loadUsers")
          });
    }
  },
  mounted() {
    if(this.getUsers.length === 0) {
      this.$store.dispatch("loadUsers")
    }
  }
}
</script>
