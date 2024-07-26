<script lang="ts">
	import Card from './Card.svelte';

	let {} = $props();
	const date = new Date();
	const tags = ['Javascript', 'CSS'];
	const timeToRead = 5;
	const dateString = date.toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<Card>
	<article class="post">
		<!-- <enhanced:img
			class="feat-img"
			loading="lazy"
			src="../../posts/gulp-for-wordpress/gulp-wordpress.jpg"
			alt="An alt text"
		></enhanced:img> -->
		<div class="content">
			<header>
				<div class="info">
					<time datetime={date.toISOString()}>{dateString}</time>
					<p>
						{timeToRead} min{timeToRead > 1 && 's'} read
					</p>
				</div>
				<h2 class="title">
					<a href={`/blog/rfgerg`}>Automating your WordPress Theme Development Workflow with Gulp</a
					>
				</h2>
			</header>
			<p class="excerpt">
				In the previous part we created a JavaScript class for the computer player. In this final
				part, we will build a simple user interface for the tic-tac-toe board.
			</p>
			{#if tags && tags.length > 0}
				<footer>
					<ul class="tags">
						{#each tags as tag}
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
	}
	.info {
		color: var(--links);
		font-size: 1rem;
		font-weight: 500;
		margin-bottom: functions.toRem(8);
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
					outline-color: #000;
				}
			}
		}
	}
</style>
