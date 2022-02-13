<template>
    <div class="listing-card">
        <h4>{{ name }}</h4>
        <p v-if="userFirstName != null && userFirstName != ''">{{ userFirstName }} {{ userLastName }}</p>
    </div>
</template>

<script>

import axios from 'axios'

export default {

    name: "ListingCard",
    props: {
        name: String,
        user: String
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
        this.getUserInfo(this.user);
    }
}
</script>

<style scoped>
    .listing-card {
        display: block;
        margin: 0.5rem;
        padding: 1rem;
        border-radius: 12px;
        background-color: rgb(209, 209, 209);
        font-weight: 500;
    }

    .listing-card:hover {
        background-color: rgb(168, 168, 168);
    }
</style>