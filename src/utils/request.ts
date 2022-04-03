// https://tauri.studio/docs/api/js/modules/http#fetch
import { fetch } from "@tauri-apps/api/http";
// https://github.com/peterroe/xtj
import XmlToJs from "xtj";

export default function getRssMessage(url: string): Promise<any> {
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
