import { navigations } from "@/config/routeControl";
if (process.env.NODE_ENV === 'development') {
  console.log('== Navigations =================');
  console.log(navigations);
}

export default {
  namespaced: false,

  state: () => ({
    navigation: {
      menuShown: navigations
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