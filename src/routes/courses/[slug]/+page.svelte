<script lang="ts">
	import Head from '$components/Head.svelte';
	import { ArrowRight, Clock } from 'lucide-svelte';
	import getImage from './getImage.js';
	import Button from '$components/Button.svelte';
	import Card from '$components/Card.svelte';
	import FiveStarts from '$components/FiveStarts.svelte';
	import { page } from '$app/stores';
	import ZigLine from '$components/ZigLine.svelte';
	import { getContext } from 'svelte';
	import type { PreferencesContext } from '$types';

	let { data } = $props();
	let video: HTMLVideoElement;
	let image = $derived(getImage(data.course.udemyID, data.course.image));

	const { getColorScheme } = getContext<PreferencesContext>('preferences');
	let colorScheme = $derived(getColorScheme());

	let structuredData = $derived({
		'@context': 'https://schema.org/',
		'@id': $page.url.href,
		'@type': 'Course',
		name: data.course.title,
		description: data.course.summary,
		publisher: {
			'@type': 'Organization',
			name: 'Udemy',
			url: 'www.udemy.com'
		},
		provider: {
			'@type': 'Organization',
			name: 'Udemy',
			url: 'www.udemy.com'
		},
		image: image?.default?.img?.src ? [image?.default?.img?.src] : undefined,
		offers: [
			{
				'@type': 'Offer',
				category: 'Paid',
				priceCurrency: 'USD',
				price: 9.99
			}
		],
		educationalLevel: data.course.educationalLevel,
		about: data.course.topics,
		teaches: data.course.objectives,
		inLanguage: data.course.language,
		availableLanguage: [data.course.language],

		video: {
			'@type': 'VideoObject',
			name: 'Promo Video',
			description: 'A video previewing this course.',
			contentUrl: data.course.promo,
			thumbnailUrl: image?.default?.img?.src,
			uploadDate: new Date('8/5/2024').toISOString()
		},
		hasCourseInstance: [
			{
				// Blended, instructor-led course meeting 3 hours per day in July.
				'@type': 'CourseInstance',
				courseMode: 'Online',
				courseWorkload: `PT${data.course.duration}H`,
				instructor: [
					{
						'@type': 'Person',
						name: 'Ali Alaa',
						description: 'Frontend Web Developer'
					}
				]
			}
		]
	});
</script>

<Head
	title={data.course.title}
	description={data.course.summary}
	image={image?.default?.img?.src}
/>

<svelte:head>
	{@html '<script type="application/ld+json">' + JSON.stringify(structuredData) + '</script>'}
</svelte:head>

