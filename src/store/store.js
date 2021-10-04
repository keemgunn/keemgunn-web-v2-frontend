import { createLogger, createStore } from 'vuex';
import ui from '@/store/ui/ui-main';
import api from '@/store/api/api-main';

const ENV = process.env.NODE_ENV;
const debug = ENV !== 'production';

export default createStore({
  state: {
    ENV
  },
  getters: {
    getENV(state) {
      return state.ENV
    }
  },
  modules: {
    ui,
    api
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})