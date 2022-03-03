<template>
    <div class="listing-card column">
        <div class="picture"></div>
        <div class="listing-card-info">
            <h3 class="name">{{ listing.name }}</h3>
            <p><a class="address" href="#">{{ listing.address }}</a><span class="distance-to-campus" v-if="listing.distanceToCampus"> · {{ listing.distanceToCampus }} mi to campus</span></p>
            <span class="month">
                {{ convertedStartDate.toLocaleString('en-us', { year: 'numeric', month: 'short' }) }}
                    – {{ convertedEndDate.toLocaleString('en-us', { year: 'numeric', month: 'short' })}}
            </span>
            <p><b>${{ listing.rent }}</b> / month · {{ listing.numRooms }} Bedrooms</p>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {

    name: "ListingCard",
    props: {
        name: String,
        listing: JSON
        // user: String,
    },
    data: () => ({
        userFirstName: '',
        userLastName: '',
        convertedStartDate: Date,
        convertedEndDate: Date
    }),
    methods: {
        deleteListing(listing) {
            axios.delete('http://' + window.location.hostname + ':3030/api/listings/' + listing).then(response => {
                console.log('Deleted listing')
                this.$emit('load-listings')
            });
        }
    },
    mounted() {
        this.getUserInfo(this.listing.user);
        this.convertedStartDate = new Date(this.listing.startDate);
        this.convertedEndDate = new Date(this.listing.endDate);
    }
}
</script>

<style scoped>
    .listing-card {
        /* display: block; */
        /* margin: 0.25rem; */
        margin-left: 15%;
        margin-right: 15%;
        /* padding: 0.75rem; */
        /* max-width: 25rem; */
        font-weight: 500;
        justify-content: center;
        /* max-width: 50rem; */
        /* align-self: center; */
    }

    .picture {
        background-color: rgb(219, 219, 219);
        min-height: 20rem;
        border-radius: 12px;
        max-width: 50rem;
    }

    /* Small screens */
    @media all and (max-width: 650px) {
        .listing-card {
            margin-left: 2%;
            margin-right: 2%;
        }
        .picture {
            min-height: 18rem;
        }
    }

    .listing-card * {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    /* .listing-card-info {
        margin-top: 0.5rem;
    } */

    .address {
        font-weight: 550;
        /* color: rgb(114, 114, 241); */
        color: rgb(212, 71, 71);
        text-decoration: none;
    }

    .address:hover {
        text-decoration: underline;
    }

    .distance-to-campus {
        font-weight: 400;
        color: rgb(51, 51, 51);
    }

    .user {
        text-decoration: none;
        color: black;
    }

    .user:hover {
        text-decoration: underline;
    }

    .picture:hover {
        background-color: rgb(235, 235, 235);
    }

    .month {
        color: black;
        /* padding: 0.35rem; */
        border-style: solid;
        border-width: 0.1rem;
        border-color: rgb(175, 175, 175);
        border-radius: 8px;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        /* font-weight: 550; */
    }

</style>