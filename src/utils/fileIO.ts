import { readTextFile, writeFile } from "@tauri-apps/api/fs";
import { appDir, join } from "@tauri-apps/api/path";
import { sendNotification } from "@tauri-apps/api/notification";
import type { FsTextFileOption, FsOptions } from "@tauri-apps/api/fs";

export async function writeFileSync(
  file: FsTextFileOption,
  options?: FsOptions
): Promise<void> {
  console.log("写入文件");
  const basePath = await appDir();
  const filePath = await join(basePath, file.path);
  return writeFile({
    contents: file.contents,
    path: filePath,
  })
    .then((value) => {
      sendNotification({
        title: "文件写入成功",
        body: `${filePath}`,
      });
    })
    .catch((err) => {
      sendNotification({
        title: "文件写入失败",
        body: err.message,
      });
    });
}

export async function readFileSync(fileName: string): Promise<string | void> {
  const basePath = await appDir();
  const filePath = await join(basePath, fileName);

  // const contents = await readTextFile(filePath)
  return readTextFile(filePath)
    .then((value) => {
      sendNotification({
        title: "文件读取成功",
        body: `${value}`,
      });
      return value;
    })
    .catch((err) => {
      sendNotification({
        title: "文件读取失败",
        body: err.message,
      });
    });
}
