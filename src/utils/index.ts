export type itemType = {
  title?: string;
  description?: string;
  link?: string;
  guid?: string;
  pubDate?: string;
  anthor?: string;
  item?: Array<any>;
};

export type mainIdeaType = {
  title?: string;
  description?: string;
  link?: string;
  pubDate?: string;
  lastBuildDate?: string;
};

export function getItems(arr: Array<any>) {
  let res: Array<itemType> = [];
  arr.forEach((element) => {
    if ("item" in element) {
      const it = element.item.reduce((pre, cur) => {
        return Object.assign(pre, cur);
      }, {});
      res.push(it);
    }
  });
  return res;
}

export function getMainIdea(arr: Array<any>) {
  let res: mainIdeaType = {};
  arr.forEach((element) => {
    if (element.title) {
      res.title = element.title;
    }
    if (element.description) {
      res.description = element.description;
    }
    if (element.link) {
      res.link = element.link;
    }
    if (element.pubDate) {
      res.pubDate = element.pubDate;
    }
    if (element.lastBuildDate) {
      res.lastBuildDate = element.lastBuildDate;
    }
  });
  return res;
}
