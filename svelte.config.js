import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/lib/components',
			$css: './src/lib/css/index.css',
			$types: './src/lib/types',
			$routes: './src/routes'
		}
	}
};

export default config;
