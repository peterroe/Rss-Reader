import { fetch } from "@tauri-apps/api/http";
import XmlToJs from "xtj";

export default function getRssMessage(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      responseType: 2,
      method: "GET",
    })
      .then((res) => {
        return XmlToJs(res.data as string);
      })
      .then((target) => {
        resolve(target);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
