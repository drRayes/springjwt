import axios from "axios";
export const users ={
  state: {
    users: []
  },
  getters: {
    getUsers(state) {
      return state.users
    }
  },
  actions: {
    loadUsers(ctx) {
      axios
        .get("/api/user/loadUsers")
        .then(response => {
          ctx.commit("setUsers", response.data)
        })
    },
    setUsers(ctx, users) {
      ctx.commit("setUsers", users);
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  }
}
