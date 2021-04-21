<template>
  <div id="ingredients">

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
              <li class="breadcrumb-item" aria-current="page">Ingredients</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container text-left">
      <div class="row">
        <div class="col-sm-12 mt-4">
          <div class="col-8 text-left d-inline-block">
            <h3>Ingredients for {{recipe.title}}</h3>
          </div>
          <div class="col-4 text-right d-inline-block">
            <router-link :to="{
                  name: 'AddIngredient', 
                  }"
                >
                <button type="button" class="btn btn-primary">Add ingredient</button>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6" 
          v-for="ingredient in ingredients"
          :key="ingredient.id">
          <div class="card mt-4 text-center" >
            <div class="card-header">
              <h4 class="card-title lead">{{ingredient.name}}</h4>
            </div>
            <div class="card-body pt-3">
                <p class="card-text">{{ingredient.price}}</p>
                <router-link :to="{
                  name: 'Ingredient', 
                  params: {
                    recipeId:recipeId,
                    ingredientId:ingredient._id,
                  } 
                }">
                  See ingredient
                </router-link>
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
  name: "Ingredients",
  data() {
    return {
      recipeId:'',
      ingredients: [],
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
    this.getRecipe();
    this.getIngredients();
    this.name = JSON.parse(localStorage.getItem('userData')).name;
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
    getIngredients() {
      axios.get(`${server.baseURL}/auth/recipe/${this.recipeId}/ingredients`, this.config)
        .then((response) =>{
          this.ingredients = response.data;
          console.log(this.ingredients);
        })
    },
  }
};
</script>