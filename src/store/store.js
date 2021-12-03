import { createLogger, createStore } from 'vuex';
import ui from '@/store/ui/ui-main';
import api from '@/store/api/api-main';
import moderator from '@/store/moderator/moderator-main';

export default createStore({
  state: {
  },
  getters: {
  },
  modules: {
    ui,
    api,
    moderator
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})