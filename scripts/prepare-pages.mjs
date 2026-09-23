import { cp, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { basename } from 'node:path';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
// Copy only generated pages and assets; never copy source files or dependencies.
for (const entry of await readdir(output, { withFileTypes: true })) {
  if ((entry.isFile() && entry.name.endsWith('.html')) || (entry.isDirectory() && entry.name === 'assets')) {
    await cp(new URL(entry.name, output), new URL(entry.name, root), {
      recursive: true,
      filter: path => !basename(path).startsWith('.'),
    });
  }
}
await writeFile(new URL('.nojekyll', root), '');
console.log(`Prepared main / (root) for GitHub Pages: ${fileURLToPath(root)}`);
