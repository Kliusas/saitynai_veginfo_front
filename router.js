import VueRouter from 'vue-router'
import Vue from "vue";
import Dishes from "./src/components/Dishes"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/dishes',
            name: 'dishes',
            component: Dishes
        },
    ]
});
export default router