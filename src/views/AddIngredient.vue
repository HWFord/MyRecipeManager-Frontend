<template>
  <div id="AddRecipe">
    <div class="container ">
      <div>
        <h2>Add Ingredient {{recipeId}} </h2>
        <form class="pt-3 text-left">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" ref="name" placeholder="Name">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="number" class="form-control" id="price" ref="price" placeholder="price of ingredient">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="price" ref="description" placeholder="description">
          </div>
          <button type="button" class="btn btn-primary" @click="addIngredient">Add ingredient</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "../../helper";

export default {
  name: 'AddRecipe',
  data() {
    return {
      recipeId:"",
      name: "",
      price:"",
      decription:"",
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
    addIngredient: function () {
        var self = this
        axios.post(`${server.baseURL}/auth/recipe/${self.recipeId}/ingredients`, {
          "name": self.$refs.name.value,
          "price": self.$refs.price.value,
          "description": self.$refs.description.value,
          "owner": self.recipeId,
        },self.config)
          .then(function (response) {
            console.log(response);
                window.location =`/auth/recipes/${self.recipeId}/ingredients` ;
              })
          .catch(function (error) {
            console.log(error);
            self.error = "Ingredient not added"
          });
      },
  }
}
</script>
