import "reflect-metadata";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import UserBuilder from "./Packages/User/Presentation/Builder/UserBuilder";
import { router } from "./router";

new UserBuilder().init();

createApp(App).use(router).mount("#app");
