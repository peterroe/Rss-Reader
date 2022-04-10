import { initDataJson } from "@/utils/initDataJson";
import { defineStore } from "pinia";
import { rssType } from "@/types";
import { getRssMessage } from "./../utils/request";
import { appendFileSync } from "@/utils/fileIO";

export type rssSourceType = {
  id: number;
  path: string;
  title: string;
  data: rssType[];
};

export const useRssSource = defineStore("rssSource", {
  state: () => {
    return {
      id: 0,
      path: "",
      title: "Rss Reader",
      data: [],
    } as rssSourceType;
  },
  actions: {
    async initState() {
      await initDataJson();
      this.setId(this.data[0]?.id);
      this.setPath(this.data[0]?.path);
      this.setTitle(this.data[0]?.name);
    },
    setId(id: number) {
      this.id = id;
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
      return getRssMessage(path).then(() => {
        const id = this.data[this.data.length - 1]?.id + 1;
        return appendFileSync({
          value: {
            id,
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
