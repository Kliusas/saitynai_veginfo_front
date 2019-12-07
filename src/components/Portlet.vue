<template>
  <div class="portlet">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: "Portlet"
};
</script>
