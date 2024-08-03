<script lang="ts">
	import Head from '$components/Head.svelte';
	import Post from '$components/Post.svelte';

	let { data } = $props();
</script>

<Head title="The Blog" />

<div class="wrapper">
	<div class="content-wrapper">
		<div class="title">
			<h1><span class="underline">The Blog</span></h1>
		</div>
		<div class="cols">
			<section class="posts">
				<div class="grid">
					{#each data.posts as post}
						<Post {post} size="large" />
					{/each}
				</div>
			</section>
			<aside class="sidebar">
				<div class="sidebar-inner">
					<h3>Tags</h3>
					<ul class="tags">
						{#each data.tags as tag}
							<li>
								<a href={`/tags/${tag.name.split(' ').join('-').toLowerCase()}`}
									>#{tag.name} ({tag.count})</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</aside>
		</div>
	</div>
</div>

<style lang="scss">
	:global(.waves-wrapper[data-route='/blog']) {
		padding-bottom: 50vh !important;
		@include breakpoint.up('xl') {
			padding-bottom: 50vh !important;
		}
	}
	.wrapper {
		margin-top: -40vh;
		padding-bottom: functions.toRem(120);
		position: relative;
		@include breakpoint.up('xl') {
			margin-top: -35vh !important;
		}
	}
	.cols {
		display: grid;
		grid-template-columns: 1fr;
		margin-top: functions.toRem(80);
		position: relative;
		gap: 60px;
		@include breakpoint.up('xl') {
			grid-template-columns: 4fr 1fr;
		}
		z-index: 10;
		.posts {
			.grid {
				display: grid;
				grid-template-columns: 1fr;
				gap: 30px;
				@include breakpoint.up('lg') {
					grid-template-columns: 1fr;
				}
			}
		}
		.sidebar {
			.sidebar-inner {
				position: sticky;
				top: 30px;
				h3 {
					margin: 0;
					margin-bottom: functions.toRem(20);
				}
				.tags {
					margin: 0;
					padding: 0;
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
								outline-color: var(--op-bg);
							}
						}
					}
				}
			}
		}
	}
	.title {
		margin-bottom: functions.toRem(20);
		h1 {
			font-size: max(calc(2.2rem + 1.8vw), 2.4rem);
			font-weight: 800;
			margin: 0;
		}
	}
</style>
