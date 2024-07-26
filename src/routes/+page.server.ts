import { UDEMY_API_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	let featuredCourseReviews = [];
	console.log(UDEMY_API_TOKEN);
	const res = await fetch(
		'https://www.udemy.com/instructor-api/v1/taught-courses/reviews?course=x015vNbBDIRfbZt9qM09qkwzA==&fields[course]=id,title,published_title&fields[course_review]=content,rating,course,user&star=5&page_size=100&status=commented',
		{
			headers: {
				Authorization: `Bearer ${UDEMY_API_TOKEN}`
			}
		}
	);
	const resJSON = await res.json();
	featuredCourseReviews = resJSON.results.filter(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(r: { [key: string]: any }) => r.content.length > 150 && r.content.length < 200
	);
	return {
		featuredCourseReviews
	};
};
