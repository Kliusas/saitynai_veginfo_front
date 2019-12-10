<template>
  <div class="footer-sticky">
    <div class="footer">
      <div class="container">
        <div class="d-flex">
          <ul class="col-8 footer__container d-md-flex d-none">
            <li
              class="footer__item"
              @click="$router.replace({ name: 'dashboard' }).catch(err => {})"
            >
              Dashboard
            </li>
            <li
              class="footer__item"
              @click="$router.replace({ name: 'categories' }).catch(err => err)"
            >
              Categories
            </li>
            <li
              class="footer__item"
              @click="$router.replace({ name: 'elements' }).catch(err => err)"
            >
              Elements
            </li>
            <li
              v-if="$cookies.get('auth')"
              class="footer__item"
              @click="$router.replace({ name: 'users' }).catch(err => err)"
            >
              Users
            </li>
          </ul>
          <small class="col-12 col-md-4"> Created by Karolis & Rosita</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
