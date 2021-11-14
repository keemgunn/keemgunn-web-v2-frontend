const publicIp = require('public-ip');
const axios = require('axios');
// import apiConfigs from '@/store/api/configs.json';
// const cliDestination = apiConfigs['destinations']['cli-server'];


export default {
  namespaced: false,
  
  state: () => ({
    cli_ip: '0.0.0.0',
    server_message: "",
    contentsToken: "",
  }),

  getters: {
    getCliIP(state) {
      return state.cli_ip
    },
    getContentsToken(state) {
      return state.contentsToken
    }
  },

  mutations: {
    setCliInfo(state, payload) {
      state.cli_ip = payload.ipv4;
    },
    saveServerMsg(state, payload) {
      state.server_message = payload.message;
    },
    saveContentsToken(state, payload) {
      state.contentsToken = payload.token;
    }

  },

  actions: {
    async openTheDoor({ state, commit }) {
      let ipv4 = await publicIp.v4();
      if (ipv4) {
        commit('setCliInfo', { ipv4 });
        this.cli_ip = ipv4;
      } else {
        ipv4 = '0.0.0.0'
        console.log('error on ipv4');
      }

      axios({
        method: 'post',
        url: '/visitor/api/doorknob',
        data: { ipv4 },
        timeout: 2000,
      })
      .then((response) => {
        const data = response.data;
        commit('saveServerMsg', { message: data.greeting });
        console.log(state.server_message);
        commit('saveContentsToken', { token: data.contentsToken });
      })
      .catch((error) => {
        console.log(error);
        commit('saveContentsToken', { token: 'eyJhbGciOiJIUzI1NiJ9.Y2xpLWRldg.HBpcSKAAF91InMRSb9_DdQQYR83vxyX2eLh9rV4G3MQ' });
      })
    }
  }
}