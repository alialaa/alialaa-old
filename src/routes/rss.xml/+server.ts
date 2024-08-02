import type { Post } from '$types';
import type { RequestHandler } from './$types';
import { dev } from '$app/environment';

const url = dev ? 'http://localhost:5173' : 'https://alialaa.dev';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('api/posts');
	const posts: Post[] = await response.json();
	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>Ali Alaa's Blog</title>
				<description>Latest Articles from alialaa.dev</description>
				<link>${url}</link>
				<atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.excerpt}</description>
							<link>${url}/blog/${post.slug}</link>
							<guid isPermaLink="true">${url}/blog/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
};
