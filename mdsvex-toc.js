// https://github.com/pngwn/MDsveX/issues/455#issuecomment-1336534743

import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
const slugs = new GithubSlugger();

export default function toc() {
	return function (tree, file) {
		const toc = [];
		slugs.reset();
		visit(tree, 'heading', function (node) {
			if (node.depth >= 2) {
				const text = node.children.find((c) => {
					return c.type === 'text';
				});
				// console.log(node);
				toc.push({
					id: slugs.slug(text ? text.value : ''),
					text: text ? text.value : '',
					depth: node.depth
				});
			}
			// if (headingRank(node) >= 2) {
			// 	// console.log(node.children);
			// 	const text = node.children.find((c) => {
			// 		return c.type === 'text';
			// 	});
			// 	toc.push({
			// 		id: node.properties.id,
			// 		text: text ? text.value : '',
			// 		rank: headingRank(node)
			// 	});
			// }
		});
		file.data.fm = { ...file.data.fm, toc };
	};
}
