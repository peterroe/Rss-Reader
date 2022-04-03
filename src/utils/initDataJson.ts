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
      name: "少数派",
      path: "https://sspai.com/feed",
      icon: "i-carbon-rss",
    },
    {
      name: "36氪",
      path: "https://36kr.com/feed",
      icon: "i-carbon-star",
    },
    {
      name: "设计日报",
      path: "https://www.designernews.co/?format=rss",
      icon: "i-carbon-bat",
    },
    {
      name: "antfu",
      path: "https://antfu.me/feed.xml",
      icon: "i-carbon-3rd-party-connected",
    },
    {
      name: "机核",
      path: "https://www.gcores.com/rss",
      icon: "i-carbon-money",
    },
    {
      name: "Shadeed Blog",
      path: "https://ishadeed.com/feed.xml",
      icon: "i-carbon-earth",
    },
  ],
};

export async function initDataJson() {
  const store = useRssSource();

  const res = await readFileSync("rssSource.json");

  if (res) {
    const o: dataJsonType = JSON.parse(res as string).value;
    store.setData(o);
  } else {
    await writeFileSync({
      contents: JSON.stringify(rawData),
      path: "rssSource.json",
    });
  }
}
