import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { VLazyImagePlugin } from 'v-lazy-image';
import interceptors from './services/interceptors';
import firebaseService from './services/firebase';
import store from './store/store';
import router from './router';
import App from './App';
import './registerServiceWorker';

UIkit.use(Icons);

Vue.use(VLazyImagePlugin);
Vue.config.productionTip = false;

interceptors.setup(router, store);
firebaseService.init();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
