// https://github.com/pngwn/MDsveX/issues/455#issuecomment-1336534743

import { visit } from 'unist-util-visit';

export default function excerpt(options = { length: 400 }) {
	return (tree, file) => {
		let text = '';
		visit(tree, ['text'], (node) => {
			if (text.length < options.length) {
				text += node.value;
			}
		});

		file.data.fm = { ...file.data.fm, excerpt: `${text.slice(0, options.length)}...` };
	};
}
