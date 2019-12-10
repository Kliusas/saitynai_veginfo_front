<template>
  <div>
    <div class="landing">
      <div class="container">
        <div class="landing__section">
          <div class="landing__img">
            <img src="../assets/tools.svg" alt="Tools" />
          </div>
          <h2 class="landing__title">Build your custom event system!</h2>
          <p class="landing__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the
          </p>
          <button
            @click="$router.push({ name: 'login' }).catch(err => err)"
            class="text-white btn btn-primary mt-3 col-3 ml-0 ml-md-3"
          >
            Login
          </button>
        </div>
      </div>
    </div>

    <div class="landing landing--grey">
      <div class="container">
        <div class="landing__section flex-lg-row">
          <div class="landing__img landing__img--avg">
            <img src="../assets/save-time.svg" alt="Tools" />
          </div>
          <div>
            <h2 class="landing__title">Save your time with new system!</h2>
            <p class="landing__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only
            </p>
            <button
              @click="$router.push({ name: 'categories' }).catch(err => err)"
              class="text-white btn btn-primary mt-3 col-3 ml-0 ml-md-3"
            >
              Check Categories
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="landing">
      <div class="container">
        <div class="landing__section flex-lg-row-reverse">
          <div class="landing__img landing__img--avg">
            <img src="../assets/rest.svg" alt="Tools" />
          </div>
          <div>
            <h2 class="landing__title">
              Take a rest, event system will handle everything!
            </h2>
            <p class="landing__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <button
              @click="$router.push({ name: 'elements' }).catch(err => err)"
              class="text-white btn btn-primary mt-3 col-3 ml-0 ml-md-3"
            >
              Check Elements
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="landing landing--grey">
      <div class="container">
        <div class="landing__section">
          <div class="landing__img landing__img--avg">
            <img src="../assets/expert.svg" alt="Tools" />
          </div>
          <h2 class="landing__title">Become an Expert!</h2>
          <p class="landing__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
