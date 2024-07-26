<script lang="ts">
	import Button from '$components/Button.svelte';
	import Card from '$components/Card.svelte';
	import FiveStarts from '$components/FiveStarts.svelte';

	let { featuredReviews }: { featuredReviews: { [key: string]: any }[] } = $props();
	console.log(featuredReviews);
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
						{#each featuredReviews.slice(0, 3) as review}
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

<style lang="scss">
	.featured-course {
		padding: functions.toRem(80) 0 functions.toRem(60);
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
				margin-top: functions.toRem(20);
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
