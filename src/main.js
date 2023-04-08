import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/main.css";
import "@egjs/vue3-flicking/dist/flicking.css";

createApp(App).use(router).mount("#app");
