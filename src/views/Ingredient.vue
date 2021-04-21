<template>
  <div id="ingredient">
    
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/auth/recipes">
                  Recipes
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{
                  name: 'Recipe', 
                  params: {
                    recipeId:recipeId,
                    } 
                  }"
                >
                  {{recipe.title}}
                </router-link> 
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{
                  name: 'Ingredients', 
                  params: {
                    recipeId:recipeId,
                    } 
                  }"
                >
                  Ingredients
                </router-link> 
              </li>
              <li class="breadcrumb-item" aria-current="page">{{ingredient.name}}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-left">
          <div class="row">
          <div class="col-8">
            <h4>{{ingredient.name}}</h4>
          </div>
          <div class="col-2">
              <router-link :to="{
                name: 'UpdateIngredient', 
                params: {
                  recipeId:recipeId,
                  ingredientId:ingredientId,
                } 
              }">
                <button type="button" class="btn btn-secondary btn-sm w-100">Update Ingredient</button>
              </router-link>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger btn-sm w-100" @click="deleteIngredient">Delete Ingredient</button>
            </div>
          </div>
          <table class=" mt-3">
            <tr>
              <th class="pr-2">Price</th>
              <td>{{ingredient.price}}€</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { server } from "../../helper";
import axios from "axios";

export default {
  name: "Ingredient",
  data() {
    return {
      recipeId:'',
      ingredientId: '',
      ingredient: {},
      recipe: {},
      config:{
        headers: {
          'Authorization': 'Bearer '.concat(localStorage.getItem('token'))
        }
      }
    };
  },
  created() {
    this.recipeId= this.$route.params.recipeId;
    this.ingredientId= this.$route.params.ingredientId;
    this.getRecipe();
    this.getIngredient();
    this.name = JSON.parse(localStorage.getItem('userData')).name;
  },
  methods:{
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
    deleteIngredient(){
        axios.delete(`${server.baseURL}/auth/recipe/${this.recipeId}/ingredients/${this.ingredientId}`, this.config)
          .then(function (response) {
                  //window.location = "/" // Redirection si la connection est bonne!
            console.log(response);
            window.location = `/auth/recipes`;
          })
    }
  }  
};
</script>