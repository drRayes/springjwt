export const user ={
  state: {
    user: {
      name:'',
      roles:[]
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  actions: {
    setUser(ctx, user) {
      ctx.commit("setUser", user);
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  }
}
