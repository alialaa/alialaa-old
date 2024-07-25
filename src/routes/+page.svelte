<script lang="ts">
	import Header from '$components/Header.svelte';
	import Waves from '$components/Waves.svelte';
	import Hero from './home/Hero.svelte';
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
</div>

<div style="height: 1000px"></div>

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
</style>
