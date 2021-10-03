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
    getRatio(state) {
      return state.vw / state.vh
    },
  },

  mutations: {
    resize(state, payload) {
      state.vw = payload.width;
      state.vh = payload.height;
    },
  },

  actions: {
    doHello({ commit }) {
      commit('hello');
    }
  }
}