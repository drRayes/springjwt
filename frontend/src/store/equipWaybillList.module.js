export const equipWaybillList = {
  state: {
    equipWaybillList: []
  },
  getters: {
    getEquipWaybillList(state) {
      return state.equipWaybillList
    }
  },
  actions: {
    setEquipWaybillList(ctx, equipWaybillList) {
      ctx.commit("setEquipWaybillList", equipWaybillList);
    },
    addWaybill(ctx, wayBill) {
      ctx.commit("addWaybill", wayBill);
    }
  },
  mutations: {
    setEquipWaybillList(state, equipWaybillList) {
      state.equipWaybillList= equipWaybillList;
    },
    addWaybill(state, wayBill) {
      state.equipWaybillList.push(wayBill);
    }
  }
}
