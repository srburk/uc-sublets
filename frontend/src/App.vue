<template>
  <div id="app">

    <Header @toggle-add-listing-view="isShowingAddListingView = true; isShowingAddUserView = false" @toggle-add-user-view="isShowingAddUserView = true; isShowingAddListingView = false"></Header>
    
    <div class="content">

      <AddUserView @toggle-add-user-view="isShowingAddUserView = false" v-show="isShowingAddUserView"></AddUserView>

      <!-- TODO: Change these to components -->

      <!-- <div v-show="isShowingAddListingView">
        <h2>Add Listing:</h2>
        <input type="text" placeholder="Title"> 
        <input type="text" placeholder="Address">
        <input type="text" placeholder="User">
      </div> -->
      <AddListingView @toggle-add-listing-view="isShowingAddListingView = false" v-show="isShowingAddListingView"></AddListingView>
      
    </div>
    
  </div>
  
</template>

<script>

// components
import Header from './components/Header.vue'
import AddUserView from './components/AddUserView.vue'
import AddListingView from './components/AddListingView.vue'

// other imports
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    AddUserView,
    AddListingView
  },
  data: () => ({
    // firstName: '',
    // lastName: '',
    isShowingAddUserView: false,
    isShowingAddListingView: false
  }),
  methods: {
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
