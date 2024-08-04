<script lang="ts">
	import Head from '$components/Head.svelte';
	import { Clock } from 'lucide-svelte';
	import getImage from './getImage.js';
	import Button from '$components/Button.svelte';

	let { data } = $props();

	let image = $derived(getImage(data.course.udemyID, data.course.image));
</script>

<Head
	title={data.course.title}
	description={data.course.summary}
	image={image?.default?.img?.src}
/>

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
					<Button>Watch Promo Video</Button>
				</div>
			</div>
			{#if image}
				<div class="image">
					<enhanced:img src={image.default} alt="" />
				</div>
			{/if}
		</header>
		<div class="promo">
			<video preload="metadata" controls src={data.course.promo} poster={image?.default?.img?.src}>
				<p>Your browser doesn&apos;t support HTML5 video</p>
				<track
					label="English"
					kind="captions"
					srcLang="en"
					src={`/${data.course.url}.vtt`}
					default
				/>
			</video>
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
	.wrapper {
		margin-top: -40vh;
		padding-bottom: functions.toRem(120);
		position: relative;
		@include breakpoint.up('xl') {
			margin-top: -35vh !important;
		}
	}
</style>
