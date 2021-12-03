// const axios = require('axios');


export default {
  namespaced: false,
  
  state: () => ({
    CS_IP: process.env.NODE_ENV === 'production' ? "https://52.78.122.124:4433/app" : "http://localhost:4433/app"
  }),

  getters: {
  },

  mutations: {
  },

  actions: {
    async fetchImage({ state, rootGetters }, payload) {
      try {
        const { element, url, ext, suffix } = payload;
        let requestURI = state.CS_IP + url;

        // const headers = {
        //   cli_ip: rootGetters['api/getCliIP'], cli_vendor_token: rootGetters['api/getContentsToken'],
        //   ext, suffix
        // };

        // const what = fetch(requestURI, { headers })
        //   .then(res => res.blob())
        //   .then(blob => {
        //     element.src = URL.createObjectURL(blob);
        //     return true
        //   })
        // .catch(err => {
        //   console.error('!error!', err);
        //   return false
        // });
        // return what
        

        // --- revision ---
        requestURI = rootGetters['api/getCliIP'];
        requestURI = url + suffix + '.' + ext;
        const assetPath = require('@/assets/img/idas/' + requestURI);
        element.src = assetPath;

        return true
      }
      catch (err) {
        console.error('!error!', err);
        return false
      }
    }
  }
}