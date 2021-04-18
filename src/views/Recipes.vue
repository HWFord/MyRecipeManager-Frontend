<template>
  <div id="recipes">

    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">Recipes</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="col-sm-12 mt-4">
          <div class="col-8 text-left d-inline-block">
            <h3>Recipes added by {{name}}</h3>
          </div>
          <div class="col-4 text-right d-inline-block">
            <router-link :to="{
                  name: 'AddRecipe', 
                  }"
                >
                <button type="button" class="btn btn-primary">Add recipe</button>
            </router-link>
          </div>
        </div>

        <div class="col-sm-4" 
        v-for="recipe in recipes"
        :key="recipe.id"
        >
          <div class="card mt-4 text-center" >
            <div class="card-body pt-3 ">
              <h4 class="card-title">{{recipe.title}}</h4>
                <p class="card-text">{{recipe.description}}</p>
                <div class="col-12">
                  <router-link :to="{
                    name: 'Recipe', 
                    params: {
                      recipeId:recipe.id,
                      } 
                    }"
                  ><button type="button" class="btn btn-secondary btn-sm w-100 my-2">See recipe</button>
                  </router-link>
                </div>
                
              </div>
            <div class="card-footer text-muted">
              {{recipes[0].created}}
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
  name: "Recipes",
  data() {
    return {
      recipes: [],
      name:'',
      config:{
        headers: {
          'Authorization': 'Bearer '.concat(localStorage.getItem('token'))
        }
      }
    };
  },
  created() {
    this.getRecipes();
    this.name = JSON.parse(localStorage.getItem('userData')).name;
  },
  methods: {
    getRecipes() {
      axios.get(`${server.baseURL}/auth/recipe`, this.config)
        .then((response) =>{
          //console.log(response.data);
          this.recipes = response.data;
          //console.log(this.recipes);
        })
        //.then(data => (this.recipes = data.data));
        //console.log(this.recipes);
    },
  }
};
</script>
