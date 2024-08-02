import type { Post, Tag } from '$types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('api/posts');
	const { posts, tags }: { posts: Post[]; tags: Tag[] } = await res.json();
	// console.log(posts);
	return {
		posts,
		tags
	};
};
