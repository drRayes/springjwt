export const equipWaybill = {
  state: {
    equipWaybill: {
      equip: {},
      quantity: 0,
      sourceLocation: {name: ""},
      destination: {name: ""},
      comment: "comment"
    }
  },
  getters: {
    getEquipWaybill(state) {
      return state.equipWaybill
    }
  },
  actions: {
    setEquipWaybill(ctx, equipWaybill) {
      ctx.commit("setEquipWaybill", equipWaybill);
    }
  },
  mutations: {
    setEquipWaybill(state, equipWaybill) {
      equipWaybill.sourceLocation = equipWaybill.equip.location;
      state.equipWaybill= equipWaybill;
    }
  }
}
