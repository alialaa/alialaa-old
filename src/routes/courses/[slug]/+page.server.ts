import type { PageServerLoad } from './$types';
import fs from 'fs';
import { parse } from 'yaml';

export const load: PageServerLoad = async ({ params }) => {
	const coursesYAML = fs.readFileSync('src/lib/content/courses.yaml', 'utf8');
	const coursesJSON = parse(coursesYAML);

	return {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		course: coursesJSON.find((c: any) => c.url === params.slug)
	};
};
