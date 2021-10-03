// Color Palette ------------------------------
import colors from '@/assets/styles/colors.json';


// UI functions -------------------------------
function setBodyStyle(document, backgroundColor) {
  document.body.style = `background-color: ${backgroundColor}; padding: 0px; margin: 0px; margin-top: 0px; height: 100vh; width: 100vw;`
}


// Dark Mode Detection ------------------------
let startMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
let startThemeColor = startMode ? colors.dark['--i94'] : colors.light['--i94']
setBodyStyle(document, startThemeColor)


export default {
  namespaced: false,
  
  state: () => ({
    darkmode: startMode, 
    light: colors.light,
    dark: colors.dark,
    themeColor: startThemeColor,
  }),

  getters: {
    isDarkmodeOn(state) {
      return state.darkmode
    },
    getColors(state) {
      return state.darkmode ? state.dark : state.light
    },
    getThemeColor(state) {
      return state.themeColor
    }
  },

  mutations: {
    toggleDarkmode(state) {
      state.darkmode = !state.darkmode
      state.themeColor = state.darkmode ? state.dark['--i94'] : state.light['--i94']
      setBodyStyle(document, state.themeColor)
    }
  },

}