<script lang="ts">
	import Post from '$components/Post.svelte';
	import { ArrowRight } from 'lucide-svelte';
	import type { Post as PostType } from '$types';

	let { posts }: { posts: PostType[] } = $props();
</script>

<section class="wrapper">
	<div class="content-wrapper">
		<div class="inner-content">
			<h3><span class="">Featured Posts</span></h3>
			<div class="posts">
				{#each posts as post}
					<Post {post} />
				{/each}
			</div>
			<div class="more-link">
				<a href="/blog"
					>View All Posts
					<ArrowRight size="22" aria-hidden="true" focusable="false" />
				</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.wrapper {
		// padding: 60px 0;
		// background:
		// 	linear-gradient(135deg, var(--bg) 25%, transparent 25%) -32px 0,
		// 	linear-gradient(225deg, var(--bg) 25%, transparent 25%) -32px 0,
		// 	linear-gradient(315deg, var(--bg) 25%, transparent 25%),
		// 	linear-gradient(45deg, var(--bg) 25%, transparent 25%);
		// background-size: 64px 64px;
		// background-color: rgba(74, 99, 107, 0.578);
	}
	.more-link {
		margin-top: functions.toRem(30);
		display: flex;
		justify-content: flex-end;
		a {
			display: flex;
			align-items: center;
			font-weight: 600;
			font-size: functions.toRem(20);
			text-decoration: underline solid var(--purple2);
			:global(svg) {
				margin-inline-start: 10px;
			}
		}
	}
	.posts {
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
		@include breakpoint.up('sm') {
			grid-template-columns: repeat(1, minmax(0, 1fr));
		}
		@include breakpoint.up('md') {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		@include breakpoint.up('xl') {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	h3 {
		font-size: 2.1rem;
		text-decoration: underline solid var(--purple);
		margin-bottom: functions.toRem(30);
	}
</style>
