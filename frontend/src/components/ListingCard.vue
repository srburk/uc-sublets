<template>
    <div class="listing-card">
        <h3 class="name">{{ listing.name }}</h3>
        <a class="address" href="#">{{ listing.address }}</a>
        <div class="row listing-card-info-bar">
            <p><b>${{ listing.rent }}</b> / month · {{ listing.numRooms }} Bedrooms</p>
            <a class="user" href="#"> {{ userFirstName }} {{ userLastName }}</a>
        </div>
        <p class="distance-to-campus" v-if="listing.distanceToCampus">{{ listing.distanceToCampus }} miles from campus</p>
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
        userLastName: ''
    }),
    methods: {
        getUserInfo(user) {
            axios.get('http://localhost:3030/api/users/' + user).then(response => {
                this.userFirstName = response.data.firstName;
                this.userLastName = response.data.lastName;
            });
        }
    },
    mounted() {
        this.getUserInfo(this.listing.user);
    }
}
</script>

<style scoped>
    .listing-card {
        display: block;
        margin: 0.5rem;
        padding: 0.75rem;
        padding-left: 1.5rem;
        border-radius: 12px;
        background-color: rgb(209, 209, 209);
        font-weight: 500;
    }

    .listing-card:hover {
        background-color: rgb(201, 201, 201);
    }

    .listing-card * {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
    }

    .listing-card-info-bar {
        justify-content: space-between;
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

</style>