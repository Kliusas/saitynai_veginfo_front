<template>
  <div>
    <md-field>
      <label>dishesCategoryName</label>
      <md-input v-model="storeDishesCategoryName"></md-input>
    </md-field>
    <md-button @click="storeDishesCategory">Default</md-button>
    <md-field>
      <label>dishesCategoryName</label>
      <md-input v-model="updateDishesCategoryName"></md-input>
    </md-field>
    <md-button @click="updateDishesCategory">Default</md-button>
  </div>
</template>

<script>
export default {
  name: "Dishes",
  props: {},
  data() {
    return {
      storeDishesCategoryName: "",
      updateDishesCategoryName: ""
    };
  },
  mounted() {
    this.$http
      .get("http://localhost/dishes-categories")
      .then(response => console.log(response.data));
  },
  methods: {
    storeDishesCategory() {
      this.$http
        .post("http://localhost/dishes-categories", {
          data: { name: this.storeDishesCategoryName }
        })
        .then(response => console.log(response.data))
        .catch(err => console.warn(err));
    },

    updateDishesCategory() {
      this.$http
        .patch(
          "http://localhost/dishes-categories/:id",
          { id: 2 },
          {
            name: this.updateDishesCategoryName
          }
        )
        .then(response => console.log(response.data));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
