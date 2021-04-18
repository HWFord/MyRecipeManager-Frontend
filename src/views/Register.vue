<template>
  <div id="Login" class="text-left">
    <div class="container">
        <div>
          <h2>Register</h2>
          <small>Register a new user</small>
          <form class="pt-3">
            <div class="form-group">
              <label for="nameInputRegister">Name</label>
              <input type="text" class="form-control" id="nameInputRegister"  placeholder="Enter Name">
            </div>
            <div class="form-group">
              <label for="passwordInputRegister">Password</label>
              <input type="password" class="form-control" id="passwordInputRegister" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary" @click="register">Register</button>
            
          </form>
        </div>
      </div>
  </div>
</template>
<script>
/*
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
*/

export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
   methods: {
    async register() {
      var self = this
      await this.$axios.$post('/auth/register', {
        "name": this.nameInputLogin,
        "password": this.passwordInputLogin
      })
        .then(function (response) {
          console.log(response)
          localStorage.setItem('jwt', response.accessToken)
          self.$nuxt.$router.replace({ path: '/auth/login' })
        })
        .catch(function (error) {
          console.log(error);
          self.error = "name or password incorrect."
        });
    }
  }
}
</script>