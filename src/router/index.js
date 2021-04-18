import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Main,
    children:[
      {
        path: '/auth/recipes',
        name: 'Recipes',
        component: () => import(/* webpackChunkName: "about" */ '../views/Recipes.vue')
      },
      {
        path: '/auth/recipes/:recipeId/recipe',
        //path: '/auth/recipes/:recipe_id',
        name: 'Recipe',
        component: () => import(/* webpackChunkName: "about" */ '../views/Recipe.vue')
      },
      {
        path: '/auth/recipes/recipe/ingredients',
        //path: '/auth/recipes/:recipe_id/ingredients/',
        name: 'Ingredients',
        component: () => import(/* webpackChunkName: "categories" */ '../views/Ingredients.vue')
      },
      {
        path: '/auth/recipes/recipe/ingredients/ingredient',
        //path: '/auth/recipes/:recipe_id/ingredients/:ingredient_id',
        name: 'Ingredient',
        component: () => import(/* webpackChunkName: "categories" */ '../views/Ingredient.vue')
      },
      {
        path: '/auth',
        name: 'Auth',
        component: () => import(/* webpackChunkName: "categories" */ '../views/Auth.vue')
      },
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "categories" */ '../views/Login.vue')
      },
      {
        path: '/auth/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "categories" */ '../views/Register.vue')
      }
    ] 
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
