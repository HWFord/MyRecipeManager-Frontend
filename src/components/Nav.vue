<template>
    <div id="nav" class="">
      <nav class="row my-3">
        <div class=" col-12 d-inline-block px-0 py-3">
          <router-link to="/auth/recipes">Recipes</router-link>
          |
          <router-link to="/Auth">Authentification</router-link>
          |
          <a href="/auth" @click='logout'>Logout</a>
        </div>
      </nav>
    </div>
</template>
<script>
export default {
  methods: {
    logout: function(){
      localStorage.clear()
    }
  }
}


</script>

<style scoped>
  #nav{
    font-size: 1.5rem;
    width:100%;
    background-color:transparent;
  }
</style>