<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">

    <Header @toggle-add-listing-view="isShowingAddListingView = true; isShowingAddUserView = false" @toggle-add-user-view="isShowingAddUserView = true; isShowingAddListingView = false"></Header>
    
    <div class="content">
      <div v-show="isShowingAddUserView">
        <h2>Add User:</h2>
        <input type="text" v-model="firstName" placeholder="First Name">
        <input type="text" v-model="lastName" placeholder="Last Name">
        <button @click.native="getRequest()">Response</button>
        <button @click.native="addUser()">Add User</button>
      </div>

      <!-- TODO: Change these to components -->

      <div v-show="isShowingAddListingView">
        <h2>Add Listing:</h2>
        <input type="text" placeholder="Title"> 
        <input type="text" placeholder="Address">
        <input type="text" placeholder="User">
      </div>
    </div>
    
  </div>
  
</template>

<script>

// components
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

// other imports
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  },
  data: () => ({
    firstName: '',
    lastName: '',
    isShowingAddUserView: false,
    isShowingAddListingView: false
  }),
  methods: {
    addUser() {
      axios.post('http://localhost:3030/api/add', {
        firstName: this.firstName,
        lastName: this.lastName
      }).then(response => {
        this.message = response.data
        this.isShowingAddUserView = !this.isShowingAddUserView;
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
}

.content {
  position: absolute;
  width: 100%;
  top: 5rem;
  display: flex;
}

/* Flex Classes */
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
