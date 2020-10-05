import axios from "axios";
const API_URL = "/api/equip";
export const locations ={
  state: {
    locations: []
  },
  getters: {
    getLocations(state) {
      return state.locations
    }
  },
  actions: {
    fetchLocations(ctx) {
      axios
        .get(API_URL + "/loadLocations")
        .then(response => {
          ctx.commit('updateLocations', response.data)
        })
    }
  },
  mutations: {
    updateLocations(state, locations) {
      state.locations = locations
    }
  }
}
