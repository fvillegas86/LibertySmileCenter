// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://libertysmilecenter.com',


  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [{
    name: 'site-index',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const output = fileURLToPath(dir);
        const urls = [];
        async function collect(folder) {
          for (const entry of await readdir(folder, { withFileTypes: true })) {
            const target = path.join(folder, entry.name);
            if (entry.isDirectory()) await collect(target);
            else if (entry.name.endsWith('.html')) {
              const html = await readFile(target, 'utf8');
              if (!html.includes('content="noindex')) {
                const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
                if (canonical) urls.push(canonical[1]);
              }
            }
          }
        }
        await collect(output);
        await writeFile(path.join(output, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + [...new Set(urls)].sort().map(url => `<url><loc>${url.replace(/&/g, '&amp;')}</loc></url>`).join('') + '</urlset>');
      }
    }
  }, partytown({
    config: {
      forward: ['dataLayer.push'],
    },
  }), icon()]
});