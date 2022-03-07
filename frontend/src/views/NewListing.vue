<template>
    <div class="column">
        
        <h1>New Listing:</h1>
        <input type="text" v-model="name" placeholder="Name"> 
        <select v-model="selectedUser" label="User">
            <option v-for="user in users" :value="{ _id: user._id }" :key="user._id">
                {{ user.firstName }} {{ user.lastName }}
            </option>
        </select>

        <input type="number" v-model="rent" placeholder="Monthly Rent">
        <input type="date" v-model="startDate">
        <input type="date" v-model="endDate">
        <input type="text" v-model="address" placeholder="Address">
        <input type="number" v-model="numRooms" placeholder="Number of Rooms">
        <input type="url" v-model="photoURL" placeholder="Photo URL">
        <input type="number" v-model="distanceToCampus" placeholder="Distance to Campus (miles)">

        <div class="row" style="justify-content: space-between">
            <router-link to="/listings">
                <button>Cancel</button>
            </router-link>

            <router-link to="/listings">
                <button @click.native="addListing()">Add Listing</button>
            </router-link>
        </div>
        
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "NewListing",
     data: () => ({
        name: '',
        selectedUser: '',
        rent: Number,
        startDate: Date,
        endDate: Date,
        address: '',
        numRooms: Number,
        photoURL: '',
        distanceToCampus: Number,
        id: String,
        users: Array
    }),
    methods: {
        getAllUsers() {
            axios.get('http://' + window.location.hostname + ':3030/api/users/').then(response => {
                console.log(response.data);
                this.users = response.data;
            });
         },
        addListing() {
            console.log('sent');
            axios.post('http://' + window.location.hostname + ':3030/api/listings/', {
                name: this.name,
                user: this.selectedUser._id,
                rent: this.rent,
                startDate: this.startDate,
                endDate: this.endDate,
                address: this.address,
                numRooms: this.numRooms,
                photoURL: this.photoURL,
                distanceToCampus: this.distanceToCampus
            }).then(response => {
                console.log(response.data);
                this.id = response.data._id;
                console.log('Sent toggle-add-listing-view');
            });

            axios.put('http://' + window.location.hostname + ':3030/api/users/' + this.selectedUser._id, {
                listing: this.id
            }).then(response => {
                console.log('Added listing ID to user')
            });
        }
    },
    mounted() {
        this.getAllUsers();
    }
}
</script>

<style scoped>

div * {
    margin-bottom: 1rem;
}

</style>