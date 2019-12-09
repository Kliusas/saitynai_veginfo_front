<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view :key="$router.currentRoute.fullPath"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
