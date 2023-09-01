import * as fs from 'fs';
import replace from 'replace';
import { globSync } from 'glob';

export const findAndReplace = (
  filesPaths: string,
  findStr: string,
  replaceStr: string,
) => {
  const files = globSync(filesPaths);
  files.forEach((item, index, array) => {
    console.log(item + ' found');
    // Find and Replace string
    replace({
      regex: findStr,
      replacement: replaceStr,
      paths: [item],
      recursive: true,
      silent: true,
    });
    console.log('Replacement complete');
  });
};

export const findAndRename = (
  filesPaths: string,
  findStr: string,
  replaceStr: string,
) => {
  const files = globSync(filesPaths);
  files.forEach((item, index, array) => {
    console.log(item + ' found');
    // Find and Replace string
    const newName = item.replace(findStr, replaceStr);
    fs.renameSync(item, newName);
    console.log('Rename complete');
  });
};
