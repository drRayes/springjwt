export const visibility ={
  state: {
    visibility: true
  },
  getters: {
    getVisibility(state) {
      return state.visibility
    }
  },
  actions: {
    setVisibility(ctx, visibility) {
      ctx.commit("setVisibility", visibility)
    }
  },
  mutations: {
    setVisibility(state, visibility) {
      state.visibility = !visibility
    }
  }

}
