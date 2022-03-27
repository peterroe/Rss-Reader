import { defineStore } from "pinia";

export const useRssSource = defineStore("rssSource", {
  state: () => {
    return {
      path: "",
    };
  },
  actions: {
    setPath(path) {
      console.log(
        "%c [ path ]-11",
        "font-size:13px; background:pink; color:#bf2c9f;",
        path
      );
      this.path = path;
    },
  },
});
