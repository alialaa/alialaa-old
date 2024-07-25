<script>
	import Logo from '$components/Logo.svelte';
	import { navigationItems } from '$lib/utils/navigation';
	import { page } from '$app/stores';
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
</div>

<style lang="scss">
	.wrapper {
		text-align: center;
		position: relative;
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
	}
</style>
