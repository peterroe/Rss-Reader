import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
//ungeui
import UngeUI from "ungeui";
import "ungeui/dist/style.css";

//windicss
import "windi.css";

createApp(App).use(router).use(UngeUI).mount("#app");
