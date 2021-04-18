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
              <li class="breadcrumb-item" aria-current="page">Recipe</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-left">
          <h4>Reicpe title</h4>
          <small >This is a text for a Recipe description</small>
          <table class=" mt-3">
            <tr>
              <th class="pr-2">Estimated time of preparation</th>
              <td>30 min</td>
            </tr>
            <tr>
              <th class="pr-2">Difficulty level</th>
              <td>0/5</td>
            </tr>
            <tr>
              <th class="pr-2">Creation date</th>
              <td>01/01/2021</td>
            </tr>
          </table>
          <div class="row">
            <div class="text-left col-md-4 col-sm-12 pt-3">
              <th class=" lead">List of ingredients:</th>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <router-link to="/auth/recipes/recipe/ingredients">
                        Ingredients
                      </router-link>
                    </th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ingredient</td>
                    <td>50gr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-left col-md-8 col-sm-12 pt-3">
              <th class="lead">Cooking Instructions:</th>
              <table class="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>instruction</td>
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
export default {
  name: "Recipe",
  data() {
    return {
      recipe: {},
      instructions:[],
      ingredients:[]
    };
  },
};
</script>

