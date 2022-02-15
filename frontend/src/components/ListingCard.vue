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

// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

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
        getUserInfo(user) {
            axios.get('http://localhost:3030/api/users/' + user).then(response => {
                this.userFirstName = response.data.firstName;
                this.userLastName = response.data.lastName;
            });
        }
    },
    // MONTH_NAMES: monthNames,
    mounted() {
        this.getUserInfo(this.listing.user);
        this.convertedStartDate = new Date(this.listing.startDate);
        this.convertedEndDate = new Date(this.listing.endDate);
    }
}
</script>

<style scoped>
    .listing-card {
        display: block;
        margin: 0.25rem;
        /* padding: 0.75rem; */
        /* padding-left: 1.5rem; */
        /* border-radius: 12px;
        background-color: rgb(209, 209, 209); */
        max-width: 25rem;
        font-weight: 500;
    }

    .listing-card * {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .listing-card-info {
        margin-top: 0.75rem;
    }

    .address {
        font-weight: 550;
        color: rgb(114, 114, 241);
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

    .picture {
        background-color: rgb(219, 219, 219);
        min-height: 13rem;
        border-radius: 12px;
    }

    .month {
        color: black;
        /* padding: 0.35rem; */
        border-style: solid;
        border-width: 0.1rem;
        border-color: rgb(175, 175, 175);
        border-radius: 8px;
        padding-left: 1rem;
        padding-right: 1rem;
        /* font-weight: 550; */
    }

</style>