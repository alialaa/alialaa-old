<script>
	import { page } from '$app/stores';

	import { navigationItems } from '$lib/utils/navigation';
	import Logo from './Logo.svelte';
	import Newsletter from './Newsletter.svelte';
	import SocialIcon from './SocialIcon.svelte';
	import Waves from './Waves.svelte';
	import ZigLine from './ZigLine.svelte';

	let { colorScheme } = $props();
</script>

<footer class="footer">
	<div style="text-align: center;">
		<ZigLine height="30px" color={colorScheme === 'dark' ? '#262233' : '#e3ddf5'} />
	</div>
	<div class="content-wrapper">
		<div class="footer-row">
			<div class="footer-column"><Newsletter /></div>
			<div class="footer-column links">
				<div class="quick">
					<h3>Site Links:</h3>
					<nav class="navigation" role="navigation" aria-label="Footer Navigation">
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
				<div class="external">
					<h3>External Links:</h3>

					<ul>
						<li>
							<a href="https://medium.com/@alialaa">My Articles on Medium</a>
						</li>
						<li>
							<a href="https://css-tricks.com/author/alialaa"> My Articles on CSS Tricks </a>
						</li>
						<li>
							<a href="https://www.udemy.com/user/ali-alaa-3/"> My Courses on Udemy </a>
						</li>
						<li>
							<a href="https://alialaa.github.io/css-grid-cheat-sheet/"> CSS Grid Cheat Sheet </a>
						</li>
						<li>
							<a href={`${$page.url.origin}/rss.xml`}>Articles RSS Feed</a>
						</li>
					</ul>
				</div>
				<div class="social">
					<h3>Find me on:</h3>

					<ul>
						<li>
							<a href="https://x.com/alialaa">
								<SocialIcon class="x" platform="X" focusable="false" aria-hidden="true" />
								<span>
									<span class="visually-hidden">Follow me on </span>X
								</span>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/alialaa17/">
								<SocialIcon platform="Instagram" focusable="false" aria-hidden="true" />
								<span>
									<span class="visually-hidden">Follow me on </span>Instagram
								</span>
							</a>
						</li>
						<li>
							<a href="https://www.youtube.com/channel/UCa-VVCGLQZv6IQWTKyVlnjg">
								<SocialIcon platform="Youtube" focusable="false" aria-hidden="true" />
								<span>
									<span class="visually-hidden">
										Subscribe to my{' '}
									</span>YouTube<span class="visually-hidden"> channel</span>
								</span>
							</a>
						</li>
						<li>
							<a href="https://github.com/alialaa/">
								<SocialIcon platform="Github" focusable="false" aria-hidden="true" />
								<span><span class="visually-hidden">Follow me on </span>GitHub</span>
							</a>
						</li>
						<li>
							<a href="https://bsky.app/profile/alialaa.bsky.social">
								<SocialIcon class="bsky" platform="Bluesky" focusable="false" aria-hidden="true" />
								<span>
									<span class="visually-hidden">Follow me on </span>Bluesky
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="logo">
			<Logo animate={false} />
		</div>
		<div class="copyright">Copyright &copy; 2020 Ali Alaa. All Rights Reserved.</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		padding: functions.toRem(80) 0;
		background-color: var(--card);
		position: relative;
		z-index: 22;
		:global(.zigzag-line) {
			position: absolute;
			top: -14px;
			left: 0;
			// margin-bottom: functions.toRem(40);
		}
		.footer-row {
			display: grid;
			grid-template-columns: 1fr;
			gap: 60px;
			@include breakpoint.up('lg') {
				grid-template-columns: 1fr 1.2fr;
				gap: 80px;
			}
			.links {
				display: grid;
				grid-template-columns: 1fr;
				gap: 50px;
				align-content: flex-start;
				@include breakpoint.up('md') {
					grid-template-columns: 1fr 1fr;
					gap: 30px;
				}
				h3 {
					font-weight: 800;
					font-size: functions.toRem(24);
					@include breakpoint.down('sm') {
						font-size: functions.toRem(28);
					}
				}
				ul {
					padding: 0;
					margin: 0;
					list-style: none;
					li {
						/* display: inline-block; */
						/* margin-right: 2rem; */
						margin-bottom: 3px;
						@include breakpoint.down('sm') {
							margin-bottom: 0;
						}
						a {
							font-weight: 500;
							font-size: functions.toRem(16);
							text-decoration: underline;
							text-decoration-color: var(--purple);
							@include breakpoint.down('sm') {
								min-height: 48px;
								display: inline-flex;
								align-items: center;
							}
						}
					}
				}
				.social {
					@include breakpoint.up('sm') {
						grid-area: auto / span 2 / auto / auto;
					}
					h3 {
						margin-bottom: functions.toRem(5);
					}
					ul {
						/* display: flex; */
						margin: 0 -15px;
						li {
							display: inline-block;
							margin: 15px;
							a {
								text-decoration: none;
								span {
									text-decoration: underline;
									text-decoration-color: var(--purple);
								}
								:global(svg) {
									width: 25px;
									height: auto;
									vertical-align: middle;
									margin-right: 10px;
								}
								:global(svg.x),
								:global(svg.bsky) {
									width: 22px;
									height: auto;
									vertical-align: middle;
								}
								:global(svg path) {
									fill: var(--text);
								}
							}
						}
					}
				}
			}
		}
		.logo {
			text-align: center;
			padding: functions.toRem(60) 0 functions.toRem(10);
			@include breakpoint.up('sm') {
				padding: functions.toRem(80) 0 functions.toRem(10);
			}
			:global(svg) {
				width: 60px;
			}
		}
		.copyright {
			text-align: center;
			font-weight: 600;
		}
	}
</style>
