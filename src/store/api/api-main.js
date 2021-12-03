import doorbell from '@/store/api/api-doorbell';
import contents from '@/store/api/api-contents';

export default {
  namespaced: true,
  modules: {
    doorbell,
    contents,
  }
}