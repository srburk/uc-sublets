<template>
    <div class="column listings-gallery">
        <div class="row listings-header">
            <h2>Listings:</h2>
            <div class="listings-header-options">
                <!-- <select v-model="listingQuery.user" label="User">
                    <option v-for="user in users" :value="{ _id: user._id }" :key="user._id">
                        {{ user.firstName }} {{ user.lastName }}
                    </option>
                </select> -->
                <input type="number" v-model="listingQuery.minRent" placeholder="Min Rent">
                <input type="number" v-model="listingQuery.maxRent" placeholder="Max Rent">
                <input type="number" v-model="listingQuery.numRooms" placeholder="Number of Rooms">
                <a @click.native="this.searchListings(listingQuery)" href="#">Apply</a>
                <a @click.native="this.listingQuery = {user: String, minRent: Number, maxRent: Number, numRooms: Number}; this.searchListings(listingQuery)" href="#">Clear</a>
            </div>
        </div>

        <ListingCard class="ListingCard" v-for="listing in listings" :key="listing._id" :listing="listing"></ListingCard>
    </div>
</template>

<script>

import ListingCard from '../components/ListingCard.vue'
import axios from 'axios'

export default {
    name: "Listings",
    data: () => ({
        listingQuery: {
            // user: String,
            minRent: Number,
            maxRent: Number,
            numRooms: Number
        },
        listings: Array
    }),
    components: {
        ListingCard
    },
    methods: {
        searchListings(query) {
            axios.get('http://' + window.location.hostname + ':3030/api/listings/search', {
                params: {
                    // user: query.user._id,
                    ...(query.minRent != Number ? {minRent: query.minRent} : {}),
                    ...(query.maxRent != Number ? {maxRent: query.maxRent} : {}),
                    ...(query.numRooms != Number ? {numRooms: query.numRooms} : {}),
                }
            }).then(response => {
                this.listings = response.data;
            });
        }
    },
    mounted() {
        this.searchListings(this.listingQuery);
    }
}
</script>

<style scoped>

    .listings-gallery {
        margin-top: 0;
    }
    .listings-header {
        justify-content: space-between;
    }

    .listings-header-options * {
        margin-left: 2rem;
    }

    .listings-header h2, div {
        margin-top: 1rem;
    }

    
</style>