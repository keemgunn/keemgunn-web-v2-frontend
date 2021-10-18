// Dark Mode Detection ------------------------
const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

export default {
  namespaced: false,
  state: () => ({
    darkmode: darkMode, 
  }),

  getters: {
    isDarkmodeOn(state) {
      return state.darkmode
    },
  },

  mutations: {
    toggleDarkmode(state) {
      state.darkmode = !state.darkmode
      console.log('darkmode:', state.darkmode);
    }
  },

}