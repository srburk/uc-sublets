<template>
    <div clas="column">
        <h2>Add Listing:</h2>
        <input type="text" placeholder="Title"> 
        <input type="text" placeholder="Address">
        <input type="text" placeholder="User">
        <button @click.native="toggleAddListingView()">Add Listing</button>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "AddListingView",
    methods: {
        toggleAddListingView() {
            this.$emit('toggle-add-listing-view');
            console.log('Sent toggle-add-listing-view');
        }
    }
}

</script>

<style scoped>

</style>