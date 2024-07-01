import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import remarkCodeTitle from 'remark-code-title';
import {  createHighlighter } from 'shiki';
import { addCopyButton } from 'shiki-transformer-copy-button';
import readingTime from './mdsvex-reading-time.js';


async function highlighter(code, lang = 'text') {
	const highlighter = await createHighlighter({
		themes: ['github-dark-default','github-light'],
		langs: ['javascript', 'typescript','html','css'],
	});
	await highlighter.loadLanguage('javascript', 'typescript','html','css');
	const html = escapeSvelte(highlighter.codeToHtml(code, { lang, themes: {light:'github-light', dark: 'github-dark-default'}, transformers: [addCopyButton(code)] }));
	return `{@html \`${html}\` }`;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			highlight: { highlighter },
			smartypants: true,
			remarkPlugins: [
				remarkCodeTitle,
				readingTime,
			]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$assets: 'src/lib/assets',
			$types: 'src/lib/types',
			$actions: 'src/lib/actions',
			$helpers: 'src/lib/helpers',
			$stores: 'src/lib/stores'
		}
	}
};

export default config;
