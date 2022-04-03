// https://tauri.studio/docs/api/js/modules/http#fetch
import { fetch } from "@tauri-apps/api/http";
// https://tauri.studio/docs/api/js/modules/notification#sendNotification
import { sendNotification } from "@tauri-apps/api/notification";
// https://github.com/peterroe/xtj
import XmlToJs from "xtj";
import { message } from "ungeui";

export function getRssMessage(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      // https://tauri.studio/docs/api/js/enums/http.ResponseType
      responseType: 2,
      method: "GET",
    })
      .then((res) => {
        return XmlToJs(res.data as string);
      })
      .then((target: { rss: Array<any> }) => {
        resolve(target.rss[0].channel);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function postRssMessage(url: string = "") {
  getRssMessage(url)
    .then((value) => {
      // get successfully
      sendNotification({
        title: "Rss-Reader hint:",
        body: "Added successfully",
      });
    })
    .catch((err) => {
      // get fail
      console.log(url);
      message({
        text: "Please make sure the xml url is correct",
        initOffset: 30,
        icon: "danger",
      });
    });
}
