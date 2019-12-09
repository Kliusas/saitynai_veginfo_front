<template>
  <div>
    <navigation></navigation>
    <div class="container d-flex flex-wrap">
      <div
        class="mb-5 col-12 d-flex justify-content-center"
        v-for="type in types"
        :key="type.url"
      >
        <portlet horizontal>
          <template slot="title">{{ type.name }}</template>
          <template slot="content">
            <div>
              <button
                @click="$router.replace({ name: type.url }).catch(err => err)"
                class="text-white btn btn-primary m-1 m-md-0 ml-0 ml-md-3"
              >
                Edit
              </button>
              <button
                @click="$router.replace({ name: type.url }).catch(err => err)"
                class="text-white btn btn-danger m-1 m-md-0 ml-0 ml-md-3"
              >
                Delete
              </button>
            </div>
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
  name: "dashboard-section",
  components: { Navigation, Portlet },
  props: { types: Array }
};
</script>
<style lang="scss"></style>
