<div class="content-wrapper">
	<div class="hero">
		<h2>
			Hello, I am <span class="underline">Ali Alaa</span><br />
		</h2>
		<p class="sub">A Frontend Web Developer</p>
	</div>
</div>

<style lang="scss">
	.hero {
		padding-top: 100px;
		@include breakpoint.up('md') {
			padding-top: 150px;
		}
		@include breakpoint.up('lg') {
			padding-top: 200px;
		}
	}

	p.sub {
		font-size: 1.4rem;
		font-weight: 500;
		font-family: dm;
		font-style: italic;
		margin: 1.5rem 0 0 0;
		@include breakpoint.up('md') {
			font-size: 1.8rem;
		}
		@include breakpoint.up('lg') {
			font-size: 2rem;
		}
	}
	h2 {
		position: relative;
		font-size: 2.5rem;
		margin: 0;
		// line-height: 1;
		@include breakpoint.up('md') {
			font-size: 3.3rem;
		}
		@include breakpoint.up('lg') {
			font-size: 4rem;
		}
	}
</style>
