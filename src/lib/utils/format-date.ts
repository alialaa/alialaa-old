export default function formatDate(date: string) {
	const dateString = new Date(date).toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	return dateString;
}
