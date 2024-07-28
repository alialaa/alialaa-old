<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import { browser } from '$app/environment';
	import { setContext } from 'svelte';
	import type { PreferencesContext } from '$types';
	import Waves from '$components/Waves.svelte';
	import Header from '$components/Header.svelte';
	import { page } from '$app/stores';
	import Hero from './home/Hero.svelte';
	import Footer from '$components/Footer.svelte';

	export const prerender = true;

	let { children } = $props();
	let reducedMotionSystem: boolean | null = $state(null);
	let colorSchemeSystem: string | null = $state(null);
	let reducedMotion: boolean | null = $state(null);
	let colorScheme: string | null = $state(null);

	if (browser) {
		const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const schemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		reducedMotionSystem = motionMediaQuery.matches;
		colorSchemeSystem = schemeMediaQuery.matches ? 'dark' : 'light';
		motionMediaQuery.addEventListener('change', () => {
			reducedMotionSystem = motionMediaQuery.matches;
		});
		schemeMediaQuery.addEventListener('change', () => {
			colorSchemeSystem = schemeMediaQuery.matches ? 'dark' : 'light';
		});
	}
	$effect(() => {
		const colorSchemeLocal = localStorage.getItem('colorScheme') || null;
		const reducedMotionLocal = JSON.parse(localStorage.getItem('reducedMotion') || 'null');
		reducedMotion = reducedMotionLocal === null ? reducedMotionSystem : reducedMotionLocal;
		colorScheme = colorSchemeLocal === null ? colorSchemeSystem : colorSchemeLocal;
	});

	$effect(() => {
		document.documentElement?.setAttribute('data-dark', colorScheme === 'dark' ? 'true' : 'false');
		document.documentElement?.setAttribute('data-animations', reducedMotion ? 'false' : 'true');
	});

	setContext<PreferencesContext>('preferences', {
		getColorScheme: () => colorScheme,
		getReducedMotion: () => reducedMotion,
		setColorScheme: (v: string) => {
			localStorage.setItem('colorScheme', v);
			colorScheme = v;
		},
		setReducedMotion: (v: boolean) => {
			localStorage.setItem('reducedMotion', JSON.stringify(v));
			reducedMotion = v;
		}
	});
</script>

<svelte:head>
	<script>
		document.documentElement.className = document.documentElement.className.replace(
			/\bno-js\b/,
			'js'
		);
		(function () {
			const prefersDarkModeSystem =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches === true;
			const colorSchemePref = localStorage.getItem('colorScheme') || null;
			document.documentElement.setAttribute(
				'data-dark',
				colorSchemePref === null ? prefersDarkModeSystem : colorSchemePref === 'dark'
			);
		})();
	</script>
</svelte:head>

<a class="skip-link" href="#main">Skip to Content</a>
<Waves>
	<Header />
	{#if $page.url.pathname === '/'}<Hero />{/if}
</Waves>

<div id="main">
	{@render children()}
</div>
<Footer {colorScheme} />

<style lang="scss">
	#main {
		width: 100%;
	}
</style>
