import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['/node_modules']
		}
	}),
	css: (css) => {
		css.write('public/bundle.css');
	},
	kit: {
		adapter: adapter({
			strict: false,}
		)
	}
};

export default config;
