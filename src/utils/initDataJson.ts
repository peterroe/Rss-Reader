import type { rssType } from "@/types";
import { writeFileSync, readFileSync } from "./fileIO";
import { useRssSource } from "@/store/rssSource";

export type dataJsonType = {
  name: string;
  value: Array<rssType>;
};

const rawData: dataJsonType = {
  name: "rssSourcePaths",
  value: [
    {
      id: 1,
      name: "少数派",
      path: "https://sspai.com/feed",
      icon: "i-carbon-contour-finding",
    },
    {
      id: 2,
      name: "36氪",
      path: "https://36kr.com/feed",
      icon: "i-carbon-linux",
    },
    {
      id: 3,
      name: "设计日报",
      path: "https://www.designernews.co/?format=rss",
      icon: "i-carbon-bat",
    },
    {
      id: 4,
      name: "antfu",
      path: "https://antfu.me/feed.xml",
      icon: "i-carbon-navaid-tacan",
    },
    {
      id: 5,
      name: "机核",
      path: "https://www.gcores.com/rss",
      icon: "i-carbon-money",
    },
    {
      id: 6,
      name: "Shadeed Blog",
      path: "https://ishadeed.com/feed.xml",
      icon: "i-carbon-earth",
    },
  ],
};

export async function initDataJson() {
  const store = useRssSource();

  const res = await readFileSync("rssSource.json");

  if (res as dataJsonType) {
    store.setData(res?.value);
  } else {
    writeFileSync({
      contents: JSON.stringify(rawData),
      path: "rssSource.json",
    }).then((value) => {
      store.setData(value);
    });
  }
}
