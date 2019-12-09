<template>
  <div>
    <div class="navigation">
      <div class="container">
        <ul class="col-12 navigation__container d-md-flex d-none">
          <li
            class="navigation__item"
            @click="$router.replace({ name: 'dashboard' }).catch(err => {})"
          >
            Dashboard
          </li>
          <li
            class="navigation__item"
            @click="$router.replace({ name: 'categories' }).catch(err => err)"
          >
            Categories
          </li>
          <li
            class="navigation__item"
            @click="$router.replace({ name: 'elements' }).catch(err => err)"
          >
            Elements
          </li>
          <li class="navigation__item" @click="$router.replace({ name: 'users' }).catch(err => err)">
            Users
          </li>
        </ul>
        <ul
          class="navigation__container navigation__container--mobile d-flex d-md-none" :key="isExpanded"
        >
          <li
            v-if="!isExpanded"
            class="ml-auto cursor-pointer"
            @click="toggleMenu"
          >
            <em class="fa fa-bars ml-auto cursor-pointer"></em>
          </li>
          <li
            v-if="isExpanded"
            class="ml-auto cursor-pointer"
            @click="toggleMenu"
          >
            <em class="fa fa-times ml-auto cursor-pointer"></em>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="isExpanded"
      class="navigation navigation--mobile d-flex d-md-none"
    >
      <div class="container">
        <ul class="col-12 navigation__container navigation__container--outside">
          <li
            class="navigation__item navigation__item--outside"
            @click="$router.replace({ name: 'dashboard' }).catch(err => err)"
          >
            Dashboard
          </li>
          <li
            class="navigation__item navigation__item--outside"
            @click="$router.replace({ name: 'categories' }).catch(err => err)"
          >
            Categories
          </li>
          <li
            class="navigation__item navigation__item--outside"
            @click="$router.replace({ name: 'elements' }).catch(err => err)"
          >
            Elements
          </li>
          <li
            class="navigation__item navigation__item--outside"
            @click="$router.replace({ name: 'users' }).catch(err => err)"
          >
            Users
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleMenu() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>
