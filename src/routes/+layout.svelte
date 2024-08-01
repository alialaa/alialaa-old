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
	import { X } from 'lucide-svelte';
	import NProgress from 'nprogress';
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import 'nprogress/nprogress.css';

	NProgress.configure({ showSpinner: false });

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
	});

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let hasError = false;
	let hasSuccess = false;
	// let hasError = $derived($page.url.searchParams.get('error'));
	// let hasSuccess = $derived($page.url.searchParams.get('success'));

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

{#if hasError || hasSuccess}
	<div class="message" role="status" class:error={hasError} class:success={hasSuccess}>
		{hasError ?? hasSuccess}
		<a href={$page.url.pathname} class="close">
			<X aria-hidden focusable="false" /> <span class="visually-hidden">Close message</span>
		</a>
	</div>
{/if}

<Waves data-route={$page.route.id}>
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
	.message {
		position: sticky;
		z-index: 9999;
		padding: functions.toRem(10) functions.toRem(20);
		top: 0;
		.close {
			position: absolute;
			right: 10px;
			top: 5px;
			&:focus {
				outline-color: #fff;
			}
			:global(svg) {
				stroke: var(--text);
				vertical-align: middle;
			}
		}
		&.error {
			background-color: var(--error);
		}
		&.success {
			background-color: var(--purple);
		}
	}
</style>
