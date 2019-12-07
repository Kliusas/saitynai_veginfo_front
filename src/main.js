import Vue from "vue";
import App from "./App.vue";
import VueMaterial from 'vue-material'
import Axios from "axios";
import router from "../router";
import "bootstrap";
import "@/services/FontAwesome";
import "@/sass/style.scss";
import VueCookies from "vue-cookies";


Vue.prototype.$http = Axios;
Vue.prototype.$cookies = VueCookies;
Vue.config.productionTip = false;
Vue.use(VueMaterial);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
