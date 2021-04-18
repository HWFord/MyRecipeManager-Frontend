<template>
  <div id="Register" class="text-left">
    <div class="container">
        <div>
          <h2>Login</h2>
          <small>Login as an existing user</small>
          <form class="pt-3">
            <div class="form-group">
              <label for="nameInputLogin">Name</label>
              <input type="text" class="form-control" id="name" ref="name" placeholder="Enter Name">
            </div>
            <div class="form-group">
              <label for="passwordInputLogin">Password</label>
              <input type="password" class="form-control" id="password" ref="password" placeholder="Password">
            </div>
            <button type="button" class="btn btn-primary" @click="login">Login</button>
          </form>
        </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";
import { server } from "../../helper";

export default {
  name: 'Login',
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    login: function () {
        var self = this
        axios.post(`${server.baseURL}/auth/login`, {
          "name": this.$refs.name.value,
          "password": this.$refs.password.value
        })
          .then(function (response) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userData', JSON.stringify(response.data.user))
            const config = {
              headers: {
                 'Authorization': 'Bearer '.concat(localStorage.getItem('token'))
              }
            };

            axios.get(`${server.baseURL}/auth`, config)
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
            self.error = "login ou mot de passe incorrect."
          });
      },
  }
}
</script>