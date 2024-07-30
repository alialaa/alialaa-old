import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}/${params.slug}.svx`);
		console.log(post.metadata);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		console.log(e);
		error(404, `Could not find ${params.slug}`);
	}
};
