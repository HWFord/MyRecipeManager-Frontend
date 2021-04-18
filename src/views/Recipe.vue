<template>
  <div id="recipe">

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
              <li class="breadcrumb-item" aria-current="page">{{recipe.title}}</li>
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
              <h4>{{recipe.title}}</h4>
            </div>
            <div class="col-2">
              <router-link :to="{
                name: 'UpdateRecipe', 
                params: {
                  recipeId:recipe.id,
                } 
              }">
                <button type="button" class="btn btn-secondary btn-sm w-100">Update recipe</button>
              </router-link>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-danger btn-sm w-100" @click="deleteRecipe">Delete recipe</button>
            </div>
          </div>
          <small >{{recipe.description}}</small>
          <table class=" mt-3">
            <tr>
              <th class="pr-2">Estimated time of preparation</th>
              <td>{{recipe.timeOfPrepa}} min</td>
            </tr>
            <tr>
              <th class="pr-2">Difficulty level</th>
              <td>{{recipe.difficultyLvl}}/5</td>
            </tr>
            <tr>
              <th class="pr-2">Creation date</th>
              <td>{{recipe.creationDate}}</td>
            </tr>
          </table>
          <div class="row">
            <div class="text-left col-md-4 col-sm-12 pt-3">
              <th class=" lead">List of ingredients:</th>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <router-link :to="{
                          name: 'Ingredients', 
                          params: {
                            recipeId:recipe.id,
                            } 
                          }"
                      >
                          Ingredients
                        </router-link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                  v-for="ingredient in ingredients"
                  :key="ingredient.id"
                  >
                    <td>{{ingredient.name}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-left col-md-8 col-sm-12 pt-3">
              <th class="lead">Cooking Instructions:</th>
              <table class="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td>{{recipe.cookingInstruction}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { server } from "../../helper";
import axios from "axios";

export default {
  name: "Recipe",
  data() {
    return {
      recipeId:'',
      recipe: {},
      //instructions:[],
      ingredients:[],
      config:{
        headers: {
          'Authorization': 'Bearer '.concat(localStorage.getItem('token'))
        }
      }
    };
  },
  created() {
    this.recipeId= this.$route.params.recipeId;
    this.getRecipe();
    this.getIngredients();
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
    getIngredients(){
       axios.get(`${server.baseURL}/auth/recipe/${this.recipeId}/ingredients`, this.config)
        .then((response) =>{
          this.ingredients = response.data;
          console.log(this.ingredients);
        })
    },
    deleteRecipe(){
        axios.delete(`${server.baseURL}/auth/recipe/${this.recipeId}`, this.config)
          .then(function (response) {
                  //window.location = "/" // Redirection si la connection est bonne!
            console.log(response);
            window.location = `/auth/recipes`;
          })
    }
  }
  
};
</script>

