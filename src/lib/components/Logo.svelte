<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	let { animate = true, ...props }: { animate?: boolean } & SVGAttributes<SVGSVGElement> = $props();
	let logo: SVGElement;
	let isAnimating: boolean = $state(animate);

	$effect(() => {
		function onPathAnimationEnd() {
			isAnimating = false;
			setTimeout(() => {
				isAnimating = true;
			}, 5000);
		}
		if (animate) {
			isAnimating = true;
			logo.querySelector('path#l_s')?.addEventListener('animationend', onPathAnimationEnd);
		} else {
			isAnimating = false;
		}
		return () => {
			logo.querySelector('path#l_s')?.removeEventListener('animationend', onPathAnimationEnd);
		};
	});
</script>

<svg
	role="img"
	bind:this={logo}
	focusable="false"
	aria-labelledby="svg-logo-title svg-logo-desc"
	width="120px"
	height="60px"
	viewBox="0 0 434 219.675"
	{...props}
>
	<title id="svg-logo-title">Ali Alaa</title>
	<desc id="svg-logo-desc">
		The logo is comprised of to A letters joined together representing my initials.
	</desc>
	<path
		id="l_s"
		class={isAnimating ? 'animate' : ''}
		fill="none"
		stroke="#fff"
		stroke-width="3"
		stroke-miterlimit="10"
		d="M432.5,146.5h-40.881l-53.456-145h-1h-29h-1
l-53.456,145h-70.088l-53.456-145h-1h-29h-1l-53.456,145H1.5v31h32.778l-15.115,40.25l36.083,0.413L69.223,177.5h90.88
l13.976,40.288l36.084,0.337L195.048,177.5h47.23l-15.115,40.25l36.084,0.413l13.976-40.663h90.879l13.977,40.288l36.084,0.337
L403.048,177.5H432.5V146.5z M79.78,146.5l34.883-102.424L149.545,146.5H79.78z M287.781,146.5l34.882-102.424L357.545,146.5
H287.781z"
	/>
</svg>

<style lang="scss">
	@keyframes drawLogo {
		from {
			stroke-dashoffset: 2000;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
	#l_s {
		fill: rgba(255, 255, 255, 1);
		transition: fill 0.7s;
		&.animate {
			fill: rgba(255, 255, 255, 0);
			stroke-dasharray: 2000;
			stroke-dashoffset: 2000;
			animation: 3s linear drawLogo;
		}
	}
</style>
