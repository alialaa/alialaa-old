<script lang="ts">
	import Card from '$components/Card.svelte';
	import Head from '$components/Head.svelte';
	import { Clock } from 'lucide-svelte';

	let { data } = $props();

	const images = import.meta.glob(['$lib/assets/courses/*.{jpeg,jpg,png}'], {
		eager: true,
		query: { enhanced: true }
	});
</script>

<Head title="Courses" />

<div class="wrapper">
	<div class="content-wrapper">
		<div class="title">
			<h1><span class="underline">Courses</span></h1>
		</div>
		<div class="grid">
			{#each data.courses as course}
				<article class="course">
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
							<div class="duration">
								<Clock focusable="false" aria-hidden="true" />
								{course.duration} hours on-demand video
							</div>
							<div class="info">
								<h2><a href="/courses/{course.url}">{course.title}</a></h2>
								<p>{course.summary}</p>
							</div>
						</div>
					</Card>
				</article>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	:global(.waves-wrapper[data-route='/courses']) {
		padding-bottom: 50vh !important;
		@include breakpoint.up('xl') {
			padding-bottom: 50vh !important;
		}
	}
	.wrapper {
		margin-top: -40vh;
		padding-bottom: functions.toRem(120);
		position: relative;
		@include breakpoint.up('xl') {
			margin-top: -35vh !important;
		}
	}
	.grid {
		margin-top: 5rem;
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 30px;
		position: relative;
		z-index: 10;
		@include breakpoint.up('lg') {
			grid-template-columns: repeat(2, 1fr);
		}
		:global(.card) {
			height: 100%;
			padding: 1.5rem;
		}
		.course {
			.content {
				position: relative;
				min-height: 300px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			.duration {
				display: flex;
				align-items: center;
				font-size: functions.toRem(15);
				font-weight: 600;
				opacity: 0.8;
				margin-bottom: functions.toRem(15);

				:global(svg) {
					width: 15px;
					margin-right: 5px;
					vertical-align: middle;
				}
			}
			h2 {
				font-size: functions.toRem(30);
				margin-top: functions.toRem(0);
				margin-bottom: functions.toRem(16);
				a {
					font-weight: 800;
				}
			}
			p {
				font-size: functions.toRem(19);
				margin: 0;
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
						background: linear-gradient(to bottom, var(--feat-course-gradient), var(--card) 70%);
					}
				}
			}
			// .course-image {
			// 	:global(img) {
			// 		height: auto;
			// 		width: 100%;
			// 	}
			// }
		}
	}
	.title {
		margin-bottom: functions.toRem(20);
		h1 {
			font-size: max(calc(2.2rem + 1.8vw), 2.4rem);
			font-weight: 800;
			margin: 0;
		}
	}
</style>
