<template>
    <div class="column">

        <h1>Add User:</h1>
        <input type="text" v-model="firstName" placeholder="First Name">
        <input type="text" v-model="lastName" placeholder="Last Name">
        <input type="email" v-model="email" placeholder="Email">

        <select v-model="schoolYear" name="schoolYear">
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
            <option value="5">Fifth Year</option>
        </select>
        
        <div class="row" style="justify-content: space-between">
            <router-link to="/listings">
                <button>Cancel</button>
            </router-link>

            <router-link to="/listings">
                <button @click.native="addUser()">Add Listing</button>
            </router-link>
        </div>
           
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "SignUp",
    data: () => ({
        firstName: '',
        lastName: '',
        email: '',
        schoolYear: Number
    }),
    methods: {
        addUser() {
            axios.post('http://' + window.location.hostname + ':3030/api/users/', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                schoolYear: this.schoolYear
            }).then(response => {
                console.log(response.data);
            });

            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.schoolYear = Number;
        }
    }
}
</script>

<style scoped>

div * {
    margin-bottom: 1rem;
}

</style>