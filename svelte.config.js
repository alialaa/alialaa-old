import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import remarkCodeTitle from 'remark-code-title';
import { createHighlighter } from 'shiki';
import { addCopyButton } from 'shiki-transformer-copy-button';
import readingTime from './mdsvex-reading-time.js';
import excerpt from './mdsvex-excerpt.js';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import unWrapImages from 'remark-unwrap-images';
import remarkCustomBlocks from 'remark-custom-blocks';
import toc from './mdsvex-toc.js';

async function highlighter(code, lang = 'text') {
	const highlighter = await createHighlighter({
		themes: ['github-light', 'github-dark-default'],
		langs: ['javascript', 'typescript', 'html', 'css']
	});
	await highlighter.loadLanguage('javascript', 'typescript', 'html', 'css');
	const html = escapeSvelte(
		highlighter.codeToHtml(code, {
			lang,
			themes: { light: 'github-light', dark: 'github-dark-default' },
			transformers: [addCopyButton(code)]
		})
	);
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
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
			remarkPlugins: [
				remarkCodeTitle,
				unWrapImages,
				readingTime,
				excerpt,
				toc,
				// remarkToc,
				[
					remarkCustomBlocks,
					{
						lead: {
							classes: 'lead-p'
						}
					}
				]
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
