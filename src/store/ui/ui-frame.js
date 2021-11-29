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

export default {
  namespaced: false,
  state: () => ({
    vw: null,
    vh: null,
    scale: null,
    navWidthScale: null,
    mainEl: {}
  }),

  getters: {
    getFrameSize(state) {
      return {width: state.vw, height: state.vh}
    },

    getScale(state) {
      return state.scale
    },

    getContentsSuffix(state) {
      if (state.scale === 'XXS') {
        return '@1x'
      } else if (state.scale === 'XS' || state.scale === 'S') {
        return '@2x'
      } else if (state.scale === 'M' || state.scale === 'L') {
        return '@4x'
      } else {
        return '@6x'
      }
    },

    getRatio(state) {
      return state.vw / state.vh
    },

    getNavWidthScale(state) {
      return state.navWidthScale
    },

    getStageArea(state) {
      return {
        top: state.vh * 0.1,
        bottom: state.vh * 0.87,
        left: state.vw * 0.1,
        right: state.vw * 0.9
      }
    },

    getMainEl(state) {
      return state.mainEl
    }
  },

  mutations: {
    resize(state, payload) {
      state.vw = payload.width;
      state.vh = payload.height;
      state.scale = setScale(payload.width);
      state.navWidthScale = setNavWidthScale(payload.width);
    },

    loadMainTag(state, mainId) {
      state.mainEl = document.getElementById(mainId);
      console.log(state.mainEl);
    }
  },

  actions: {
    doHello({ commit }) {
      commit('hello');
    }
  }
}