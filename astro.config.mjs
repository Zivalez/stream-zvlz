import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    adapter: cloudflare(),
    vite: {
        define: {
            'import.meta.env.MD_URL': JSON.stringify(process.env.MD_URL || 'https://assets-cdn.zvlz.my.id/cloudstream.md'),
        }
    }
});
