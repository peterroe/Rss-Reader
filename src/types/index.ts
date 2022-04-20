/* example:
 * id: 1,
 * name: antfu
 * path: https://antfu.me/feed.xml
 * icon: i-carbon-xxx
 */
export type rssType = {
  id: number;
  name: string;
  path: string;
  icon?: string;
  number?: number;
};

/*
 * title: Introduction to Vitest - Vue.js Nation,
 * description: Introduction to Vitest - Vue.js Nation 2022
 * link: https://antfu.me/posts/introduction-to-vitest-vue-nation-2022
 * pubDate: Mon, 11 Apr 2022 02:12:16 GMT
 */
export type itemType = {
  title?: string;
  description?: string;
  link?: string;
  guid?: string; //same as link
  pubDate?: string;
  author?: string;
};

/*
 * title: Anthony Fu
 * description: Anthony Fu' Blog
 * lastBuildDate: Mon, 11 Apr 2022 02:12:16 GMT
 */

export type mainIdeaType = {
  title?: string;
  description?: string;
  link?: string;
  pubDate?: string;
  lastBuildDate?: string;
};

export type dataJsonType = {
  name: string;
  value: Array<rssType>;
};
