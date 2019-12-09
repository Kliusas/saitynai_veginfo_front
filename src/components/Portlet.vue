<template>
  <div
    class="portlet"
    :class="{
      'portlet--horizontal d-flex align-items-center justify-content-between flex-column flex-md-row text-center': horizontal
    }"
  >
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: "Portlet",
  props: {
    horizontal: Boolean
  }
};
</script>
