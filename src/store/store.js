import { createLogger, createStore } from 'vuex';
import ui from '@/store/ui/ui-main';
import api from '@/store/api/api-main';

const ENV = process.env.NODE_ENV;
const debug = ENV !== 'production';

export default createStore({
  state: {
    ENV,
    vendorURL: ENV === 'production' ? "http://13.76.155.192/" : "http://localhost:4433/"
  },
  getters: {
    getENV(state) {
      return state.ENV
    },
    getVendorURL: (state) => (url) => {
      return state.vendorURL + url
    }
  },
  modules: {
    ui,
    api
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})