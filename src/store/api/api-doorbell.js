const publicIp = require('public-ip');
const axios = require('axios');
import { logg } from '@/functions/logger';


export default {
  namespaced: false,
  
  state: () => ({
    cli_ip: "",
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
      try {
        // make ipv4 string
        await publicIp.v4()
          .then(value => {
            commit('setCliInfo', { ipv4: value });
          })
          .catch(err => {
            console.error('!error!', `@ipv4 @openTheDoor`, err);
            commit('setCliInfo', { ipv4: '0.0.0.0' });
          });
        
        // request contents-token
        axios({
          method: 'post',
          url: '/visitor/api/doorknob',
          data: { ipv4: state.cli_ip },
          timeout: 1800,
        })
          .then((response) => {
            const { data } = response;
            commit('saveServerMsg', { message: data.greeting });
            logg(state.server_message);
            commit('saveContentsToken', { token: data.contentsToken });
          })
          .catch((error) => {
            console.error('!error!', `@openTheDoor`);
            console.error(error);
            commit('saveContentsToken', { token: 'eyJhbGciOiJIUzI1NiJ9.Y2xpLWRldg.HBpcSKAAF91InMRSb9_DdQQYR83vxyX2eLh9rV4G3MQ' });
          });
      }
      catch (err) {
        console.error('!error!', `@openTheDoor`);
        console.error(err);
      }
    }
  }
}