<script lang="ts">
	import Card from '$components/Card.svelte';
	import testimonials from '$lib/content/testimonials';
</script>

<section class="testimonials">
	<div class="pattern"></div>
	<div class="content-wrapper">
		<h3>Testimonials</h3>
		<ul>
			{#each testimonials as testimonial}
				<li>
					<Card>
						<blockquote>
							<p>“{testimonial.testimonial}”</p>
							<footer>
								—{' '}
								<cite>
									{testimonial.name}, {testimonial.title} at{' '}
									<a href={testimonial.url}>{testimonial.company}</a>
								</cite>
							</footer>
						</blockquote>
					</Card>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	.testimonials {
		position: relative;
		z-index: 21;
		padding: functions.toRem(40) 0 functions.toRem(120);
		.pattern {
			--pattern-size: 60px;
			position: absolute;
			z-index: -1;
			width: 100%;
			// height: 220%;
			height: 150%;
			top: -50%;
			left: 0;
			background:
				linear-gradient(135deg, var(--bg) 25%, transparent 25%) calc(-1 * var(--pattern-size)) 0,
				linear-gradient(225deg, var(--bg) 25%, transparent 25%) calc(-1 * var(--pattern-size)) 0,
				linear-gradient(315deg, var(--bg) 25%, transparent 25%),
				linear-gradient(45deg, var(--bg) 25%, transparent 25%);
			background-size: calc(2 * var(--pattern-size)) calc(2 * var(--pattern-size));
			background-color: var(--card);

			opacity: var(--pattern-opacity);
			&:after {
				content: '';
				position: absolute;
				width: 100%;
				height: 30%;
				bottom: 0;
				background: linear-gradient(to bottom, transparent, var(--bg));
			}
		}
		h3 {
			font-size: 2.1rem;
			text-decoration: underline solid var(--purple);
			margin-bottom: functions.toRem(30);
		}
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			grid-template-columns: 1fr;
			gap: 30px;
			@include breakpoint.up('lg') {
				grid-template-columns: repeat(12, 1fr);
			}
			li {
				grid-column-end: span 12;
				:global(.card) {
					padding: 2rem;
					height: 100%;
				}
				blockquote {
					margin: 0;
					p {
						font-size: functions.toRem(20);
						font-weight: 500;
						margin: 0;
						margin-bottom: 2rem;
						@include breakpoint.up('sm') {
							font-size: functions.toRem(24);
						}
					}
					footer {
						font-size: functions.toRem(16);
						opacity: 0.9;
						@include breakpoint.up('sm') {
							font-size: functions.toRem(18);
						}
						a {
							font-weight: 600;
						}
					}
				}
				&:nth-child(1) {
					@include breakpoint.up('lg') {
						grid-column-end: span 7;
					}
				}
				&:nth-child(2) {
					@include breakpoint.up('lg') {
						grid-column-end: span 5;
					}
				}
				&:nth-child(3) {
					@include breakpoint.up('lg') {
						grid-column-end: span 12;
					}
				}
			}
		}
	}
</style>
