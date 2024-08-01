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
import relativeImages from 'mdsvex-relative-images';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';

async function highlighter(code, lang = 'text') {
	const highlighter = await createHighlighter({
		themes: ['github-light', 'github-dark-default'],
		langs: ['javascript', 'typescript', 'html', 'css', 'bash']
	});
	await highlighter.loadLanguage('javascript', 'typescript', 'html', 'css', 'bash');
	const html = escapeSvelte(
		highlighter.codeToHtml(code, {
			lang,
			themes: { light: 'github-light', dark: 'github-dark-default' },
			transformers: [addCopyButton(code)],
			colorReplacements: {
				'#0d1117': '#15151e'
			}
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
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						properties: {
							class: 'anchor'
						},
						content: fromHtmlIsomorphic(
							'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
							{ fragment: true }
						).children
					}
				]
			],
			remarkPlugins: [
				relativeImages,
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
