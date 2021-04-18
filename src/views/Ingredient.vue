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
                <router-link to="/auth/recipes/recipe">
                  Recipe
                </router-link> 
              </li>
              <li class="breadcrumb-item">
                <router-link to="/auth/recipes/recipe/ingredients">
                  Ingredients
                </router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">Ingredients</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-left">
          <h4>Ingredient Name</h4>
          <table class=" mt-3">
            <tr>
              <th class="pr-2">Price</th>
              <td>30€</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ingredient",
  data() {
    return {
      ingredient: {},
    };
  },
};
</script>