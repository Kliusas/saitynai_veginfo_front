import VueRouter from "vue-router";
import Vue from "vue";
import Dishes from "./src/pages/dashboard/Dishes";
import Login from "./src/pages/Login";
import Dashboard from "./src/pages/Dashboard";
import DishesCategories from "./src/pages/dashboard/DishesCategories";
import EventsCategories from "./src/pages/dashboard/EventsCategories";
import Events from "./src/pages/dashboard/Events";
import Ingredients from "./src/pages/dashboard/Ingredients";
import ProductCategories from "./src/pages/dashboard/ProductCategories";
import Products from "./src/pages/dashboard/Products";
import Recipes from "./src/pages/dashboard/Recipes";
import Restaurants from "./src/pages/dashboard/Restaurants";
import ShopProducts from "./src/pages/dashboard/ShopProducts";
import Shops from "./src/pages/dashboard/Shops";
import Categories from "./src/pages/dashboard/categories/Categories";
import Elements from "./src/pages/dashboard/categories/Elements";
import Users from "./src/pages/dashboard/categories/Users";
import VueCookies from "vue-cookies";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        requiresAuth: true
      },
      component: Dashboard
    },
    {
      path: "/dishes-categories",
      name: "dishes-categories",
      meta: {
        requiresAuth: true
      },
      component: DishesCategories
    },
    {
      path: "/dishes",
      name: "dishes",
      meta: {
        requiresAuth: true
      },
      component: Dishes
    },
    {
      path: "/events-categories",
      name: "events-categories",
      meta: {
        requiresAuth: true
      },
      component: EventsCategories
    },
    {
      path: "/events",
      name: "events",
      meta: {
        requiresAuth: true
      },
      component: Events
    },
    {
      path: "/ingredients",
      name: "ingredients",
      meta: {
        requiresAuth: true
      },
      component: Ingredients
    },
    {
      path: "/product-categories",
      name: "product-categories",
      meta: {
        requiresAuth: true
      },
      component: ProductCategories
    },
    {
      path: "/products",
      name: "products",
      meta: {
        requiresAuth: true
      },
      component: Products
    },
    {
      path: "/recipes",
      name: "recipes",
      meta: {
        requiresAuth: true
      },
      component: Recipes
    },
    {
      path: "/restaurants",
      name: "restaurants",
      meta: {
        requiresAuth: true
      },
      component: Restaurants
    },
    {
      path: "/shop-products",
      name: "shop-products",
      meta: {
        requiresAuth: true
      },
      component: ShopProducts
    },
    {
      path: "/shops",
      name: "shops",
      meta: {
        requiresAuth: true
      },
      component: Shops
    },
    {
      path: "/categories",
      name: "categories",
      meta: {
        requiresAuth: true
      },
      component: Categories
    },
    {
      path: "/elements",
      name: "elements",
      meta: {
        requiresAuth: true
      },
      component: Elements
    },
    {
      path: "/users",
      name: "users",
      meta: {
        requiresAuth: true
      },
      component: Users
    },
    {
      path: "/login",
      name: "login",

      meta: {
        requiresAuth: false
      },
      component: Login
    },
    {
      path: "/logged",
      name: "logged",
      meta: {
        requiresAuth: false
      },
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
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (VueCookies.get("auth")) {
      next();
    } else {
      router.replace({ name: "login" });
    }
  } else {
    next();
  }
});
export default router;
