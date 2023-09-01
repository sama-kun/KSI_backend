import * as fs from 'fs';
import { findAndRename, findAndReplace } from './lib';
import usePrompt from 'prompt-sync';

const prompt = usePrompt();
const newNamePascal = prompt('What is ClassName?: ');
const newNameKebab = newNamePascal
  .replace(/([a-z0–9])([A-Z])/g, '$1-$2')
  .toLowerCase();

const main = async () => {
  const srcDir = `../src/modules/xxx`;
  const destDir = `../src/modules/${newNameKebab}`;

  if (fs.existsSync(destDir)) fs.rmSync(destDir, { recursive: true });
  fs.mkdirSync(destDir);
  fs.cpSync(srcDir, destDir, { recursive: true });

  findAndReplace(`${destDir}/**/*`, 'Xxx', newNamePascal);
  findAndReplace(`${destDir}/**/*`, 'xxx', newNameKebab);
  findAndReplace(`${destDir}/**/*`, '// @ts-ignore', '');
  findAndRename(`${destDir}/**/*`, 'xxx', newNameKebab);
};

void main();
