import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import getPosts from '$lib/utils/get-posts.server';

export const GET: RequestHandler = () => {
	const { posts, tags } = getPosts({ featured: true, limit: 3 });

	return json({ posts, tags });
};
