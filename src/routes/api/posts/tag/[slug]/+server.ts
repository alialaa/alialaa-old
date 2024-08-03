import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import getPosts from '$lib/utils/get-posts.server';

export const GET: RequestHandler = ({ params }) => {
	const { posts, tags } = getPosts({ tag: params.slug });

	return json({ posts, tags });
};
