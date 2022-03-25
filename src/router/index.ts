import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/rssReader",
      children: [
        {
          path: "/rssReader",
          component: () => import("@/views/RssReader.vue"),
        },
      ],
    },
  ],
});

export default router;
