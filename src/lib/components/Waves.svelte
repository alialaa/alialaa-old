<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="waves-wrapper" {...rest}>
	<div class="wave layer-3"></div>
	<div class="wave layer-2"></div>
	<div class="wave layer-1"></div>
	{#if children}{@render children()}{/if}
</div>

<style lang="scss">
	@keyframes fade_1 {
		to {
			opacity: 0.6;
		}
	}
	@keyframes fade_2 {
		to {
			opacity: 0.8;
		}
	}
	@keyframes crumb {
		to {
			clip-path: polygon(
				51.8% 27.5%,
				73.4% 70.5%,
				91.3% 43.3%,
				100% 66.8%,
				100% 100%,
				0% 100%,
				0% 42.3%,
				0% 29.5%,
				15.9% 61%,
				31% 61.8%
			);
		}
	}

	@keyframes layer_1 {
		to {
			clip-path: polygon(
				51.8% 27.5%,
				73.4% 70.5%,
				91.3% 43.3%,
				100% 66.8%,
				100% 100%,
				0% 100%,
				0% 42.3%,
				0% 29.5%,
				15.9% 61%,
				31% 61.8%
			);
		}
	}

	@keyframes layer_2 {
		to {
			clip-path: polygon(
				54.2% 25.5%,
				72.2% 41%,
				89.8% 9%,
				99.7% 0%,
				100% 100%,
				0% 100%,
				0% 42.3%,
				0% 60.8%,
				18% 49.3%,
				29% 0%
			);
		}
	}
	@keyframes layer_3 {
		to {
			clip-path: polygon(
				54.2% 25.5%,
				72.2% 41%,
				89.8% 9%,
				99.7% 0%,
				100% 100%,
				0% 100%,
				0% 42.3%,
				0% 60.8%,
				18% 49.3%,
				29% 0%
			);
		}
	}
	.waves-wrapper {
		padding-top: 5vh;
		padding-bottom: 8vh;
		position: relative;
		background: var(--bg);
		view-timeline: --waves-container block;
		overflow: hidden;
	}
	.wave {
		height: 100%;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		min-width: 1000px;
	}
	.layer-1 {
		background: linear-gradient(360deg, var(--bg) 0%, var(--wave-1) 100%);
		clip-path: polygon(
			59.5% 80%,
			78.2% 50.8%,
			91.4% 68.5%,
			100% 56.2%,
			100% 100%,
			0% 100%,
			0% 42.3%,
			0% 65%,
			16.3% 46.8%,
			40% 56.3%
		);
		animation:
			30s both infinite alternate linear layer_1,
			ease-out crumb;
		animation-timeline: auto, --waves-container, --waves-container;
		animation-range: exit-crossing 0% exit-crossing 100%;
	}
	.layer-2 {
		background: linear-gradient(352deg, var(--bg) 0%, var(--wave-2) 100%);
		clip-path: polygon(
			53.4% 36.5%,
			73.3% 24.3%,
			91.3% 43.3%,
			99.7% 22.8%,
			100% 100%,
			0% 100%,
			0% 42.3%,
			0% 3.3%,
			18.3% 25%,
			29.1% 10.5%
		);

		animation:
			30s both infinite alternate linear layer_2,
			ease-out crumb,
			ease-out fade_2;
		animation-timeline: auto, --waves-container, --waves-container;
		animation-range: exit-crossing 0% exit-crossing 100%;
	}
	.layer-3 {
		background: linear-gradient(352deg, var(--bg) 0%, var(--wave-3) 100%);
		clip-path: polygon(
			49.1% 8.5%,
			68.6% 20%,
			89.4% 7%,
			100% 11%,
			100% 100%,
			0% 100%,
			0% 14%,
			9% 18.8%,
			19.8% 12.3%,
			32.4% 15.8%
		);

		animation:
			30s both infinite alternate linear layer_3,
			ease-out crumb,
			ease-out fade_1;
		animation-timeline: auto, --waves-container, --waves-container;
		animation-range: exit-crossing 0% exit-crossing 100%;
	}
	:global(html.no-js) {
		@media (prefers-reduced-motion) {
			.wave {
				animation: none !important;
			}
		}
	}
	:global(html.js[data-animations='false']) {
		.wave {
			animation: none !important;
		}
	}
</style>
