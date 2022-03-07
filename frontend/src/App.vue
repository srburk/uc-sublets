<template>
  <div>
    <MainHeader />

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
// components
import MainHeader from "./components/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>

<style>
/* Global CSS */
#app {
  font-family: Avenir Next, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  position: relative;
  top: 3rem;
  z-index: 1;
  padding: 2rem;
}

/* Flex Classes */
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
