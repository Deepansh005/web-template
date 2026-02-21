import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                wire: resolve(__dirname, 'wire.html'),
                switches: resolve(__dirname, 'switches.html'),
                mcb: resolve(__dirname, 'mcb.html'),
                holders: resolve(__dirname, 'light-holders.html'),
            },
        },
    },
});
