<template>
  <div class="login d-flex justify-content-center align-items-center">
    <portlet>
      <template slot="title">
        <h2 class="font-weight-bold mb-5 text-center">Log in</h2>
      </template>
      <template slot="content">
        <div class="d-flex justify-content-between text-white">
          <a href="http://127.0.0.1/redirect/google" class="text-white">
            <em class="icon fab fa-google bg-danger"></em>
          </a>
          <a href="http://127.0.0.1/redirect/github" class="text-white">
            <em class="icon fab fa-github bg-dark"></em>
          </a>
          <a href="http://127.0.0.1/redirect/facebook" class="text-white">
            <em class="icon fab fa-facebook-f bg-info"></em>
          </a>
        </div>
      </template>
    </portlet>
  </div>
</template>
<script>
import Portlet from "../components/Portlet";
export default {
  name: "Login",
  components: { Portlet }
};
</script>
<style lang="scss">
.login {
  min-height: 100vh;
  background: #f8f8f8;
}
.icon {
  width: 4rem !important;
  height: 3rem !important;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
