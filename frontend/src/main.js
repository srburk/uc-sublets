import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import SignUp from "./views/SignUp.vue";
import NewListing from "./views/NewListing.vue";
import ListingsGallery from "./views/ListingsGallery.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/listings",
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/new-listing",
    name: "NewListing",
    component: NewListing,
  },
  {
    path: "/listings",
    name: "Listings",
    component: ListingsGallery,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
