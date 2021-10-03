import colors from '@/assets/styles/colors.json';

export default {
  namespaced: false,
  
  state: () => ({
    darkmode: false,
    colorSource: colors
  }),

  getters: {
    isDarkmodeOn(state) {
      return state.darkmode
    },
    getColors(state) {
      return state.darkmode ? state.colorSource.dark : state.colorSource.light
    }
  },

  mutations: {
    toggleDarkmode(state) {
      state.darkmode = !state.darkmode
    }
  },

}