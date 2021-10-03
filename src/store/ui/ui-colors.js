import colors from '@/assets/styles/colors.json';

// Dark Mode Detection ------------------------
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
let startMode = matched;


export default {
  namespaced: false,
  
  state: () => ({
    darkmode: startMode,
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