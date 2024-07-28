export type TestimonialType = {
	testimonial: string;
	title: string;
	company: string;
	name: string;
	url?: string;
};

export const testimonials: TestimonialType[] = [
	{
		testimonial:
			'I have been in the tech space for the past 10 years, worked with more than 100 developers. Ali is THE best frontend developer I have worked with. He has great knowledge, helpful and has a distinguished work ethic.',
		title: 'Co-founder & CEO',
		company: 'Circle',
		name: 'Essam Maged',
		url: 'https://createmycircle.com/'
	},
	{
		testimonial:
			'I would work with Ali again. He is a really good developer and has strong technical skills.',
		title: 'Co-founder & CTO',
		company: 'Teeela',
		name: 'Ibrahim Al-Khulaifi',
		url: 'https://www.teeela.com/en/'
	},
	{
		testimonial:
			'Ali is the best freelancer I had the opportunity to work with. He produces quality code, maintains an excellent communication and always delivers in time. It is a real pleasure to work with him.',
		title: 'CTO',
		company: 'Spatiodata',
		name: 'Olivier Flock',
		url: 'https://www.spatiodata.com/'
	}
];

export default testimonials;
