<template>
    <div>
        <h2>Add User:</h2>
        <input type="text" v-model="firstName" placeholder="First Name">
        <input type="text" v-model="lastName" placeholder="Last Name">
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
                console.log('Sent toggle-add-user-view');
            });
        }
    }
}

</script>

<style scoped>
    * {
        margin: 0.5rem;;
    }
</style>