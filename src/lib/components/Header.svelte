<script lang="ts">
	import Logo from '$components/Logo.svelte';
	import { navigationItems } from '$lib/utils/navigation';
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	import type { PreferencesContext } from '$types';
	import ColorSchemeButton from './ColorSchemeButton.svelte';
	import ReducedMotionButton from './ReducedMotionButton.svelte';

	const { getColorScheme, setColorScheme, getReducedMotion, setReducedMotion } =
		getContext<PreferencesContext>('preferences');
	let colorScheme = $derived(getColorScheme());
	let reducedMotion = $derived(getReducedMotion());
</script>

<div class="wrapper">
	<h1>
		<Logo />
	</h1>
	<nav class="navigation" role="navigation" aria-label="Main Navigation">
		<ul>
			{#each navigationItems as navigationItem}
				{@const isCurrent = $page.url.pathname === navigationItem.path}
				<li class:active={isCurrent}>
					<a href={navigationItem.path}
						>{navigationItem.title}{#if isCurrent}<span class="visually-hidden">
								(current page)</span
							>{/if}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="preferences">
		<ColorSchemeButton {reducedMotion} {colorScheme} {setColorScheme} />
		<ReducedMotionButton {reducedMotion} {setReducedMotion} />
	</div>
</div>

<style lang="scss">
	.wrapper {
		text-align: center;
		position: relative;
		// position: absolute;
		// width: 100%;
		// top: 2rem;
		// z-index: 100;
		.navigation {
			margin-top: 1rem;
			@include breakpoint.down('md') {
				margin-top: 0;
			}
			ul {
				margin: 0;
				list-style: none;
				pointer-events: auto;
				padding: 0;
				text-align: center;
				li {
					display: inline-block;
					font-weight: 500;
					&:after {
						content: '/';
						color: var(--text);
						margin: 0 0.5rem;
						@include breakpoint.down('sm') {
							content: none;
						}
					}
					&:last-child:after {
						content: none;
					}
					a {
						color: var(--text);
						text-decoration: none;
						position: relative;
						@include breakpoint.down('sm') {
							font-size: 0.9rem;
						}
						@include breakpoint.down('sm') {
							padding: 15px 10px;
							display: inline-block;
						}
					}
					&.active a {
						font-weight: 700;
						&:after {
							content: '';
							height: 2px;
							width: 100%;
							position: absolute;
							bottom: -2px;
							left: 0;
							background: linear-gradient(90deg, var(--purple2) 0%, var(--purple) 100%);
							@include breakpoint.down('sm') {
								width: calc(100% - 20px);
								left: 10px;
								bottom: 17px;
							}
						}
						&[data-focus-visible-added] {
							&:after {
								content: none;
							}
						}
					}
				}
			}
		}
		.preferences {
			position: absolute;
			top: -5vh;
			left: 15px;
			z-index: 100;
			display: flex;
			@include breakpoint.down('md') {
				position: relative;
				top: 0;
				left: 0;
				justify-content: center;
				margin-top: 2em;
			}
			:global(.toggle-button) {
				background: transparent;
				border: none;
				padding: 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				cursor: pointer;
				padding: 8px;
				margin: 0 5px;
				position: relative;
			}
			// :global(.toggle-button:focus-visible) {
			// 	outline: none;
			// 	background-color: rgba(255, 255, 255, 0.2);
			// }

			:global(.toggle-button .toggle-button-text) {
				color: var(--text);
				font-size: functions.toRem(11);
				margin: 0;
				margin-top: 10px;
				@include breakpoint.down('sm') {
					font-size: 10px;
				}
			}
		}
	}
</style>
