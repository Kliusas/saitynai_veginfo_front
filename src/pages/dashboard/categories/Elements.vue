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
import Portlet from "../../../components/Portlet";
import Navigation from "../../../components/Navigation";
export default {
  name: "Elements",
  components: { Navigation, Portlet },
  data() {
    return {
      types: [
        { title: "Dishes", url: "dishes" },
        { title: "Events", url: "events" },
        { title: "Products", url: "products" },
        { title: "Recipes", url: "recipes" },
        { title: "Shop Products", url: "shop-products" }
      ]
    };
  }
};
</script>
<style lang="scss"></style>
