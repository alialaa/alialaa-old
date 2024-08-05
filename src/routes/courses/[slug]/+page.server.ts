import type { PageServerLoad } from './$types';
import fs from 'fs';
import { parse } from 'yaml';
import { UDEMY_API_TOKEN } from '$env/static/private';

const options = {
	headers: {
		Authorization: `Bearer ${UDEMY_API_TOKEN}`
	}
};
export const load: PageServerLoad = async ({ params, fetch }) => {
	const coursesYAML = fs.readFileSync('src/lib/content/courses.yaml', 'utf8');
	const coursesJSON = parse(coursesYAML);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const course = coursesJSON.find((c: any) => c.url === params.slug);

	const reviewsRes = await fetch(
		`https://www.udemy.com/instructor-api/v1/taught-courses/reviews?course=${course.udemyID}==&fields[course]=id,title,published_title&fields[course_review]=content,rating,course,user&star=5&page_size=30&status=commented`,
		options
	);
	const reviewsResJSON = await reviewsRes.json();
	return {
		course,
		reviews: reviewsResJSON.results.filter(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(r: { [key: string]: any }) => {
				if (r.course.id === 'x01-ltjzWZ4oMbnhJQYpRKKoQ==') return r;
				return r.content.length > 50;
			}
		)
	};
};
