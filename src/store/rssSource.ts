import { initDataJson } from "@/utils/initDataJson";
import { defineStore } from "pinia";

export const useRssSource = defineStore("rssSource", {
  state: () => {
    return {
      path: "https://antfu.me/feed.xml",
      title: "Rss Reader",
      data: [],
    };
  },
  actions: {
    initState() {
      initDataJson();
    },
    setPath(path) {
      this.path = path;
    },
    setTitle(title) {
      this.title = title;
    },
    setData(data) {
      this.data = data;
    },
  },
});
