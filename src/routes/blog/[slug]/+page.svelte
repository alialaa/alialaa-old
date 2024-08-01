<script lang="ts">
	import '../../../styles/prism-overrides.scss';
	import formatDate from '$lib/utils/format-date';
	import Card from '$components/Card.svelte';
	export let data;
</script>

<main class="wrapper">
	<div class="content-wrapper">
		<div class="inner">
			{#if data.meta.toc}
				<aside class="toc">
					<div class="stick">
						<Card>
							<div class="scroll">
								<h2>Table of Contents</h2>
								<nav>
									<ol>
										{#each data.meta.toc as item}
											<li><a href="#{item.id}">{item.text}</a></li>
										{/each}
									</ol>
								</nav>
							</div>
						</Card>
					</div>
				</aside>
			{/if}

			<article class="content">
				<header>
					<h1>{data.meta.title}</h1>
					<div class="info">
						Published on:{' '}
						<time dateTime={data.meta.date}>{formatDate(data.meta.date)}</time>
						{#if data.meta.readingStats}
							{@const time = Math.round(data.meta.readingStats.minutes)}
							<p>
								Reading Time: {time} minute{time > 1 && 's'}
							</p>
						{/if}
						{#if data.meta.tags && data.meta.tags.length > 0}
							<ul class="tags">
								{#each data.meta.tags as tag}
									<li>
										<a href={`/tags/${tag.split(' ').join('-').toLowerCase()}`}>#{tag}</a>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</header>
				<div class="post-content">
					<svelte:component this={data.content} />
				</div>
			</article>
		</div>
	</div>
</main>

<style lang="scss">
	:global(.waves-wrapper) {
		padding-bottom: 50vh !important;
	}
	.wrapper {
		margin-top: -30vh;
		position: relative;
	}
	.inner {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 60px;
		position: relative;

		aside.toc {
			order: 2;
			z-index: 10;
			padding-top: 100px;
			flex: 1;
			h2 {
				margin: 0 0 functions.toRem(10) 0;
				font-size: functions.toRem(20);
			}
			ol {
				margin: 0;
				padding: 0;
				list-style-position: inside;
				li {
					font-size: functions.toRem(18);
					margin-bottom: 5px;
					opacity: 0.8;
					font-weight: 500;
					&:hover {
						opacity: 1;
					}
					a {
						text-decoration: none;
					}
				}
			}
			.stick {
				position: sticky;
				top: 2rem;
				.scroll {
					padding: 1rem;
					overflow: auto;
					max-height: 90vh;
				}
				:global(.card) {
					padding: 0;
				}
			}
		}
	}
	.post-content {
		padding: 0 0 functions.toRem(80);
		:global(h1),
		:global(h2),
		:global(h3),
		:global(h4),
		:global(h5),
		:global(h6) {
			font-weight: 700;
		}
		:global(h1:hover a.anchor),
		:global(h2:hover a.anchor),
		:global(h3:hover a.anchor),
		:global(h4:hover a.anchor),
		:global(h5:hover a.anchor),
		:global(h6:hover a.anchor) {
			display: inline-block;
			position: relative;
			width: auto;
			height: auto;
			left: auto;
			overflow: visible;
		}
		:global(.card) {
			padding: functions.toRem(20);
			font-size: functions.toRem(19);
			margin: functions.toRem(30) 0;
		}
		:global(img) {
			max-width: 100%;
			margin: 3rem 0;
			display: block;
		}

		:global(h2) {
			margin: functions.toRem(80) 0 functions.toRem(25);
		}
		:global(p) {
			font-size: functions.toRem(19.5);
			margin: functions.toRem(20) 0;
		}
		:global(a.anchor) {
			width: 30px;
			text-align: center;
			margin-right: 10px;
			position: absolute;
			left: -10000px;
			top: auto;
			width: 1px;
			height: 1px;
			overflow: hidden;
		}
		:global(a.anchor:focus) {
			display: inline-block;
			position: relative;
			width: auto;
			height: auto;
			left: auto;
			overflow: visible;
		}
		:global(a.anchor svg) {
			width: 23px;
			height: 23px;
		}
		:global(a.anchor svg path) {
			fill: var(--text);
		}

		:global(b),
		:global(strong),
		:global(strong a),
		:global(.custom-block.lead-p p a) {
			font-weight: 600;
		}
		:global(.custom-block.lead-p p) {
			font-size: functions.toRem(21);
			margin-bottom: functions.toRem(60);
			font-weight: 500;
			display: block;
		}
		:global(ul),
		:global(ol) {
			padding: 0;
			padding-left: functions.toRem(25);
			font-size: functions.toRem(19.5);
			margin: functions.toRem(20) 0;
			font-weight: 400;
		}
		:global(ul li),
		:global(ol li) {
			margin-bottom: functions.toRem(10);
		}
	}
	.content {
		// flex: 3;
		min-width: 0;
		header {
			max-width: 800px;
			margin-bottom: functions.toRem(80);
			h1 {
				font-size: max(calc(1.5rem + 1.8vw), 2.4rem);
				font-weight: 800;
				margin-bottom: functions.toRem(20);
			}
			.tags {
				margin: 0;
				padding: 0;
				margin-top: functions.toRem(50);
				list-style: none;
				li {
					display: inline-block;
					margin-right: functions.toRem(10);
					margin-bottom: functions.toRem(10);
					font-size: functions.toRem(15);
					a {
						background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
						color: #fff;
						padding: functions.toRem(5) functions.toRem(10);
						&:focus {
							outline-color: #fff;
						}
					}
				}
			}
			.info {
				font-size: functions.toRem(18);
				font-weight: 500;
				margin-bottom: functions.toRem(15);
				opacity: 0.86;
				p {
					margin: 0;
					font-size: inherit;
					display: inline-block;
					&:before {
						content: '|';
						margin: 0 0.7rem;
					}
				}
			}
		}
	}
</style>
