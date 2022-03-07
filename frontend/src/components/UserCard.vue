<template>
  <div @click.native="deleteUser(userID)" class="user-card">
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserCard",
  props: {
    firstName: String,
    lastName: String,
    userID: String,
  },
  methods: {
    deleteUser(userID) {
      axios
        .delete(
          "http://" + window.location.hostname + ":3030/api/users/" + userID
        )
        .then((response) => {
          console.log(response.data);
          this.$emit("reload-users");
        });
    },
  },
};
</script>

<style scoped>
.user-card {
  display: block;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgb(209, 209, 209);
  font-weight: 500;
}

.user-card:hover {
  background-color: rgb(168, 168, 168);
}
</style>
