import { createLogger, createStore } from 'vuex';
import ui from '@/store/ui/ui-main'

export default createStore({
  plugins: [createLogger()],
  modules: {
    ui
  }
})