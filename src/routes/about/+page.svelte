<script>
	import Card from '$components/Card.svelte';
	import Head from '$components/Head.svelte';
	import desk from '$lib/assets/about/desk2.jpg?enhanced';
	import editing from '$lib/assets/about/editing.jpg?enhanced';
	import portrait2 from '$lib/assets/about/portrait2.jpg?enhanced';
	import themeforest from '$lib/assets/about/themeforest.jpg?enhanced';
	import uni from '$lib/assets/about/uni.jpg?enhanced';

	let structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		dateCreated: new Date('8-6-2024').toISOString(),
		dateModified: new Date('8-6-2024').toISOString(),
		mainEntity: {
			'@type': 'Person',
			name: 'Ali Alaa',
			alternateName: 'alialaa',
			description: 'A Frontend Web Developer.'
		}
	};
</script>

<Head title="About" />

<svelte:head>
	{@html '<script type="application/ld+json">' + JSON.stringify(structuredData) + '</script>'}
</svelte:head>

<div class="wrapper">
	<div class="content-wrapper">
		<div class="title">
			<h1><span class="underline">About</span></h1>
		</div>

		<div class="content">
			<div class="portrait-image grid-item">
				<Card class="img-card">
					<enhanced:img src={portrait2} alt="A photo of me" />
				</Card>
			</div>
			<div class="intro-text grid-item">
				<h2>Who am I? (TL;DR version)</h2>
				<p>
					My name is Ali Alaa. I am a front-end web developer based in Cairo, Egypt. I have been
					working in the field for around{' '}
					{new Date().getFullYear() - 2012} years. I am currently focusing on creating online learning
					content. I publish{' '}
					<a href="/courses">online courses</a>,{' '}
					<a href="/blog">articles</a> and free tutorials on{' '}
					<a href="https://www.youtube.com/channel/UCa-VVCGLQZv6IQWTKyVlnjg">
						my youtube channel
					</a>
					.
				</p>
				<p>
					I also do freelance work from time to time. If you are interested in working with me, feel
					free to{' '}
					<a href="/contact">get in touch with me</a>.
				</p>
			</div>

			<div class="beginnings grid-item">
				<h3>The Beginnings</h3>
				<p>
					I was first introduced to web development during my time studying telecommunications
					engineering around 2010. During that time I discovered <a href="https://themeforest.net"
						>themeforest</a
					>
					and I was intrigued by some of the WordPress templates that I saw there. Shortly after, I decided
					to start learning web development and WordPress in parallel with my university studies. I learned
					through online tutorials and courses. As far as I remember,{' '}
					<a href="https://tutsplus.com">tutsplus</a> &{' '}
					<a href="https://www.lynda.com">Lynda</a> were my two biggest sources of learning.
				</p>
			</div>
			<div class="uni-image grid-item">
				<figure>
					<Card class="img-card">
						<enhanced:img
							src={uni}
							alt="A photo of a classroom. A memory I found on my phone of my days studying at the university."
						/>
					</Card>
					<figcaption>
						A memory of my days studying at the university that I found on my old phone.
					</figcaption>
				</figure>
			</div>

			<div class="themeforest-text grid-item">
				<h3>First Milestone</h3>
				<p>
					At the time I graduated university; I was able to get a jQuery plugin & a WordPress
					template published on themeforest. This of course happened after multiple rejections which
					looking back I consider were important for my development. This was a huge milestone for
					me. Although my theme didn&apos;t do well, but I knew that I have reached a good point in
					my career.
				</p>
				<p>
					During that time I was looking for a job and I wasn&apos;t yet decided on which field I
					would like to carry on with. I was applying for jobs for both telecommunications and web
					development fields.
				</p>
			</div>
			<div class="themeforest-image grid-item">
				<figure>
					<Card class="img-card">
						<enhanced:img
							src={themeforest}
							alt="A photo of my computer screen showing my first WordPress template accepted on themeforest."
						/>
					</Card>
					<figcaption>
						A photo I took during working on the first accepted WordPress template on themeforest.
					</figcaption>
				</figure>
			</div>

			<div class="job-text grid-item">
				<h3>First Job</h3>
				<p>
					I got my first job at a web development agency in 2014. I worked on tons of WordPress
					projects. At the same time I was still working in my free time on WordPress themes for
					themeforest. I managed to publish another WordPress theme and a WordPress plugin. However,
					I started to lose interest in WordPress stuff and I was more interested in learning more
					about JavaScript and different front-end aspects that I wasn&apos;t aware of like
					accessibility, JS frameworks and hybrid mobile application development. Luckily, that was
					also the direction of the agency I worked for. We were getting more web app and hybrid
					mobile app sort of projects.
				</p>
			</div>
			<div class="job-testimonial testimonial grid-item">
				<figure>
					<Card>
						<blockquote>
							<p>
								“I have been in the tech space for the past 10 years, worked with more than 100
								developers. Ali is THE best frontend developer I have worked with. He has great
								knowledge, helpful and has a distinguished work ethic.”
							</p>
						</blockquote>
					</Card>
					<figcaption>Testimonial from the CEO of the agency where I had my first job.</figcaption>
				</figure>
			</div>
			<div class="job-text-2 grid-item">
				<p>
					Publishing themes on themeforest also wans&apos;t a very good idea if you are an
					individual. To succeed on such a competitive marketplace, you have to have a team of
					designers, developers and customer support and that wasn&apos;t possible for me at the
					time. So I decided to quit themeforest and focus more on expanding my front-end
					development knowledge.
				</p>
				<p>
					Working at an agency was a really beneficial step in my career. Working on real-life
					projects, dealing with clients and collaborating with different teams taught me a lot. But
					after a while I decided to take my next step and start freelancing.
				</p>
			</div>
			<div class="freelancing-text grid-item">
				<h3>Freelancing</h3>
				<p>
					After few years of having a regular job, I gained a lot of experience and worked on a lot
					of big projects. Nevertheless, I started getting tired of the routine. I felt like I
					needed a new challenge at this point. So I decided to start freelancing. When I took that
					decision, I had no idea what to do and how to find clients. I started applying for jobs on <a
						href="https://www.upwork.com">Upwork</a
					>. And given my empty Upwork profile, It took me around 6 months to be noticed and hired
					by a client. It was a very difficult period in my life. I was barely getting any income
					and I started to doubt my decision. But during these 6 months I did a lot of things that
					helped me a lot later. I created a website for myself which was{' '}
					<a href="https://twitter.com/wesbos/status/933730758547660800"> shared by Wes Bos </a>
					,{' '}
					<a href="https://medium.com/@alialaa">wrote some articles on medium</a>, created a CSS
					grid cheat sheet{' '}
					<a href="https://twitter.com/smashingmag/status/856989478212313088">
						which was shared by Smashing Magazine
					</a>{' '}
					and so on. All of that gave a bit of exposure and helped me have some stuff to show the clients
					that I was applying for their jobs. Since I got my first job, things went a lot better for
					me and I was able to get clients easier. A lot of times I didn&apos;t have to search for jobs,
					clients started to get in touch with me either from an article I wrote or from my Upwork profile.
				</p>
			</div>
			<div class="freelancing-testimonial testimonial grid-item">
				<figure>
					<Card>
						<blockquote>
							<p>
								“Ali is the best freelancer I had the opportunity to work with. He produces quality
								code, maintains an excellent communication and always delivers in time. It is a real
								pleasure to work with him.”
							</p>
						</blockquote>
					</Card>
					<Card>
						<blockquote>
							<p>
								“I would work with Ali again. He is a really good developer and has strong technical
								skills.”
							</p>
						</blockquote>
					</Card>
					<figcaption>Testimonials from some of my freelancing clients.</figcaption>
				</figure>
			</div>
			<div class="courses-text grid-item">
				<h3>Course Creation</h3>
				<p>
					After about a year of freelancing; I was thinking about something new to do. One of the
					things that I thought of was creating online courses. I wasn&apos;t sure if I was gonna be
					able to do it. I haven&apos;t done anything like that before. But after some research and
					demos, I decided that I am gonna give it a try. And I started preparing for my{' '}
					<a href="/courses/wordpress">first course</a> which was about creating WordPress themes. It
					took me a very long time to prepare and record that course. I was very unconfident about how
					I was doing things and I kept re-recording and re-editing a lot. But after the first few sections
					I started to get used to it and I finally released the course on Udemy.
				</p>
				<p>
					I struggled a bit at the beginning with sales, but after a while the course started
					getting some traction and also some good reviews. Few months later I decided to do more
					courses. Although it&apos;s a very stressful process to create and edit a course on your
					own; but I really enjoyed the outcome of it. Helping students and getting positive
					feedback is a really satisfying experience.
				</p>
				<p>
					I have made <a href="/courses">a handful of courses</a> so far and I really enjoyed each one
					of them. When you create a course about a certain topic, you really learn a lot about this
					topic. When you are willing to explain something to people, you have to have a very deep understanding
					of it. And that makes you learn things wouldn&apos;t have learned otherwise.
				</p>
				<p>
					I am currently focusing on creating more courses. I am also planing to do free tutorials
					on{' '}
					<a href="https://www.youtube.com/channel/UCa-VVCGLQZv6IQWTKyVlnjg"> youtube </a>{' '}
					and write more <a href="/blog">articles here on my website</a> 🙂.
				</p>
			</div>
			<div class="desk-image grid-item">
				<figure>
					<Card class="img-card">
						<enhanced:img
							src={editing}
							alt="A photo I took while editing one of the lectures of my first course. Shows my laptop screen with the editing software opened."
						/>
					</Card>
					<figcaption>
						A photo I took while editing one of the lectures of my first course.
					</figcaption>
				</figure>
				<br />
				<figure>
					<Card class="img-card">
						<enhanced:img
							src={desk}
							alt="A photo I took during recording one of my courses showing my recording set-up"
						/>
					</Card>
					<figcaption>
						A photo I took during recording one of my courses showing my recording set-up.
					</figcaption>
				</figure>
			</div>
			<div class="course-testimonials grid-item testimonial">
				<figure>
					<div class="course-testimonials-items">
						<div class="course-testimonials-item">
							<Card>
								<blockquote>
									<p>
										“This is the best course "I have ever seen on Udemy"..not just for GitHub
										Actions, but in general for all. It contains everything.. almost all possible
										scenarios. Every section have concept explained, implementation and execution. I
										have recommended this course to everyone in my team, kind of made it mandatory
										to all of them. Pretty good work!!.”
									</p>
								</blockquote>
							</Card>
						</div>
						<!-- <div class="course-testimonials-item">
							<Card>
								<blockquote>
									<p>
										“I attended many courses on udemy but this course is outstanding. so detailed
										and well explained and also with such a realistic project. every react and vue
										developer should join this course. you won't regret it..”
									</p>
								</blockquote>
							</Card>
						</div> -->
						<div class="course-testimonials-item">
							<Card>
								<blockquote>
									<p>
										“Ali's course stands out as an exceptional learning resource. Not only is the
										content incredibly informative, but Ali's teaching style is both engaging and
										transparent. He has a unique knack for breaking down complex topics into easily
										digestible segments, making the learning process seamless and enjoyable. I
										particularly appreciate the clarity with which he explains things, ensuring that
										learners at all levels can grasp the material. Highly recommend for anyone
										looking to deepen their understanding in the subject matter!.”
									</p>
								</blockquote>
							</Card>
						</div>
						<div class="course-testimonials-item">
							<Card>
								<blockquote>
									<p>
										“Fantastic course! I was familiar with Azure DevOps basics but didn't know
										anything about Github actions, this course has helped with that! It has very
										easy to follow instructions and the material is taught and presented in a way
										you can understand. I highly recommend this course, it helped me pass my DevOps
										Engineer Interview!”
									</p>
								</blockquote>
							</Card>
						</div>
					</div>
					<figcaption>Some of the reviews left by students who took my courses.</figcaption>
				</figure>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	:global(.card.img-card) {
		padding: 0;
	}
	:global(.waves-wrapper[data-route='/about']) {
		padding-bottom: 50vh !important;
		@include breakpoint.up('xl') {
			padding-bottom: 50vh !important;
		}
	}
	.wrapper {
		margin-top: -40vh;
		padding-bottom: functions.toRem(120);
		position: relative;
		z-index: 100;
		@include breakpoint.up('xl') {
			margin-top: -35vh !important;
		}
	}
	img {
		height: auto;
		vertical-align: middle;
		width: 100%;
	}
	figure {
		margin: 0px 0px functions.toRem(20);
	}
	.title {
		margin-bottom: functions.toRem(20);
		h1 {
			font-size: max(calc(2.2rem + 1.8vw), 2.4rem);
			font-weight: 800;
			margin: 0;
		}
	}
	.content {
		margin-top: functions.toRem(40);

		@include breakpoint.up('lg') {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: functions.toRem(40);
			align-items: center;
		}
	}
	p {
		margin: 0px 0px functions.toRem(15);
		font-size: functions.toRem(20);
	}
	h2 {
		font-weight: 800;
		font-size: calc(functions.toRem(28) + 1.2vw);
		line-height: 1.2;
		margin-bottom: functions.toRem(30);
		text-decoration: underline;
		text-decoration-color: var(--purple);
	}
	h3 {
		font-weight: 700;
		font-size: calc(functions.toRem(28) + 0.7vw);
		line-height: 1.2;
		margin-bottom: functions.toRem(26);
		text-decoration: underline;
		text-decoration-color: var(--purple);
	}
	figcaption {
		margin-top: functions.toRem(10);
		padding: functions.toRem(5);
		font-size: functions.toRem(15);
	}
	.grid-item {
		margin-bottom: functions.toRem(40);
		@include breakpoint.up('lg') {
			margin-bottom: 0;
		}
	}
	.portrait-image {
		grid-column: 8 / span 4;
		grid-row: 1;
	}
	.intro-text {
		grid-column: 1 / span 6;
		grid-row: 1;
		/* margin-top: 4rem; */
	}
	.uni-image {
		grid-row: 5;
		grid-column-start: 1;
		grid-column-end: span 6;
	}
	.beginnings {
		grid-row: 5;
		grid-column: 8 / span 5;
		/* margin-top: 1rem; */
	}
	.themeforest-image {
		grid-row: 7;
		grid-column: 7 / span 6;
	}
	.themeforest-text {
		grid-column: 1 / span 5;
		grid-row: 7;
		/* margin-top: 1rem; */
	}
	.job-text {
		grid-column: 1 / span 6;
		grid-row: 9;
	}
	.job-text-2 {
		grid-column: 1 / span 10;
		grid-row: 10;
	}
	.job-testimonial {
		grid-column: 8 / span 5;
		grid-row: 9;
	}
	.testimonial {
		:global(.card) {
			padding: functions.toRem(30);
			font-weight: 500;
			margin-top: functions.toRem(40);
		}
		blockquote,
		p {
			font-size: functions.toRem(22);
			padding: 0;
			margin: 0;
		}
	}
	.freelancing-text {
		grid-column: 1 / span 6;
		grid-row: 12;
	}
	.freelancing-testimonial {
		grid-column: 8 / span 5;
		grid-row: 12;
	}
	.freelancing-tweet-1 {
		grid-column: 1 / span 6;
		grid-row: 14;
	}
	.freelancing-tweet-2 {
		grid-column: 8 / span 5;
		grid-row: 14;
	}
	.courses-text {
		grid-column: 7 / span 6;
		grid-row: 14;
	}
	.desk-image {
		grid-column: 1 / span 5;
		grid-row: 14;
	}
	.course-testimonials {
		grid-column: 1 / span 12;
		grid-row: 15;
		figcaption {
			margin-top: functions.toRem(16);
			text-align: center;
		}
		.course-testimonials-items {
			display: grid;
			grid-template-columns: 1fr;
			margin-top: functions.toRem(20);
			gap: functions.toRem(40);
			@include breakpoint.up('xl') {
				grid-template-columns: repeat(12, 1fr);
			}
			.course-testimonials-item {
				grid-column-end: span 3;
				align-items: center;
				display: flex;
				// @include breakpoint.up('lg') {
				// 	grid-column-end: span 6;
				// }
				@include breakpoint.up('xl') {
					grid-column-end: span 4;
				}
				:global(.card) {
					height: 100%;
					margin: 0;
				}
				blockquote {
					p {
						font-size: functions.toRem(20);
						text-align: center;
					}
				}
			}
		}
	}
	.more-text {
		grid-column: 1 / span 6;
		grid-row: 17;
	}
	.more-image {
		grid-column: 8 / span 5;
		grid-row: 17;
	}
</style>
