import { initDataJson } from "@/utils/initDataJson";
import { defineStore } from "pinia";
import { rssType } from "@/types";
import { getRssMessage } from "./../utils/request";
import { appendFileSync } from "@/utils/fileIO";

export type rssSourceType = {
  path: string;
  title: string;
  data: rssType[];
};

export const useRssSource = defineStore("rssSource", {
  state: () => {
    return {
      path: "",
      title: "Rss Reader",
      data: [],
    } as rssSourceType;
  },
  actions: {
    async initState() {
      await initDataJson();
      this.setPath(this.data[0]?.path);
      this.setTitle(this.data[0]?.name);
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
    appendData({ name, path, icon }: rssType) {
      return getRssMessage(path).then((value) => {
        return appendFileSync({
          value: {
            name,
            path,
            icon,
          },
          fileName: "rssSource.json",
        });
      });
    },
    deletePath(path) {
      this.data = this.data.filter((item) => item.path !== path);
    },
  },
});
