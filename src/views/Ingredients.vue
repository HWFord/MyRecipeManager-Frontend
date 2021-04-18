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
                <router-link to="/auth/recipes/recipe">
                  Recipe
                </router-link> 
              </li>
              <li class="breadcrumb-item" aria-current="page">Ingredients</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container text-left">
      <h4>Ingredients for recipe</h4>
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="card mt-4 text-center" >
            <div class="card-header">
              <h4 class="card-title lead">Ingredient name</h4>
            </div>
            <div class="card-body pt-3 ">
                <p class="card-text">20€</p>
                <router-link to="/auth/recipes/recipe/ingredients/ingredient">
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
export default {
  name: "Ingredients",
  data() {
    return {
      ingredients: [],
    };
  },
};
</script>