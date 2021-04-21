<template>
  <div id="updateRecipe">
    <div class="container ">
      <div>
        <h2>Update {{recipe.title}}</h2>
        <form class="pt-3 text-left">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" ref="title" placeholder="Title" v-bind:value="recipe.title">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" ref="description" placeholder="Description of the recipe" v-bind:value="recipe.description">
          </div>
          <div class="form-group">
            <label for="timeOfPrepa">Estimated time of preparation </label>
            <input type="number" class="form-control" id="timeOfPrepa" ref="timeOfPrepa" placeholder="0" v-bind:value="recipe.timeOfPrepa">
            <small class="font-weight-bold text-info">Please enter a time in minutes</small>
          </div>
          <div class="form-group">
            <label for="difficultyLvl">Difficulty level </label>
            <input type="number" class="form-control" id="difficultyLvl" ref="difficultyLvl" placeholder="0" min="1" max="10" v-bind:value="recipe.difficultyLvl">
            <small class="font-weight-bold text-info">Enter the difficulty on a scale of one to ten</small>
          </div>
          <div class="form-group">
            <label for="cookingInstructions">Cooking instructions</label>
            <input type="text" class="form-control" id="cookingInstructions" ref="cookingInstructions" placeholder="Enter your cooking instructions here" v-bind:value="recipe.cookingInstructions">
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
      recipe:  [],
      recipeId:"",
      userId:"",
      title: "",
      description:"",
      timeOfPrepa:"",
      difficultyLvl:"",
      cookingInstructions:"",
      config:{
        headers: {
          'Authorization': 'Bearer '.concat(localStorage.getItem('token'))
        }
      }
    };
  },
  created() {
    this.userId = JSON.parse(localStorage.getItem('userData'))._id;
    this.recipeId = this.$route.params.recipeId;
    this.getRecipe();
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
    updateRecipe: function () {
        var self = this
        axios.patch(`${server.baseURL}/auth/recipe/`+self.recipeId,{
          "title": this.$refs.title.value,
          "description": this.$refs.description.value,
          "timeOfPrepa": this.$refs.timeOfPrepa.value,
          "difficultyLvl": this.$refs.difficultyLvl.value,
          "cookingInstructions": this.$refs.cookingInstructions.value,
          "userId": this.userId,
        },self.config)
          .then(function (response) {
            console.log(response);
                  //window.location = "/" // Redirection si la connection est bonne!

                window.location ='/auth/recipes' ;
              })
          .catch(function (error) {
            console.log(error);
            self.error = "Recipe not added"
          });
    
    }
  }
}
</script>
