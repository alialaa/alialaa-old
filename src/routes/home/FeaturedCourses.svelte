<script lang="ts">
	import Button from '$components/Button.svelte';
	import Card from '$components/Card.svelte';
	import FiveStarts from '$components/FiveStarts.svelte';
	import { ArrowRight } from 'lucide-svelte';

	const images = import.meta.glob(['$lib/assets/courses/*.{jpeg,jpg,png}'], {
		eager: true,
		query: { enhanced: true }
	});

	let {
		featuredReviews,
		featuredCourses
	}: { featuredReviews: { [key: string]: any }[]; featuredCourses: { [key: string]: any }[] } =
		$props();
</script>

<section class="featured-course">
	<div class="content-wrapper">
		<div class="course">
			<div class="course-image">
				<div class="image-wrapper">
					<enhanced:img src="$lib/assets/courses/gh.jpg" alt=""> </enhanced:img>
				</div>
			</div>
			<div class="course-info-wrap">
				<div class="course-info">
					<h3>Featured Course</h3>
					<h4>The Complete GitHub Actions & Workflows Guide</h4>
					<p>
						Automate Code Testing, Deployment & Versioning using CI/CD Workflows. Create & Publish
						GitHub Actions to the Marketplace.
					</p>
					<div class="course-buttons">
						<Button href={`/courses/github-actions`}>
							Learn More
							<span class="visually-hidden">
								About the course: The Complete GitHub Actions & Workflows Guide
							</span>
						</Button>
						<Button
							href="https://www.udemy.com/course/github-actions/?referralCode=49A5F56B87CD62AEF6D4"
						>
							Buy{' '}
							<span class="visually-hidden">
								The Complete GitHub Actions & Workflows Guide
							</span>{' '}
							on Udemy
						</Button>
					</div>
				</div>
				<div class="course-reviews">
					<ul>
						{#each featuredReviews
							.filter((r) => r.course.id === 'x015vNbBDIRfbZt9qM09qkwzA==')
							.slice(0, 3) as review}
							<li>
								<Card>
									<FiveStarts aria-hidden focusable="false" />
									<blockquote cite="https://www.udemy.com/course/github-actions">
										<span>“{review.content}”</span>
										<footer>
											— <cite>{review.user.title}, Udemy Student</cite>
										</footer>
									</blockquote>
								</Card>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="featured-courses">
	<div class="content-wrapper">
		<h3>More Courses</h3>
		<div class="grid">
			{#each featuredCourses as course}
				{@const review = featuredReviews.find((r) => r.course.id === course.udemyID)}
				<div class="course">
					<Card>
						{#if images[course.image]}
							<div class="course-image">
								<div class="image-wrapper">
									<enhanced:img src={(images[course.image] as { default: string }).default} alt="">
									</enhanced:img>
								</div>
							</div>
						{/if}
						<div class="content">
							<h4>{course.title}</h4>
							<p>{course.summary}</p>
							<div class="course-buttons">
								<Button href="/courses/{course.url}">
									Learn More
									<span class="visually-hidden">
										About the course: The Complete GitHub Actions & Workflows Guide
									</span>
								</Button>
								<Button href={course.udemyUrl}>
									Buy{' '}
									<span class="visually-hidden">
										The Complete GitHub Actions & Workflows Guide
									</span>{' '}
									on Udemy
								</Button>
							</div>
							{#if review}
								<div class="review">
									<FiveStarts aria-hidden focusable="false" />
									<blockquote cite={course.udemyUrl}>
										<span>“{review.content}”</span>
										<footer>
											— <cite>{review.user.title}, Udemy Student</cite>
										</footer>
									</blockquote>
								</div>
							{/if}
						</div>
					</Card>
				</div>
			{/each}
		</div>
		<div class="more-link">
			<a href="/courses"
				>View All Courses
				<ArrowRight size="22" aria-hidden="true" focusable="false" />
			</a>
		</div>
	</div>
</section>

<style lang="scss">
	.featured-courses {
		padding: functions.toRem(0) 0 functions.toRem(60);
		position: relative;
		z-index: 22;

		h3 {
			font-size: 1.8rem;
			text-decoration: underline solid var(--purple);
			margin-bottom: functions.toRem(30);
		}
		.grid {
			display: grid;
			grid-template-columns: 1fr;
			grid-gap: functions.toRem(20);

			@include breakpoint.up('lg') {
				grid-template-columns: repeat(2, minmax(0, 1fr));
				grid-gap: functions.toRem(30);
			}
			.course {
				:global(.card) {
					height: 100%;
					padding: 2rem;
				}
				.content {
					position: relative;
					// padding-top: 5%;
					h4 {
						font-size: functions.toRem(32);
						font-weight: 800;
						margin: 0;
						margin-bottom: functions.toRem(10);
					}
					p {
						font-size: functions.toRem(19);
						margin: 0;
					}
					.course-buttons {
						margin-top: functions.toRem(30);
						:global(a) {
							margin-right: functions.toRem(20);
							margin-bottom: functions.toRem(20);
							padding: 0.7rem 1.7rem;
							font-size: functions.toRem(14);
						}
					}
					.review {
						margin-top: functions.toRem(20);
						background: linear-gradient(to bottom, var(--card), transparent);
						// border: 1px solid var(--card-border);
						padding: functions.toRem(30) functions.toRem(15);
						text-align: center;
						:global(svg) {
							width: 120px;
							max-width: 100%;
							margin-bottom: functions.toRem(10);
						}
						blockquote {
							margin: 0;
							span {
								font-size: functions.toRem(17);
								font-weight: 400;
								margin-bottom: functions.toRem(16);
								display: block;
								line-height: 1.7;
							}
							footer {
								font-size: functions.toRem(15);
								font-weight: 400;
								opacity: 0.85;
							}
						}
					}
				}
				.course-image {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					.image-wrapper {
						position: relative;
						height: 100%;
						img {
							max-width: none;
							height: 100%;
							width: 100%;
							object-fit: cover;
						}
						&:after {
							content: '';
							width: 100%;
							height: 100%;
							position: absolute;
							top: 0;
							left: 0;
							background: linear-gradient(to bottom, var(--feat-course-gradient), var(--card) 72%);
						}
					}
				}
			}
		}
		.more-link {
			margin-top: functions.toRem(30);
			display: flex;
			justify-content: flex-end;
			a {
				display: flex;
				align-items: center;
				font-weight: 600;
				font-size: functions.toRem(20);
				text-decoration: underline solid var(--purple2);
				:global(svg) {
					margin-inline-start: 10px;
				}
			}
		}
	}
	.featured-course {
		padding: functions.toRem(80) 0 functions.toRem(40);
		// overflow: hidden;
		z-index: 20;
		position: relative;
		.course {
			position: relative;
		}
		.course-image {
			position: absolute;
			width: 100%;
			top: 0;
			left: 0;
			.image-wrapper {
				position: relative;
				img {
					max-width: none;
					height: auto;
					width: 100%;
				}
				&:after {
					content: '';
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background: radial-gradient(ellipse, var(--feat-course-gradient), var(--bg) 72%);
				}
			}
		}
		.course-info-wrap {
			min-height: calc(min(100vw - 4rem, 960px) * 844 / 1500);
			z-index: 1;
			position: relative;
		}
		.course-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 100%;
			@include breakpoint.up('sm') {
				width: 70%;
			}
			.course-buttons {
				margin-top: functions.toRem(40);
				:global(a) {
					margin-right: functions.toRem(20);
					margin-bottom: functions.toRem(20);
				}
			}
			h3 {
				box-shadow: 2px 2px 0 var(--card-border);
				align-self: flex-start;
				background: linear-gradient(45deg, #8d43db, #bf1fd5);
				font-size: calc(functions.toRem(10) + 0.6vw);
				padding: 5px 12px;
				font-weight: 700;
				margin: 0;
				margin-bottom: functions.toRem(20);
				color: #ffffff;
			}
			h4 {
				font-size: calc(functions.toRem(28) + 1.5vw);
				font-weight: 800;
				margin: 0;
			}
			p {
				font-size: calc(functions.toRem(18) + 0.4vw);
				margin: 0;
				margin-top: functions.toRem(15);
			}
		}
		.course-reviews {
			margin-top: functions.toRem(40);
			ul {
				margin: 0;
				padding: 0;
				list-style: none;
				display: grid;
				grid-template-columns: 1fr;
				grid-gap: functions.toRem(20);

				@include breakpoint.up('lg') {
					grid-template-columns: repeat(3, minmax(0, 1fr));
					grid-gap: functions.toRem(30);
				}
				@include breakpoint.only('lg') {
					grid-template-columns: repeat(2, minmax(0, 1fr));
					grid-gap: functions.toRem(30);
					li:last-child {
						grid-area: auto / span 2 / auto / auto;
					}
				}
				li {
					:global(.card) {
						padding: functions.toRem(40) functions.toRem(20);
						text-align: center;
						height: 100%;
					}
					:global(svg) {
						width: 155px;
						max-width: 100%;
						margin-bottom: functions.toRem(15);
					}
					blockquote {
						margin: 0;
						span {
							font-size: functions.toRem(19);
							font-weight: 600;
							margin-bottom: functions.toRem(20);
							display: block;
							line-height: 1.7;
						}
						footer {
							font-size: functions.toRem(15);
							font-weight: 500;
							opacity: 0.85;
						}
					}
				}
			}
		}
	}
</style>
