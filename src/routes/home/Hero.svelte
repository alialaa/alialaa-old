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
		padding-top: 20vh;
	}

	p.sub {
		font-size: 2rem;
		font-weight: 500;
		font-family: dm;
		font-style: italic;
		margin: 1.5rem 0 0 0;
	}
	h2 {
		position: relative;
		font-size: 4rem;
		margin: 0;
		line-height: 1;
		span.underline {
			position: relative;
			transform-style: preserve-3d;
			&::before {
				content: '';
				background-image: url('../../lib/assets/zig-02.svg');
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
	}
</style>
