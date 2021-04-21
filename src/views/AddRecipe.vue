<template>
  <div id="addRecipe">
    <div class="container ">
      <div>
        <h2>Add a new recipe</h2>
        <p>{{userId}}</p>
        <form class="pt-3 text-left">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" ref="title" placeholder="Title">
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" ref="description" placeholder="Description of the recipe">
          </div>
          <div class="form-group">
            <label for="timeOfPrepa">Estimated time of preparation </label>
            <input type="number" class="form-control" id="timeOfPrepa" ref="timeOfPrepa" placeholder="0">
            <small class="font-weight-bold text-info">Please enter a time in minutes</small>
          </div>
          <div class="form-group">
            <label for="difficultyLvl">Difficulty level </label>
            <input type="number" class="form-control" id="difficultyLvl" ref="difficultyLvl" placeholder="0" min="1" max="10">
            <small class="font-weight-bold text-info">Enter the difficulty on a scale of one to ten</small>
          </div>
          <div class="form-group">
            <label for="cookingInstructions">Cooking instructions</label>
            <input type="text" class="form-control" id="cookingInstructions" ref="cookingInstructions" placeholder="Enter your cooking instructions here">
          </div>
          <button type="button" class="btn btn-primary" @click="addRecipe">Add recipe</button>
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
  },
  methods: {
    addRecipe: function () {
        var self = this
        axios.post(`${server.baseURL}/auth/recipe`,{
          "title": this.$refs.title.value,
          "description": this.$refs.description.value,
          "timeOfPrepa": this.$refs.timeOfPrepa.value,
          "difficultyLvl": this.$refs.difficultyLvl.value,
          "cookingInstructions": this.$refs.cookingInstructions.value,
          "userId": this.userId,
        },self.config)
          .then(function (response) {
            console.log(response);
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
