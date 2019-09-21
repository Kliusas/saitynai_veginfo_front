import Vue from "vue";
import App from "./App.vue";
import VueMaterial from 'vue-material'
import Axios from "axios";
import router from "../router";

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(VueMaterial);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
