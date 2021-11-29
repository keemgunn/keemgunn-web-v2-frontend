export default {
  namespaced: false,
  state: () => ({
    idas: {
      initQueue: {},
    },
  }),

  getters: {
    getInitState: (state) => (pageName) => {
      try {
        const initQueue = Object.values(state[pageName]['initQueue']);
        let queueCount = initQueue.length;
        let done = initQueue.filter(bool => bool).length;
        return (done / queueCount)
      }
      catch (err) {
        console.error(`!error! @moderator/getInitState, pageName: ${pageName}`);
        return 1
      }
    },

  },

  mutations: {
    resize(state, payload) {
      state.vw = payload.width;
      state.vh = payload.height;
    },

    addToInitQueue(state, payload) {
      try {
        const { pageName, taskSerial } = payload;
        state[pageName]['initQueue'][taskSerial] = false;

      }
      catch (err) {
        console.error(`!error! @moderator/addToInitQueue, payload: ${payload}`);
      }
    },

    commitInitQueue(state, payload) {
      try {
        const { pageName, taskSerial } = payload;
        state[pageName]['initQueue'][taskSerial] = true;
      }
      catch (err) {
        console.error(`!error! @moderator/commitInitQueue, payload: ${payload}`);
      }
    }



  },

  actions: {
    doHello({ commit }) {
      commit('hello');
    }
  }
}