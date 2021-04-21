<template>
  <div id="updateRecipe">
    <div class="container ">
      <div>
        <h2>Update Ingredient </h2>
        <form class="pt-3 text-left">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" ref="name" placeholder="Name" v-bind:value="ingredient.name">
          </div>
          <div class="form-group">
            <label for="description">Price</label>
            <input type="number" class="form-control" id="price" ref="price" placeholder="price of ingredient" v-bind:value="ingredient.price">
          </div>
          <div class="form-group">
            <label for="description">description</label>
            <input type="text" class="form-control" id="price" ref="description" placeholder="price of ingredient" v-bind:value="ingredient.description">
          </div>
          <button type="button" class="btn btn-primary" @click="updateIngredient">Update ingredient</button>
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
      ingredientId: '',
      ingredient: {},
      recipeId:"",
      config:{
        headers: {
          'Authorization': 'Bearer '.concat(localStorage.getItem('token'))
        }
      }
    };
  },
  created() {
    this.recipeId = this.$route.params.recipeId;
    this.ingredientId= this.$route.params.ingredientId;
    this.getRecipe();
    this.getIngredient();
  },
  methods: {
    getRecipe(){
      console.log(this.recipeId);
       axios.get(`${server.baseURL}/auth/recipe/${this.recipeId}`, this.config)
        .then((response) =>{
          this.recipe = response.data;
          console.log(this.recipe);
        })
    },
    getIngredient(){
       axios.get(`${server.baseURL}/auth/recipe/${this.recipeId}/ingredients/${this.ingredientId}`, this.config)
        .then((response) =>{
          this.ingredient = response.data;
          console.log(this.ingredient);
        })
    },
    updateIngredient: function () {
        var self = this
        axios.patch(`${server.baseURL}/auth/recipe/${this.recipeId}/ingredients/${this.ingredientId}`, {
          "name": this.$refs.name.value,
          "price": this.$refs.price.value,
          "description": this.$refs.description.value,
          "recipeId": self.recipeId,
        },self.config)
         .then(function (response) {
            console.log(response);
            window.location =`/auth/recipes/${self.recipeId}/ingredients/${self.ingredientId}` ;
          })
          .catch(function (error) {
            console.log(error);
            self.error = "Ingredient not updated"
          });
      },
  }
}
</script>
