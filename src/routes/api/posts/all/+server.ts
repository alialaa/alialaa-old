import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import getPosts from '$lib/utils/get-posts.server';

export const GET: RequestHandler = () => {
	const { posts, tags } = getPosts();

	return json({ posts, tags });
};
