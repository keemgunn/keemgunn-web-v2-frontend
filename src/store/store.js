import { createLogger, createStore } from 'vuex';
import ui from '@/store/ui/ui-main'

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    ui
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})