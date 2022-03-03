<template>
    <div class="listings-gallery column">
        <div class="row listings-header">
            <h2>Listings:</h2>
            <div class="listings-header-options">
                <select v-model="listingQuery.user" label="User">
                    <option v-for="user in users" :value="{ _id: user._id }" :key="user._id">
                        {{ user.firstName }} {{ user.lastName }}
                    </option>
                </select>
                <input type="number" v-model="listingQuery.minRent" placeholder="Min. Rent">
                <input type="number" v-model="listingQuery.numRooms" placeholder="Number of Rooms">
                <a @click.native="this.searchListings(listingQuery)" href="#">Apply Filters</a>
                <a @click.native="this.$emit('load-listings')" href="#">Refresh</a>
            </div>
        </div>
        <ListingCard class="ListingCard" v-for="listing in allListings" :key="listing._id" :listing="listing" @load-listings="this.$emit('load-listings')"></ListingCard>
    </div>
</template>

<script>

import ListingCard from '../components/ListingCard.vue'
import axios from 'axios'

export default {
    name: "ListingGallery",
    data: () => ({
        listingQuery: {
            user: String,
            minRent: Number,
            maxRent: Number
        },
        listings: Array
    }),
    components: {
        ListingCard
    },
    props: {
        allListings: Array,
        users: Array
    },
    methods: {
        searchListings(query) {
            axios.get('http://' + window.location.hostname + ':3030/api/listings/search', {
                params: {
                    user: query.user._id
                }
            }).then(response => {
                console.log(response.data)
                this.listings = response.data;
            });
        }
    },
    mounted() {
        this.$emit('load-listings');
        this.listings = this.allListings;
    }
}
</script>

<style scoped>
    .listings-header {
        justify-content: space-between;
    }

    .listings-header-options * {
        margin-left: 2rem;
    }

    .listings-header * {
        margin-top: 1rem;
    }

    
</style>