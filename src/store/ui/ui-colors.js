import colors from '@/assets/styles/colors.json';

// Dark Mode Detection ------------------------
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
let startMode = matched;
console.log("ui-colors");

export default {
  namespaced: false,
  
  state: () => ({
    darkmode: startMode,
    colorSource: colors,
    themeColor: '#000000'
  }),

  getters: {
    isDarkmodeOn(state) {
      return state.darkmode
    },
    getColors(state) {
      return state.darkmode ? state.colorSource.dark : state.colorSource.light
    },
    getThemeColor(state) {
      return state[state.darkmode ? 'dark' : 'light']['--i94']
    }
  },

  mutations: {
    toggleDarkmode(state) {
      state.darkmode = !state.darkmode
    }
  },

}