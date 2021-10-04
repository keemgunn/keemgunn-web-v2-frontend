const publicIp = require('public-ip');

export default {
  namespaced: false,
  
  state: () => ({
    cli_ip: '0.0.0.0'

  }),

  getters: {

    
  },

  mutations: {
    setCliInfo(state, payload) {
      state.cli_ip = payload.ipv4
    }

  },

  actions: {
    async pushCliInfo({ commit }) {
      const ipv4 = await publicIp.v4();
      commit('setCliInfo', { ipv4 });
    }

  }
}