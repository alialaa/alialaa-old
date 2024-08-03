export default function generateTagSlug(tag: string) {
	return tag.split(' ').join('-').toLowerCase();
}
