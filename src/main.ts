import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";
import vilt from "vue-img-lazy-tiny";
import { writeFileSync } from "./utils/fileIO";
//windicss
import "windi.css";

//unocss
import "uno.css";

createApp(App).use(router).use(createPinia()).use(vilt).mount("#app");

writeFileSync({
  contents: "hello",
  path: "test.txt",
}).then((value) => {
  console.log(value);
});
