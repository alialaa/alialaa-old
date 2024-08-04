export interface Picture {
	/**
	 * Key is format. Value is srcset.
	 */
	sources: Record<string, string>;
	img: {
		src: string;
		w: number;
		h: number;
	};
}

export default function getImage(courseId: string, imagePath: string) {
	let imageObj;
	switch (courseId) {
		case 'x01-ltjzWZ4oMbnhJQYpRKKoQ==':
			imageObj = import.meta.glob(['$lib/assets/courses/animations.jpg'], {
				eager: true,
				query: { enhanced: true }
			});
			break;
		case 'x01gxVGxh2jpnE0jBwf0aqQWg==':
			imageObj = import.meta.glob(['$lib/assets/courses/svelte.png'], {
				eager: true,
				query: { enhanced: true }
			});
			break;
		case 'x015vNbBDIRfbZt9qM09qkwzA==':
			imageObj = import.meta.glob(['$lib/assets/courses/gh.jpg'], {
				eager: true,
				query: { enhanced: true }
			});
			break;
		case 'x01wnWjnHsnoEivUNcc52Z9HA==':
			imageObj = import.meta.glob(['$lib/assets/courses/gutenberg.jpg'], {
				eager: true,
				query: { enhanced: true }
			});
			break;
		case 'x01mYHnrkrB1UnCkvDk2IuEFw==':
			imageObj = import.meta.glob(['$lib/assets/courses/wordpress.jpg'], {
				eager: true,
				query: { enhanced: true }
			});
			break;
		case 'x01Zw0hs61ln1xIF1VOhHCiwg==':
			imageObj = import.meta.glob(['$lib/assets/courses/tttrn.jpg'], {
				eager: true,
				query: { enhanced: true }
			});
			break;

		default:
			break;
	}
	return (imageObj && imageObj[imagePath]) as undefined | { default: Picture };
}
