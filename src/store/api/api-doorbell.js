const publicIp = require('public-ip');
const axios = require('axios');

export default {
  namespaced: false,
  
  state: () => ({
    cli_ip: '0.0.0.0',
    server_message: ""

  }),

  getters: {

    
  },

  mutations: {
    setCliInfo(state, payload) {
      state.cli_ip = payload.ipv4;
    },
    saveServerMsg(state, payload) {
      state.server_message = payload.message;
    }

  },

  actions: {
    async openTheDoor({ state, commit }) {
      const ipv4 = await publicIp.v4();
      commit('setCliInfo', { ipv4 });
      const { data } = await axios.post('/visitor/api/doorknob', { ipv4 });
      commit('saveServerMsg', { message: data.greeting });
      console.log(state.server_message);
    }

  }
}