<div class="wrapper">
	<div class="content-wrapper">
		<header class="header">
			<div class="info">
				<div class="duration">
					<Clock focusable="false" aria-hidden="true" />
					{data.course.duration} hours on-demand video
				</div>
				<h1>{data.course.title}</h1>
				<p>{data.course.summary}</p>
				<div class="buttons">
					<Button href={data.course.udemyUrl}>
						Buy
						<span class="visually-hidden"> {data.course.title} </span>
						on Udemy
					</Button>
					<Button
						href="#promo"
						onclick={() => {
							video.play();
						}}>Watch Promo Video</Button
					>
				</div>
			</div>
			{#if image}
				<div class="image">
					<Card>
						<enhanced:img src={image.default} alt="" />
					</Card>
				</div>
			{/if}
		</header>
	</div>

	<!-- <div class="line">
		<ZigLine maxWidth="600px" height="25px" color="#da80e5" />
	</div> -->
	<div id="promo">
		<div class="pattern"></div>
		<div class="content-wrapper">
			<Card>
				<video
					bind:this={video}
					preload="metadata"
					controls
					src={data.course.promo}
					poster={image?.default?.img?.src}
				>
					<p>Your browser doesn&apos;t support HTML5 video</p>
					<track
						label="English"
						kind="captions"
						srcLang="en"
						src={`/${data.course.url}.vtt`}
						default
					/>
				</video>
			</Card>
		</div>
	</div>
	<div class="objectives">
		<div class="content-wrapper">
			<h2>What you'll Learn:</h2>

			<ul>
				{#each data.course.objectives as objective}
					<li>{objective}</li>
				{/each}
			</ul>
			<div class="button">
				<div class="line">
					<ZigLine height="25px" color={colorScheme === 'dark' ? '#262233' : '#e3ddf5'} />
				</div>
				<Button href={data.course.udemyUrl}>Learn More & Buy on Udemy</Button>
				<div class="line right">
					<ZigLine height="25px" color={colorScheme === 'dark' ? '#262233' : '#e3ddf5'} />
				</div>
			</div>
		</div>
	</div>

	<div class="course-reviews">
		<div class="pattern"></div>
		<div class="content-wrapper">
			<h2>What Students are Saying:</h2>
			<ul>
				{#each data.reviews as review}
					<li>
						<Card>
							<FiveStarts aria-hidden focusable="false" />
							<blockquote cite={data.course.udemyUrl}>
								<span>“{review.content}”</span>
								<footer>
									— <cite>{review.user.title}, Udemy Student</cite>
								</footer>
							</blockquote>
						</Card>
					</li>
				{/each}
			</ul>
			<div class="more-link">
				<a href={data.course.udemyUrl}
					>View More Reviews on Udemy
					<ArrowRight size="22" aria-hidden="true" focusable="false" />
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	:global(.waves-wrapper[data-route='/courses/[slug]']) {
		padding-bottom: 50vh !important;
		@include breakpoint.up('xl') {
			padding-bottom: 50vh !important;
		}
	}
	h2 {
		font-size: 2.1rem;
		text-decoration: underline;
		text-decoration-color: var(--purple);
		margin-bottom: functions.toRem(30);
	}
	.wrapper {
		margin-top: -40vh;
		padding-bottom: functions.toRem(120);
		position: relative;
		@include breakpoint.up('xl') {
			margin-top: -35vh !important;
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
			text-decoration: underline;
			text-decoration-color: var(--purple);
			:global(svg) {
				margin-inline-start: 10px;
			}
		}
	}
	.course-reviews {
		margin-top: functions.toRem(40);
		position: relative;
		z-index: 10;
		// .pattern {
		// 	--pattern-size: 60px;
		// 	position: absolute;
		// 	z-index: -1;
		// 	width: 100%;
		// 	height: 110%;
		// 	top: -10%;
		// 	left: 0;
		// 	background-image: repeating-conic-gradient(
		// 		from 30deg,
		// 		var(--card) 0% 60deg,
		// 		var(--bg) 0% 120deg
		// 	);
		// 	background-size: 100px 173px;
		// 	background-color: var(--bg);
		// 	opacity: var(--pattern-opacity);
		// 	&:after {
		// 		content: '';
		// 		position: absolute;
		// 		width: 100%;
		// 		height: 100%;
		// 		bottom: 0;
		// 		background: linear-gradient(to bottom, transparent, var(--bg));
		// 	}
		// }
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			columns: 1;
			gap: functions.toRem(40);
			@include breakpoint.up('lg') {
				columns: 2;
			}
			@include breakpoint.up('xl') {
				columns: 3;
			}
			li {
				margin-bottom: functions.toRem(40);
				-webkit-column-break-inside: avoid;
				page-break-inside: avoid;
				-webkit-break-inside: avoid;
				break-inside: avoid;
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
	.objectives {
		position: relative;
		z-index: 100;
		padding-bottom: functions.toRem(80);
		.button {
			// text-align: center;
			margin-top: functions.toRem(80);
			display: flex;
			align-items: center;
			justify-content: center;
			:global(.button) {
				max-width: 100%;
				padding: functions.toRem(20) functions.toRem(45);
				font-size: functions.toRem(22);
			}
		}
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			font-size: functions.toRem(20);
			font-weight: 500;
			columns: 1;
			gap: functions.toRem(40);
			@include breakpoint.up('xl') {
				columns: 2;
			}
			li {
				margin-bottom: functions.toRem(30);
				-webkit-column-break-inside: avoid;
				page-break-inside: avoid;
				break-inside: avoid;
				padding-left: functions.toRem(42);
				position: relative;
				&:after {
					content: '';
					width: 32px;
					height: 32px;
					background-size: 32px 32px;
					position: absolute;
					top: 2px;
					left: 0;
					background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='%23c11ed5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z'/%3E%3C/svg%3E");
				}
			}
		}
	}
	.line {
		// margin: functions.toRem(60) 0 0;
		position: relative;
		text-align: center;
		flex: 1;
		padding: 0 10px;
		:global(.zigzag-line) {
			position: relative;
		}
		// :global(.zigzag-line:after) {
		// 	content: '';
		// 	position: absolute;
		// 	height: 100%;
		// 	width: 100%;
		// 	background: linear-gradient(
		// 		to right,
		// 		rgba(0, 0, 0, 0) 0%,
		// 		rgba(0, 0, 0, 0) 50%,
		// 		var(--bg) 100%
		// 	);
		// 	top: 0;
		// 	left: 0;
		// }
		// &.right :global(.zigzag-line:after) {
		// 	background: linear-gradient(
		// 		to right,
		// 		var(--bg) 0%,
		// 		rgba(0, 0, 0, 0) 50%,
		// 		rgba(0, 0, 0, 0) 100%
		// 	);
		// }
	}
	.header {
		display: grid;
		grid-template-columns: 1fr;
		gap: 60px;
		position: relative;
		z-index: 100;
		@include breakpoint.up('lg') {
			grid-template-columns: 2fr 1fr;
		}
		.info {
			h1 {
				font-size: max(calc(1.5rem + 1.8vw), 2.4rem);
				font-weight: 800;
				margin: 0;
				margin-bottom: functions.toRem(20);
			}
			p {
				font-size: functions.toRem(22);
				margin: 0;
			}
			.buttons {
				margin: functions.toRem(40) -10px 0;
				:global(.button) {
					margin: 10px;
				}
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
					height: 15px;
					margin-right: 10px;
					vertical-align: middle;
				}
			}
		}
		.image {
			display: none;
			@include breakpoint.up('lg') {
				display: block;
			}
			:global(.card) {
				padding: 1px;
			}
			img {
				height: auto;
				vertical-align: middle;
			}
		}
	}
	#promo {
		position: relative;
		z-index: 100;

		margin: functions.toRem(120) 0;
		.pattern {
			--pattern-size: 60px;
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 130%;
			bottom: -40%;
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
		:global(.card) {
			padding: 0;
			max-width: 1300px;
			margin: 0 auto;
		}
		video {
			width: 100%;
			vertical-align: middle;
		}
	}
</style>
