export const equip ={
  state: {
    equip: {
      name:'',
      serialNumber:'',
      location: {name:''}
    }
  },
  getters: {
    getCurrentEquip(state) {
      return state.equip
    }
  },
  actions: {
    setEquip(ctx, equip) {
      ctx.commit("setEquip", equip);
    }
  },
  mutations: {
    setEquip(state, equip) {
      state.equip = equip
    }
  }
}
