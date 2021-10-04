// Color Palette ------------------------------


export default {
  namespaced: false,
  
  state: () => ({
    language: 'none'
  }),

  getters: {
    whatLanguage(state) {
      return state.language
    }
  },

  mutations: {
    setLanguage(state, param) {
      state.language = param;
    }
  },

}