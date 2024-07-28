<script lang="ts">
	import ZigLine from '$components/ZigLine.svelte';
	import type { PreferencesContext } from '$types';
	import { getContext } from 'svelte';
	import FeaturedPosts from './home/FeaturedPosts.svelte';
	import FeaturedCourses from './home/FeaturedCourses.svelte';
	import Testimonials from './home/Testimonials.svelte';

	let { data } = $props();
	const { getColorScheme } = getContext<PreferencesContext>('preferences');
	let colorScheme = $derived(getColorScheme());
</script>

<div class="content-wrapper">
	<p class="intro">
		I am a freelance front-end developer based in Egypt 🇪🇬. I develop UI's for the web and hybrid
		mobile applications. I am currently focusing on creating <a href="/courses">online courses</a>,
		<a href="/blog">writing articles</a>
		and
		<a href="https://www.youtube.com/channel/UCa-VVCGLQZv6IQWTKyVlnjg">publishing free tutorials</a
		>. If you are interested in working with me, feel free to <a href="/contact">contact me</a>.
	</p>
	<div class="intro-line">
		<ZigLine
			maxWidth="550px"
			height="25px"
			color={colorScheme === 'dark' ? '#da80e5' : '#da80e5'}
		/>
	</div>
</div>

<FeaturedPosts />

<FeaturedCourses
	featuredReviews={data.featuredCoursesReviews}
	featuredCourses={data.featuredCourses}
/>

<Testimonials />

<style lang="scss">
	:global(.waves-wrapper) {
		padding-bottom: 5vh !important;
	}
	.intro {
		font-size: 1.3rem;
		max-width: 1300px;
		padding-top: 40px;
		margin: 0;
		@include breakpoint.up('md') {
			font-size: 1.5rem;
		}
		@include breakpoint.up('lg') {
			font-size: 1.7rem;
		}
		a {
			font-weight: 500;
			text-decoration: underline solid var(--purple);
		}
	}
	.intro-line {
		margin: 40px 0 80px;
		position: relative;
		:global(.zigzag-line) {
			position: relative;
		}
		:global(.zigzag-line:after) {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			background: linear-gradient(
				to right,
				rgba(0, 0, 0, 0) 0%,
				rgba(0, 0, 0, 0) 70%,
				var(--bg) 100%
			);

			top: 0;
			left: 0;
		}
		:global(.zigzag-line) {
			// mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, var(--bg) 80%, var(--bg) 100%);
		}
	}
</style>
