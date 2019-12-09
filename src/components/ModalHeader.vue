<template>
  <div class="modal-header">
    <h5 v-if="title" class="modal-title" v-html="title"></h5>
    <button
      v-if="dismissible !== false"
      type="button"
      class="close"
      title="Close"
      @click="close"
    >
      <i class="fas fa-times fa-sm"></i>
      <!--<span aria-hidden="true"></span>-->
    </button>
  </div>
</template>

<script>
export default {
  name: "modal-header",
  props: {
    dismissible: true,
    title: ""
  },
  methods: {
    close() {
      this.$parent.close();
    }
  }
};
</script>
