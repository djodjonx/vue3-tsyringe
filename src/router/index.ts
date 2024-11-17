import { createMemoryHistory, createRouter } from "vue-router";
import { disposableEmitter } from "../Packages/Common/Infrastructure/WithState";

import HomeView from "../views/home.vue";
import AboutView from "../views/about.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/about", component: AboutView, name: "about" },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to) => {
  console.log("change");
  disposableEmitter.emit("reset", to.name as string);
});
