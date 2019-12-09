<template>
  <div
    class="h-select form-control"
    :class="{
      'h-select__open': hselectOpened,
      'h-select--transparent': transparent
    }"
    @click="toggleHSelect"
  >
    <div class="h-select__selected-option-container">
      <div
        class="h-select__selected-option"
        v-show="!hselectOpened || (hselectOpened && searchLength < 1)"
      >
        {{ optionLabel(value) }}
      </div>
      <input
        ref="hSelectSearch"
        type="search"
        v-model="search"
        class="form-control h-select__input"
      />
    </div>
    <i class="fas fa-chevron-down h-select__arrow"></i>
    <div class="h-select__select-box">
      <ul class="h-select__select-box-list">
        <li
          class="h-select__select-box-list-item"
          :class="{ active: isSelectedValue(opt) }"
          v-for="(opt, optKey) in filteredOptions"
          :key="optKey"
          @click="changeValue(opt)"
        >
          {{ optionLabel(opt) }}
        </li>
        <li
          v-if="filteredOptions.length <= 0"
          class="h-select__select-box-list-item h-select__select-box-list-item--disabled"
        >
          <slot name="no-option">
            No matching options
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { isObject, cloneDeep } from "lodash";
export default {
  name: "h-select",
  props: {
    transparent: Boolean,
    options: Array,
    value: null,
    label: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      hselectOpened: false,
      search: ""
    };
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
  computed: {
    searchLength() {
      return this.search.length;
    },
    filteredOptions() {
      let filteredOptions = cloneDeep(this.options);

      filteredOptions = filteredOptions.filter(
        opt =>
          !!String(this.optionLabel(opt))
            .toLowerCase()
            .match(this.search.toLowerCase())
      );

      return filteredOptions;
    }
  },
  methods: {
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target) && this.$el !== event.target) {
        this.hselectOpened = false;
        this.search = "";
      }
    },
    isSelectedValue(opt) {
      return this.optionLabel(this.value) === this.optionLabel(opt);
    },
    toggleHSelect() {
      this.hselectOpened = !this.hselectOpened;
      if (this.hselectOpened) this.$refs.hSelectSearch.focus();
      else this.search = "";
      this.$emit("hSelectOpened", this.hselectOpened);
    },
    optionLabel(opt) {
      if (isObject(opt)) {
        if (this.label) {
          return opt[this.label];
        }

        return opt.label ? opt.label : opt;
      }

      return opt;
    },
    changeValue(newVal) {
      this.$emit("input", newVal);
      this.$emit("on-change", newVal);
    }
  }
};
</script>
