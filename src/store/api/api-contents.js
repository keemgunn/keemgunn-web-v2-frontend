// const axios = require('axios');


export default {
  namespaced: false,
  
  state: () => ({
    CS_IP: process.env.NODE_ENV === 'production' ? "http://13.76.155.192/app" : "http://localhost:4433/app"
  }),

  getters: {
    getContentsURL: (state) => (payload) => {
      return state.CS_IP + payload.src + '.' + payload.type
    }
  },

  mutations: {
    nextCSentry(state) {
      state.CS_entry_index += 1;
    },
    setContentsServerIP(state, payload) {
      state.CS_IP = payload.url;
    }
  },

  actions: {
  }
}