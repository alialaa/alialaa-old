<script lang="ts">
	// import zig from '$lib/assets/zig-02.svg'

	import Logo from '$components/Logo.svelte';
	import { navigationItems } from '$lib/utils/navigation';
	import { page } from '$app/stores';
</script>

<div class="lmfao">
	<!-- <div class="lol lol0"></div> -->
	<div class="lol lol3"></div>
	<div class="lol lol2"></div>
	<div class="lol lol1"></div>
	<div class="inner">
		<div class="top">
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
		</div>
		<div class="bottom">
			<h2>
				Hello, I am <span class="underline">Ali Alaa</span><br />
			</h2>
			<p class="sub">A Frontend Web Developer</p>
		</div>
	</div>
</div>

<div class="content">
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
	.content {
		max-width: var(--content-width);
		margin: 0 auto;
		padding: 0 30px;
		position: relative;
		.intro {
			font-size: 1.7rem;
			max-width: 1300px;
			a {
				font-weight: 500;
			}
		}
	}
	@keyframes fade1 {
		to {
			opacity: 1;
		}
	}
	@keyframes fade2 {
		to {
			opacity: 1;
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
	@keyframes crumb2 {
		to {
			clip-path: polygon(
				58.7% 92.5%,
				69.6% 93.5%,
				89.9% 89.5%,
				98.7% 90%,
				100% 100%,
				0% 100%,
				0% 80%,
				21.4% 87.8%,
				34.2% 95.3%,
				45.4% 86.5%
			);
		}
	}
	@keyframes rofl {
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
	@keyframes rofl0 {
		to {
			clip-path: polygon(
				55.2% 16.3%,
				69.8% 0%,
				90.6% 0%,
				100% 13.3%,
				100% 100%,
				0% 100%,
				0% 5.8%,
				7.2% 17%,
				17.4% 0%,
				37.2% 6.3%
			);
		}
	}
	@keyframes rofl2 {
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
	@keyframes rofl3 {
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
	.lmfao {
		padding-top: 5vh;
		padding-bottom: 8vh;
		position: relative;
		background: linear-gradient(0deg, #05010f 0%, #05010f 100%);
		view-timeline: --phone block;
		.inner {
			max-width: var(--content-width);
			margin: 0 auto;
			padding: 0 30px;
			position: relative;
			.top {
				text-align: center;
			}
			.bottom {
				padding-top: 20vh;
			}
		}
		p.sub {
			font-size: 2rem;
			font-weight: 500;
			font-family: dm;
			font-style: italic;
			margin: 1.5rem 0 0 0;
		}
		h2 {
			--shadow-color: var(--purple2);
			color: #ffffffeb;
			position: relative;
			font-size: 4rem;
			margin: 0;
			line-height: 1;

			span.underline {
				// text-decoration: underline wavy var(--purple2);
				position: relative;
				transform-style: preserve-3d;
				&::before {
					content: '';
					background-image: url('../lib/assets/zig-02.svg');
					position: absolute;
					bottom: -10%;
					transform: translateZ(-1px);
					left: 0;
					width: 100%;
					height: 30%;
					background-repeat: repeat-x;
					z-index: -1;
				}
			}
			// background-image: linear-gradient(90deg, rgb(239, 53, 239), rgb(173, 65, 255));
			// color: transparent;
			// background-clip: text;
			// text-shadow: 1px 1px var(--shadow-color),
			//           2px 2px var(--shadow-color),
			//           3px 3px var(--shadow-color);
			//           // 4px 4px var(--shadow-color),
			//           // 5px 5px var(--shadow-color),
			//           // 6px 6px var(--shadow-color);
		}
	}
	.lol {
		height: 100%;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.lol0 {
		background: linear-gradient(360deg, var(--bg) 0%, #0c081a 100%);
		clip-path: polygon(
			54.9% 2.8%,
			78.7% 11%,
			89.5% 6%,
			100% 0%,
			100% 100%,
			0% 100%,
			0% 9.3%,
			6.9% 0%,
			18.2% 9.8%,
			38.6% 19.8%
		);

		animation: 10s both infinite alternate linear rofl0;

		// opacity: 0.1;
	}
	.lol1 {
		background: linear-gradient(360deg, var(--bg) 0%, #262233 100%);
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
			30s both infinite alternate linear rofl,
			ease-out crumb;
		animation-timeline: auto, --phone;
		animation-range: exit-crossing 0% exit-crossing 100%;

		// opacity: 0.1;
	}
	.lol2 {
		background: linear-gradient(352deg, var(--bg) 0%, #201b29 100%);
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
			30s both infinite alternate linear rofl2,
			ease-out crumb,
			ease-out fade2;
		animation-timeline: auto, --phone, --phone;
		animation-range: exit-crossing 0% exit-crossing 100%;
		// opacity: 0.1;
	}
	.lol3 {
		background: linear-gradient(352deg, var(--bg) 0%, #2a2437 100%);
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
			30s both infinite alternate linear rofl3,
			ease-out crumb,
			ease-out fade1;
		animation-timeline: auto, --phone, --phone;
		animation-range: exit-crossing 0% exit-crossing 100%;
		// opacity: 0.1;
	}
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
				&:after {
					content: '/';
					color: #fff;
					margin: 0 0.5rem;
					@include breakpoint.down('sm') {
						content: none;
					}
				}
				&:last-child:after {
					content: none;
				}
				a {
					color: #ffffff;
					text-decoration: none;
					position: relative;
					@include breakpoint.down('sm') {
						font-size: 1.5rem;
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
</style>
