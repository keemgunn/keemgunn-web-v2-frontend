import { createLogger, createStore } from 'vuex';
import ui from '@/store/ui/ui-main';
import api from '@/store/api/api-main';

export default createStore({
  state: {
    vendorURL: process.env.NODE_ENV === 'production' ? "http://13.76.155.192/" : "http://localhost:4433/"
  },
  getters: {
    getVendorURL: (state) => (url) => {
      return state.vendorURL + url
    }
  },
  modules: {
    ui,
    api
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})