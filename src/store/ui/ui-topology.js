import { logger } from "@/functions/logger";
import { navigations } from "@/routeControl";

logger('== Navigations', navigations);

export default {
  namespaced: false,

  state: () => ({
    navigations
  }),

  getters: {
    getNavMenuArr(state) {
      return state.navigations
    }
  },

  mutations: {

  },

  actions: {

  }
}