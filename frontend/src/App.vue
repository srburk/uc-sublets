<template>

  <div id="app">

    <Header @toggle-add-listing-view="isShowingAddListingView = true; isShowingAddUserView = false; getAllUsers()" 
            @toggle-add-user-view="isShowingAddUserView = true; isShowingAddListingView = false"></Header>
    

    <AddUserView @toggle-add-user-view="isShowingAddUserView = false" v-show="isShowingAddUserView"></AddUserView>

    <AddListingView :users="allUsers" @toggle-add-listing-view="isShowingAddListingView = false" v-show="isShowingAddListingView"></AddListingView>
      
    <div class="content column">

      <ListingsGallery :allListings="this.allListings" @load-listings="getAllListings()"></ListingsGallery>

      <!-- <h2 class="row">All Users:</h2>
      <div class="row user-grid">
        <UserCard @reload-users="getAllUsers()" v-for="user in allUsers" :key="user._id" :firstName="user.firstName" :lastName="user.lastName" :userID="user._id"></UserCard>
      </div>

      <button style="margin-top: 2rem;" @click.native="getAllUsers()">Get All Users</button>

      <h2>All Listings:</h2>
      <div class="row user-grid">
        <ListingCard v-for="listing in allListings" :key="listing._id" :name="listing.name" :user="listing.user"></ListingCard>
      </div>

      <button style="margin-top: 2rem;" @click.native="getAllListings()">Get All Listings</button> -->
    </div>
    
  </div>
  
</template>

<script>

// components
import Header from './components/Header.vue'
import AddUserView from './components/AddUserView.vue'
import AddListingView from './components/AddListingView.vue'
import UserCard from './components/UserCard.vue'
// import ListingCard from './components/ListingCard.vue'
import ListingsGallery from './components/ListingsGallery.vue'

// other imports
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Header,
    AddUserView,
    AddListingView,
    UserCard,
    // ListingCard,
    ListingsGallery
  },
  data: () => ({
    isShowingAddUserView: false,
    isShowingAddListingView: false,
    allUsers: [],
    allListings: []
  }),
  methods: {
    getAllUsers() {
      axios.get('http://localhost:3030/api/users').then(response => {
        console.log(response.data);
        this.allUsers = response.data;
      });
    },
    getAllListings() {
      axios.get('http://localhost:3030/api/listings').then(response => {
        console.log(response.data);
        this.allListings = response.data;
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
  position: relative;
  top: 3rem;
  z-index: 1;
  padding: 2rem;
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

.user-grid {
  justify-content: flex-start;
}

</style>
