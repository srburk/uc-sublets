<template>
    <div class="add-listing-view">
        <h2>Add Listing:</h2>
        <input type="text" v-model="name" placeholder="Name"> 
        <input type="text" placeholder="Address">
        <select v-model="selectedUser" label="User">
            <option v-for="user in users" :value="{ _id: user._id }" :key="user._id">
                {{ user.firstName }} {{ user.lastName }}
            </option>
        </select>

        <button @click.native="this.$emit('toggle-add-listing-view')">Cancel</button>
        <button @click.native="addListing()">Add Listing</button>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "AddListingView",
    data: () => ({
        name: '',
        selectedUser: ''
    }),
    props: {
        users: Array
    },
    methods: {
        addListing() {
            axios.post('http://localhost:3030/api/listings', {
                name: this.name,
                userID: this.selectedUser._id
            }).then(response => {
                console.log(response.data);
                this.$emit('toggle-add-listing-view');
                console.log('Sent toggle-add-listing-view');
            });
        }
    }
}

</script>

<style scoped>
    .add-listing-view * {
        margin: 0.5rem;;
    }

    .add-listing-view {
        top: 6rem;

        position: fixed;
        height: 20rem;
        background-color: rgb(212, 212, 212);
        z-index: 2;
        padding: 2rem;
        border-radius: 2rem;
        border-style: solid;
        border-color: gray;

        margin-left: 6rem;

        width: 450px;
        height: 300px;
    }
</style>