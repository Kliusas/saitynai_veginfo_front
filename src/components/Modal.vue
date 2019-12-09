<template>
  <div
    class="modal"
    :class="{ 'modal--no-padding': noPadding }"
    v-show="showModal"
    :id="modalID"
    tabindex="-1"
    role="dialog"
    style="display: block;"
  >
    <div
      class="modal-backdrop modal-backdrop--absolute fade show"
      @click="close"
    ></div>
    <div
      class="modal-dialog"
      role="document"
      :class="{
        'modal-lg': large,
        'modal-sm': small,
        'modal-dialog-centered': vCentered
      }"
    >
      <div class="modal-content">
        <modal-header
          v-if="header !== false"
          :title="title"
          :dismissible="dismissible"
        />
        <div
          v-if="body !== false"
          class="modal-body"
          :class="{ 'u-paddingless': noBodyPadding }"
        >
          <slot name="modal-body" :data="data" :methods="this"></slot>
        </div>
        <div v-if="footer !== false" class="modal-footer">
          <slot name="modal-footer" :data="data" :methods="this"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from "./ModalHeader";
export default {
  name: "modal",
  components: { ModalHeader },
  props: {
    footer: true,
    header: true,
    body: true,
    large: Boolean,
    small: Boolean,
    vCentered: Boolean,
    title: String,
    data: [Array, Object],
    id: String,
    dismissible: {
      type: Boolean,
      default: true
    },
    noPadding: Boolean,
    noBodyPadding: Boolean,
    show: Boolean
  },
  computed: {
    modalID() {
      return this.id || "modal_" + Math.floor(Math.random() * 100 + 1);
    },
    showModal() {
      if (this.show) {
        window.document.body.style.overflowY = "hidden";
      } else {
        window.document.body.style.overflowY = "scroll";
      }
      return this.show || false;
    }
  },
  methods: {
    close() {
      if (this.show) {
        this.$emit("update:show", false);
      }
    }
  }
};
</script>
