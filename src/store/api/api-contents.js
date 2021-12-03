// const axios = require('axios');


export default {
  namespaced: false,
  
  state: () => ({
    CS_IP: process.env.NODE_ENV === 'production' ? "http://52.78.122.124:4433/app" : "http://localhost:4433/app"
  }),

  getters: {
  },

  mutations: {
  },

  actions: {
    async fetchImage({ state, rootGetters }, payload) {
      try {
        const { element, url, ext, suffix } = payload;
        const requestURI = state.CS_IP + url;
        const headers = {
          cli_ip: rootGetters['api/getCliIP'], cli_vendor_token: rootGetters['api/getContentsToken'],
          ext, suffix
        };
        const what = fetch(requestURI, { headers })
          .then(res => res.blob())
          .then(blob => {
            element.src = URL.createObjectURL(blob);
            return true
          })
        .catch(err => {
          console.error('!error!', err);
          return false
        });
        return what
      }
      catch (err) {
        console.error('!error!', err);
        return false
      }
    }
  }
}