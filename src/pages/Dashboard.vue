<template>
  <div>
    <navigation></navigation>
    <div class="container d-flex flex-wrap">
      <div
        class="mb-5 col-12 col-md-6 d-flex justify-content-center"
        v-for="type in types"
        :key="type.url"
      >
        <portlet horizontal>
          <template slot="title">{{ type.title }}</template>
          <template slot="content">
            <button
              @click="$router.replace({ name: type.url }).catch(err => err)"
              class="text-white btn btn-primary mt-3 mt-md-0 ml-0 ml-md-3"
            >
              Manage
            </button>
          </template>
        </portlet>
      </div>
    </div>
  </div>
</template>
<script>
import Portlet from "../components/Portlet";
import Navigation from "../components/Navigation";
export default {
  name: "Dashboard",
  components: { Navigation, Portlet },
  data() {
    return {
      types: [
        { title: "Dishes Categories", url: "dishes-categories" },
        { title: "Dishes", url: "dishes" },
        { title: "Events Categories", url: "events-categories" },
        { title: "Events", url: "events" },
        { title: "Ingredients", url: "ingredients" },
        { title: "Product Categories", url: "product-categories" },
        { title: "Products", url: "products" },
        { title: "Recipes", url: "recipes" },
        { title: "Restaurants", url: "restaurants" },
        { title: "Shop Products", url: "shop-products" },
        { title: "Shops", url: "shops" }
      ]
    };
  }
};
</script>
<style lang="scss"></style>
