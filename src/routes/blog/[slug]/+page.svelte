<script lang="ts">
	import '../../../styles/prism-overrides.css';
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

				<svelte:component this={data.content} />
			</article>
		</div>
	</div>
</main>

<style lang="scss">
	:global(.waves-wrapper) {
		padding-bottom: 20vh !important;
	}
	.wrapper {
		margin-top: -10vh;
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
			padding-top: 150px;
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
					font-size: functions.toRem(16);
					margin-bottom: 10px;
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
	.content {
		// flex: 3;
		min-width: 0;
		header {
			max-width: 800px;
			h1 {
				font-size: max(calc(1.5rem + 1.5vw), 2.4rem);
				font-weight: 800;
				margin-bottom: 2rem;
			}
		}
	}
</style>
