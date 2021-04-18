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
            <input type="text" class="form-control" id="description" ref="description" placeholder="Description of the recipe">
          </div>
          <button type="button" class="btn btn-primary" @click="updateRecipe">Add recipe</button>
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
    this.userId = JSON.parse(localStorage.getItem('userData')).id;
  },
  methods: {
    updateRecipe: function () {
        var self = this
        axios.patch(`${server.baseURL}/auth/recipe`, {
          "title": this.$refs.title.value,
          "description": this.$refs.password.value,
          "timeOfPrepa": this.$refs.timeOfPrepa.value,
          "difficultyLvl": this.$refs.difficultyLvl.value,
          "cookingInstructions": this.$refs.cookingInstructions.value,
          "userId": this.userId,
        })
          .then(function (response) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userData', JSON.stringify(response.data.user))
            const config = {
              headers: {
                 'Authorization': 'Bearer '.concat(localStorage.getItem('token'))
              }
            };

            axios.patch(`${server.baseURL}/auth/recipe`, config)
              .then(function (response) {
                  //window.location = "/" // Redirection si la connection est bonne!
                console.log(response);
                window.location = `/auth/recipes`;
              })
              .catch(function (error) {
                console.log(error);
              })
          })
          .catch(function (error) {
            console.log(error);
            self.error = "Recipe not added"
          });
      },
  }
}
</script>
