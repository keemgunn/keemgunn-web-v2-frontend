function setScale(width) {
  return (width > 2400) ? "XXL" :
  (width > 1920) ? "XL" :
  (width > 1320) ? "L" :
  (width > 960) ? "M" :
  (width > 680) ? "S" :
  (width > 320) ? "XS" : "XXS"
}

export default {
  namespaced: false,
  
  state: () => ({
    vw: null,
    vh: null,
    scale: null
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
  },

  mutations: {
    resize(state, payload) {
      state.vw = payload.width;
      state.vh = payload.height;
      state.scale = setScale(payload.width);
    },
  },

  actions: {
    doHello({ commit }) {
      commit('hello');
    }
  }
}