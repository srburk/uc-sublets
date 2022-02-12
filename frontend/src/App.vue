<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <h1>Add User Form</h1>
    <input type="text" v-model="firstName" placeholder="First Name">
    <input type="text" v-model="lastName" placeholder="Last Name">
    <button @click.native="getRequest()">Response</button>
    <button @click.native="addUser()">Add User</button>
    <div>
      <p> Name is: {{ firstName }} {{ lastName }}</p>
    </div>
  </div>
  
</template>

<script>

// components
import HelloWorld from './components/HelloWorld.vue'

// other imports
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    firstName: '',
    lastName: ''
  }),
  methods: {
    addUser() {
      axios.post('http://localhost:3030/api/add', {
        firstName: this.firstName,
        lastName: this.lastName
      }).then(response => {
        this.message = response.data;
      });
    },
    getRequest() {
      axios.get("http://localhost:3030/").then(response => {
        console.log(response.data);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
