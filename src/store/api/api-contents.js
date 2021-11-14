// const publicIp = require('public-ip');
// const axios = require('axios');
import apiConfigs from '@/store/api/configs.json';
const contentsProvider_ip = apiConfigs['destinations']['contents-server'] === "dev" ? "http://localhost:4433" : "http://13.76.155.192";

export default {
  namespaced: false,
  
  state: () => ({
    cp_ip: contentsProvider_ip,
  }),

  getters: {
    getContentsURL: (state) => (payload) => {
      return state.cp_ip + payload.src + '.' + payload.src
    }
  },

  mutations: {
  },

  actions: {
  }
}