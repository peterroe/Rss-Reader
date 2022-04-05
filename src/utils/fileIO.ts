// https://tauri.studio/docs/api/js/modules/fs
import { readTextFile, writeFile } from "@tauri-apps/api/fs";
import type { FsTextFileOption, FsOptions } from "@tauri-apps/api/fs";
// https://tauri.studio/docs/api/js/modules/path
import { appDir, join } from "@tauri-apps/api/path";
// https://tauri.studio/docs/api/js/modules/notification
//import { sendNotification } from "@tauri-apps/api/notification";
import type { dataJsonType } from "./initDataJson";
import { rssType } from "@/types";

export async function writeFileSync(
  file: FsTextFileOption,
  options?: FsOptions
): Promise<Array<rssType>> {
  console.log("写入文件");
  const basePath = await appDir();
  const filePath = await join(basePath, file.path);

  return writeFile({
    contents: file.contents,
    path: filePath,
  })
    .then((value) => {
      console.log("file write success");
      return JSON.parse(file.contents).value;
    })
    .catch((err) => {
      console.log("file write error");
    });
}

export async function readFileSync(fileName: string): Promise<dataJsonType> {
  const basePath = await appDir();
  const filePath = await join(basePath, fileName);

  return readTextFile(filePath)
    .then((value) => {
      return JSON.parse(value);
    })
    .catch((err) => {
      console.log("initDataJson:");
    });
}

export async function appendFileSync({
  value,
  fileName,
}: {
  value: rssType;
  fileName: string;
}): Promise<void> {
  console.log(value, fileName, "etc");
  return readFileSync(fileName).then((res) => {
    res.value.push(value);
    writeFileSync({
      contents: JSON.stringify(res),
      path: fileName,
    });
  });
}
