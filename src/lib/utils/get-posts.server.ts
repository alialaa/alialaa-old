import type { Post } from '$types';

export default function getPosts(options?: { limit?: number; featured?: boolean; tag?: string }) {
	const { limit, featured, tag } = options || {};
	let posts: Post[] = [];
	const tags: { name: string; count: number }[] = [];
	const paths = import.meta.glob('/src/posts/**/*.svx', { eager: true });
	let i = 0;
	for (const path in paths) {
		if (limit && i === +limit) break;
		const file = paths[path] as { [key: string]: unknown };
		const pathArr = path.split('/');
		const slug = pathArr[pathArr.length - 1].replace('.svx', '');
		const metadata = file.metadata as Omit<Post, 'slug'>;
		const post: Post = { ...metadata, slug };
		if (featured && !post.featured) continue;
		if (metadata.tags) {
			metadata.tags.forEach((tag) => {
				const existing = tags.find((t) => t.name === tag);
				if (existing) {
					existing.count++;
				} else {
					tags.push({ name: tag, count: 1 });
				}
			});
		}
		if (tag) {
			if (metadata.tags && metadata.tags.includes(tag)) {
				posts.push(post);
			}
		} else {
			posts.push(post);
		}
		i++;
	}
	posts = posts.sort(
		(first, second) =>
			new Date(second.date as string).getTime() - new Date(first.date as string).getTime()
	);
	return { posts, tags };
}
