function setScale(width) {
  return (width > 2400) ? "XXL" :
  (width > 1920) ? "XL" :
  (width > 1320) ? "L" :
  (width > 960) ? "M" :
  (width > 680) ? "S" :
  (width > 320) ? "XS" : "XXS"
}

function setNavWidthScale(width) {
  return (width > 780) ? "wide" : "short"
}

function setHTMLClass(document, classes) {
  document.documentElement.className = classes;
}


export default {
  namespaced: false,
  
  state: () => ({
    vw: null,
    vh: null,
    scale: null,
    navWidthScale: null,
    navMenuToggle: false
  }),

  getters: {
    getFrameSize(state) {
      return {width: state.vw, height: state.vh}
    },
    getScale(state) {
      return state.scale
    },
    getRatio(state) {
      return state.vw / state.vh
    },
    getNavWidthScale(state) {
      return state.navWidthScale
    },
    isNavMenuToggle(state) {
      return state.navMenuToggle
    }
  },

  mutations: {
    resize(state, payload) {
      state.vw = payload.width;
      state.vh = payload.height;
      state.scale = setScale(payload.width);
      state.navWidthScale = setNavWidthScale(payload.width);
    },
    setNavMenuToggle(state, bool) {
      state.navMenuToggle = (bool === 'switch' ? !state.navMenuToggle : bool);
      setHTMLClass(document,
        state.navMenuToggle ? 'no-scroll no-scroll-lang'
          : ''
      )
    }
  },

  actions: {
    doHello({ commit }) {
      commit('hello');
    }
  }
}