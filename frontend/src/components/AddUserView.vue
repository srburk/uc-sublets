<template>
    <div class="add-user-view">
        <h2>Add User:</h2>
        <input type="text" v-model="firstName" placeholder="First Name">
        <input type="text" v-model="lastName" placeholder="Last Name">
        <button @click.native="this.$emit('toggle-add-user-view')">Cancel</button>
        <button @click.native="addUser()">Add User</button>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "AddUserView",
    data: () => ({
        firstName: '',
        lastName: ''
    }),
    methods: {
        addUser() {
            axios.post('http://localhost:3030/api/users', {
                firstName: this.firstName,
                lastName: this.lastName
            }).then(response => {
                this.$emit('toggle-add-user-view');
                console.log(response.data);
                console.log('Sent toggle-add-user-view');
            });
        }
    }
}

</script>

<style scoped>
    .add-user-view * {
        margin: 0.5rem;;
    }

    .add-user-view {
        top: 6.5rem;

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