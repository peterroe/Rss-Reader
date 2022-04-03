import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import { useRssSource } from "@/store/rssSource";

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

router.beforeEach(() => {
  const store = useRssSource();
  store.initState();
});

export default router;
