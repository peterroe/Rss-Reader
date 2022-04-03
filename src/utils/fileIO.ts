import { writeFile } from "@tauri-apps/api/fs";
import { appDir } from "@tauri-apps/api/path";
import type { FsTextFileOption, FsOptions } from "@tauri-apps/api/fs";

function getAppDir(): Promise<string> {
  return new Promise((resolve, reject) => {
    appDir()
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function writeFileSync(
  file: FsTextFileOption,
  options?: FsOptions
): Promise<void> {
  const basePath = await getAppDir();

  return new Promise((res, rej) => {
    writeFile({
      contents: file.contents,
      path: basePath + file.path,
    })
      .then((value) => {
        res(value);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
