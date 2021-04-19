<template>
  <div id="updateRecipe">
    <div class="container ">
      <div>
        <h2>Update Ingredient </h2>
        <form class="pt-3 text-left">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" ref="title" placeholder="Title">
          </div>
          <div class="form-group">
            <label for="description">Price</label>
            <input type="number" class="form-control" id="price" ref="price" placeholder="price of ingredient">
          </div>
          <button type="button" class="btn btn-primary" @click="updateRecipe">Update recipe</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";

export default {
  name: 'UpdateRecipe',
  data() {
    return {
      recipeId:"",
      title: "",
      price:"",
      config:{
        headers: {
          'Authorization': 'Bearer '.concat(localStorage.getItem('token'))
        }
      }
    };
  },
  created() {
    this.recipeId = this.$route.params.recipeId;
  },
  methods: {
    updateRecipe: function () {
        var self = this
        axios.patch(`${server.baseURL}/auth/recipe/${this.recipeId}/ingredients/${this.ingredientId}`, {
          "title": this.$refs.title.value,
          "price": this.$refs.price.value,
          "recipeId": this.recipeId,
        })
          .then(function (response) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userData', JSON.stringify(response.data.user))
            const config = {
              headers: {
                 'Authorization': 'Bearer '.concat(localStorage.getItem('token'))
              }
            };

            axios.patch(`${server.baseURL}/auth/recipe/${this.recipeId}/ingredients/${this.ingredientId}`, config)
              .then(function (response) {
                  //window.location = "/" // Redirection si la connection est bonne!
                console.log(response);
                window.location = `${server.baseURL}/auth/recipe/${this.recipeId}/ingredients/${this.ingredientId}`;
              })
              .catch(function (error) {
                console.log(error);
              })
          })
          .catch(function (error) {
            console.log(error);
            self.error = "Ingredient not updated"
          });
      },
  }
}
</script>
