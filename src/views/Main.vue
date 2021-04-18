<template>
  <div class="main">
    <div class="jumbotron jumbotron-fluid py-2">
      <div class="container">
        <h1 class="display-4">My Recipe Manager</h1>
        <Nav/>
      </div>
    </div>
    <h2>Welcome to my recipe manager. </h2>
    <p>View and manage recipes you have created</p>
      <div class="content">
        <router-view/>
      </div>
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Nav
  }
}
</script>
<style scoped>

</style>
