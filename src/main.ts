import { createApp } from "vue";
import App from "./App.vue";
// https://router.vuejs.org/installation.html
import router from "./router/index";
// https://pinia.vuejs.org/introduction.html
import { createPinia } from "pinia";
// https://github.com/peterroe/vue-img-lazy-tiny
import vilt from "vue-img-lazy-tiny";

// https://github.com/UngeUI/ungeui
import UngeUI from "ungeui";
import "ungeui/dist/style.css";
import "@/style/ungeuiShims.css";

// windicss
// https://cn.windicss.org/guide/
import "windi.css";

// unocss
// https://github.com/unocss/unocss
import "uno.css";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(vilt)
  .use(UngeUI)
  .mount("#app");

/* Todo:
 * make a icon List when add rss source
 * ungeui js -> ts
 * ungeui message.config -> feat: props.text
 */
