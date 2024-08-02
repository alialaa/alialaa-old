import { UDEMY_API_TOKEN } from '$env/static/private';
import type { Post } from '$types';
import type { PageServerLoad } from './$types';
import fs from 'fs';
import { parse } from 'yaml';

const options = {
	headers: {
		Authorization: `Bearer ${UDEMY_API_TOKEN}`
	}
};

export const load: PageServerLoad = async ({ fetch }) => {
	const coursesYAML = fs.readFileSync('src/lib/content/courses.yaml', 'utf8');
	const coursesJSON = parse(coursesYAML);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const featuredCoursesReviews: { [key: string]: any }[] = [];
	const ghReviewsReq = fetch(
		'https://www.udemy.com/instructor-api/v1/taught-courses/reviews?course=x015vNbBDIRfbZt9qM09qkwzA==&fields[course]=id,title,published_title&fields[course_review]=content,rating,course,user&star=5&page_size=100&status=commented',
		options
	);
	const svelteReviewsReq = fetch(
		'https://www.udemy.com/instructor-api/v1/taught-courses/reviews?course=x01gxVGxh2jpnE0jBwf0aqQWg==&fields[course]=id,title,published_title&fields[course_review]=content,rating,course,user&star=5&page_size=30&status=commented',
		options
	);
	const animationsReviewsReq = fetch(
		'https://www.udemy.com/instructor-api/v1/taught-courses/reviews?course=x01-ltjzWZ4oMbnhJQYpRKKoQ==&fields[course]=id,title,published_title&fields[course_review]=content,rating,course,user&star=5&page_size=30&status=commented',
		options
	);
	const gutenbergReviewsReq = fetch(
		'https://www.udemy.com/instructor-api/v1/taught-courses/reviews?course=x01wnWjnHsnoEivUNcc52Z9HA==&fields[course]=id,title,published_title&fields[course_review]=content,rating,course,user&star=5&page_size=30&status=commented',
		options
	);
	const [ghRes, svelteRes, animationsRes, gutenbergRes] = await Promise.all([
		ghReviewsReq,
		svelteReviewsReq,
		animationsReviewsReq,
		gutenbergReviewsReq
	]);
	const [ghResJSON, svelteResJSON, animationsResJSON, gutenbergResJSON] = await Promise.all([
		ghRes.json(),
		svelteRes.json(),
		animationsRes.json(),
		gutenbergRes.json()
	]);
	[
		ghResJSON.results,
		svelteResJSON.results,
		animationsResJSON.results,
		gutenbergResJSON.results
	].forEach((reviews) => {
		const filtered = reviews.filter(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(r: { [key: string]: any }) => {
				if (r.course.id === 'x01-ltjzWZ4oMbnhJQYpRKKoQ==') return r;
				return r.content.length > 150 && r.content.length < 200;
			}
		);
		featuredCoursesReviews.push(...filtered);
	});

	const featuredPostsRes = await fetch('api/posts?featured=true&limit=3');
	const featuredPostsResJSON = await featuredPostsRes.json();
	return {
		featuredPosts: featuredPostsResJSON.posts as Post[],
		featuredCoursesReviews,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		featuredCourses: coursesJSON.filter((c: any) =>
			[
				'x01-ltjzWZ4oMbnhJQYpRKKoQ==',
				'x01gxVGxh2jpnE0jBwf0aqQWg=='
				// 'x01wnWjnHsnoEivUNcc52Z9HA=='
			].includes(c.udemyID)
		)
	};
};
