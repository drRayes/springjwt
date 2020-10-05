import axios from 'axios';
const API_URL = '/api/equip';
export const equipList = {
  state: {
    equipList: [],
  },
  getters: {
    getEquipList(state) {
      return state.equipList
    }
  },
  actions: {
    async fetchEquipByName(ctx, name) {
      ctx.commit('updateEquipList', []);
      axios
                .get(API_URL + "/searchByName/" + name)
                .then(response => {
                  ctx.commit('updateEquipList', response.data);
                });
    },
    async fetchEquipBySerialNumber(ctx, serialNumber) {
      ctx.commit('updateEquipList', []);
      axios
                .get(API_URL + "/searchBySerialNumber/" + serialNumber)
                .then(response => {
                  ctx.commit('updateEquipList', response.data);
                });
    },
    clearEquipList(ctx) {
      ctx.commit('updateEquipList', []);
    }
  },
  mutations: {
    updateEquipList(state, equipList) {
      state.equipList = equipList;
    }
  }
}
