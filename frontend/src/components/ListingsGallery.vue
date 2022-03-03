<template>
    <div class="listings-gallery column">
        <div class="row listings-header">
            <h2>All Listings:</h2>
            <div class="listings-header-options">
                <a @click.native="this.$emit('load-listings')" href="#">Filters</a>
                <a @click.native="this.$emit('load-listings')" href="#">Refresh</a>
            </div>
        </div>
        <ListingCard class="ListingCard" v-for="listing in allListings" :key="listing._id" :listing="listing" @load-listings="this.$emit('load-listings')"></ListingCard>
    </div>
</template>

<script>

import ListingCard from '../components/ListingCard.vue'

export default {
    name: "ListingGallery",
    components: {
        ListingCard
    },
    props: {
        allListings: Array
    },
    mounted() {
        this.$emit('load-listings');
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