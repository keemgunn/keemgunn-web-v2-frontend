export default {
  namespaced: false,

  state: () => ({
    navigation: {
      menuShown: [
        'works',
        'blog',
        'lab',
        'about',
        'idas'
      ]
    }

  }),

  getters: {
    getNavMenuArr(state) {
      let list = [];
      for (let i of state.navigation.menuShown) {
        if (i) {
          list.push(i);
        }
      }
      return list
    }
  },

  mutations: {

  },

  actions: {

  }
}