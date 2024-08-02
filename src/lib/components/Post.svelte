<script lang="ts">
	import formatDate from '$lib/utils/format-date';
	import type { Post } from '$types';
	import Card from './Card.svelte';

	let { post, size = 'small' }: { post: Post; size?: 'large' | 'small' } = $props();
	const date = new Date();
	const tags = ['Javascript', 'CSS'];
</script>

<Card>
	<article class="post size-{size}">
		<!-- <enhanced:img
			class="feat-img"
			loading="lazy"
			src="../../posts/gulp-for-wordpress/gulp-wordpress.jpg"
			alt="An alt text"
		></enhanced:img> -->
		<div class="content">
			<header>
				<div class="info">
					Published on:{' '}
					<time dateTime={post.date}>{formatDate(post.date)}</time>
					{#if post.readingStats}
						{@const time = Math.round(post.readingStats.minutes)}
						<p>
							Reading Time: {time || 1} minute{#if time > 1}s{/if}
						</p>
					{/if}
				</div>
				<h2 class="title">
					<a href={`/blog/tic-tac-toe-js-ui`}>{post.title}</a>
				</h2>
			</header>
			<p class="excerpt">
				{#if size === 'large'}
					{post.excerpt}
				{:else}
					{post.excerpt.slice(0, 200)}...
				{/if}
			</p>
			{#if post.tags && post.tags.length > 0}
				<footer>
					<ul class="tags">
						{#each post.tags as tag}
							<li>
								<a href={`/tags/${tag.split(' ').join('-').toLowerCase()}`}>#{tag}</a>
							</li>
						{/each}
					</ul>
				</footer>
			{/if}
		</div>
	</article>
</Card>

<style lang="scss">
	.post {
		position: relative;
		padding: 0.5rem;
		&.size-large {
			h2.title {
				font-size: calc(1.4rem + 0.4vw);
				// font-weight: 800;
			}
			p.excerpt {
				font-size: calc(1rem + 0.13vw);
				-webkit-line-clamp: 4;
			}
			.info {
				font-size: calc(0.9rem + 0.13vw);
			}
		}
	}
	.feat-img {
		height: auto;
		margin-bottom: 1.1rem;
		// position: absolute;
	}
	.content {
		position: relative;
	}
	h2.title {
		font-size: 1.6rem;
		margin-bottom: 1.1rem;
		margin-top: 0;
		a {
			font-weight: 700;
		}
	}
	p.excerpt {
		margin: 1rem 0 0.7rem;
		font-size: 1.1rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	.info {
		color: var(--links);
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: functions.toRem(15);
		opacity: 0.8;
		p {
			margin: 0;
			font-size: inherit;
			display: inline-block;
			&:before {
				content: '|';
				margin: 0 functions.toRem(7);
			}
		}
	}
	.tags {
		margin: 0;
		padding: 0;
		margin-top: functions.toRem(30);
		list-style: none;
		li {
			display: inline-block;
			margin-right: functions.toRem(16);
			margin-bottom: functions.toRem(16);
			font-size: functions.toRem(15);
			a {
				background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
				color: #fff;
				font-weight: 500;
				padding: functions.toRem(5) functions.toRem(10);
				&:focus {
					outline-color: var(--op-bg);
				}
			}
		}
	}
</style>
