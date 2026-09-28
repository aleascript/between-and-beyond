import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteImages = path.join(projectRoot, 'static', 'img', 'site');
const variants = path.join(siteImages, 'logos');
const themes = ['light', 'dark'];

// Every style ships as a pair: logos/logo_{light,dark}_theme_<style>.svg
const styles = [
  ...new Set(
    (await fs.readdir(variants))
      .map((file) => file.match(/^logo_(?:light|dark)_theme_(.+)\.svg$/)?.[1])
      .filter(Boolean),
  ),
].sort();

const style = process.argv[2];
if (!style || !styles.includes(style)) {
  console.error(`Usage: npm run logo -- <style>\nStyles: ${styles.join(', ')}`);
  process.exit(style ? 1 : 0);
}

for (const theme of themes) {
  await fs.copyFile(
    path.join(variants, `logo_${theme}_theme_${style}.svg`),
    path.join(siteImages, `logo_${theme}_theme.svg`),
  );
}

console.log(`Logo set to "${style}" (static/img/site/logo_{light,dark}_theme.svg)`);
