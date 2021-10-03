export default {
  namespaced: true,
  
  state: () => ({
    vw: null,
    vh: null,
    scale: null
  }),

  getters: {
    viewRatio(state) {
      return state.vw / state.vh
    }
  },

  mutations: {
    // resize(state, payload) {
    //   state.vw = payload.width;
    //   state.vh = payload.height;
    //   console.log("resize!!!");
    // },
    hello(state) {
      console.log(state.scale);
      console.log("hello");
    }
  },

  actions: {
    doHello({ commit }) {
      commit('hello');
    }
  }
}