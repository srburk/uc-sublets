<template>
  <div class="add-user-view">
    <h2>Add User:</h2>
    <input type="text" v-model="firstName" placeholder="First Name" />
    <input type="text" v-model="lastName" placeholder="Last Name" />
    <input type="email" v-model="email" placeholder="Email" />

    <select v-model="schoolYear" name="schoolYear">
      <option value="1">First Year</option>
      <option value="2">Second Year</option>
      <option value="3">Third Year</option>
      <option value="4">Fourth Year</option>
      <option value="5">Fifth Year</option>
    </select>
    <button @click.native="addUser()">Add User</button>
    <button @click.native="this.$emit('toggle-add-user-view')">Cancel</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddUserView",
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    schoolYear: Number,
  }),
  methods: {
    addUser() {
      axios
        .post("http://" + window.location.hostname + ":3030/api/users/", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          schoolYear: this.schoolYear,
        })
        .then((response) => {
          this.$emit("toggle-add-user-view");
          console.log(response.data);
          console.log("Sent toggle-add-user-view");
        });

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.schoolYear = Number;
    },
  },
};
</script>

<style scoped>
.add-user-view * {
  margin: 0.5rem;
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
