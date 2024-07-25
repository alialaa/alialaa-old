<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import { browser } from '$app/environment';
	import { setContext } from 'svelte';
	import type { PreferencesContext } from '$types';
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
		const colorSchemeLocal = JSON.parse(localStorage.getItem('colorScheme') || 'null');
		const reducedMotionLocal = JSON.parse(localStorage.getItem('colorScheme') || 'null');
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
	</script>
</svelte:head>

<slot />
