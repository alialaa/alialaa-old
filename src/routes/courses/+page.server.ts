import type { PageServerLoad } from './$types';
import fs from 'fs';
import { parse } from 'yaml';

export const load: PageServerLoad = async () => {
	const coursesYAML = fs.readFileSync('src/lib/content/courses.yaml', 'utf8');
	const coursesJSON = parse(coursesYAML);

	return {
		courses: coursesJSON
	};
};
