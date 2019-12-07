import VueRouter from "vue-router";
import Vue from "vue";
import Dishes from "./src/components/Dishes";
import Login from "./src/pages/Login";
import Dashboard from "./src/pages/Dashboard";
import VueCookies from "vue-cookies";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/dishes",
      name: "dishes",
      component: Dishes
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logged",
      name: "logged",
      beforeEnter() {
        VueCookies.set(
          "auth",
          Math.random()
            .toString(36)
            .substring(2, 30) +
            Math.random()
              .toString(36)
              .substring(2, 30)
        );
        location.href = "http://localhost:8081/dashboard";
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (VueCookies.get("auth")) {
          next();
        } else {
          router.push({ name: "login" });
        }
      }
    }
  ]
});
export default router;
