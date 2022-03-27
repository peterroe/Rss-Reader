import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
//ungeui
import UngeUI from "ungeui";
import "ungeui/dist/style.css";

//windicss
import "windi.css";

//unocss
import "uno.css";

//pinia
import { createPinia } from "pinia";

createApp(App).use(router).use(createPinia()).use(UngeUI).mount("#app");
