import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
};
