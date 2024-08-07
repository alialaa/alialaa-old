<script>
	import Card from '$components/Card.svelte';
	import Head from '$components/Head.svelte';
</script>

<Head title="Uses" />

<div class="wrapper">
	<div class="pattern"></div>
	<div class="content-wrapper">
		<div class="title">
			<h1><span class="underline">Uses</span></h1>
		</div>
		<div class="content">
			<div class="course-production">
				<Card>
					<div class="section-title">
						<h2>Course Production</h2>
						<!-- <p>Here are some of the things that I use to produce courses.</p> -->
					</div>
					<ul>
						<li>
							I use a Mac mini (M1, 2020), 16 GB memory. It's working great so far for recording.
							Very quite and fast enough for my kind of editing.
						</li>
						<li>
							I have a couple of 24'' ASUS VG248 Full HD monitors. I use one to record the screen
							and the other to have some notes/code opened that I look at while recording.
						</li>
						<li>
							For screen recording and editing I use{' '}
							<a href="http://www.telestream.net/screenflow/overview.htm">ScreenFlow</a>. I used to
							use{' '}
							<a href="https://www.techsmith.com/camtasia-pricing.html">Camtasia</a> which I got for
							a good price using a promo code. However when I needed to upgrade to the newest version
							I found out that ScreenFlow is almost half the price and it does everything that I want.
						</li>
						<li>
							I have recently been recording using a{' '}
							<a href="http://www.rode.com/microphones/nt1">RØDE NT1</a> with a{' '}
							<a href="https://www.rode.com/interfaces/ai1">RØDE AI-1</a> interface. RØDE is also
							responsible for attaching the mic to the desk using the{' '}
							<a href="http://www.rode.com/accessories/psa1">PSA1</a> boom arm.
						</li>
						<li>
							I use{' '}
							<a href="https://www.adobe.com/products/audition.html">Adobe Audacity</a>{' '}
							for post-processing my voice recordings. I do things like noise reduction, normalization,
							equalization, etc...
						</li>
					</ul>
				</Card>
			</div>
			<div class="coding">
				<Card>
					<div class="section-title">
						<h2>Coding & Services</h2>
						<!-- <p>Hardware, Code editor, softwares, terminal and more.</p> -->
					</div>
					<div class="coding-list">
						<ul>
							<li>
								I currently code on a Mac mini (M1, 2020), 16 GB memory and a 14-inch MacBook Pro
								(M3 Pro, 2023), 18 GB Memory.
							</li>
							<li>
								I use <a href="https://code.visualstudio.com">VS Code</a> as my main code editor for
								both; my daily work and recording courses and videos.
							</li>
							<li>
								I prefer dark VS Code themes. My current theme is{' '}
								<a
									href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
									>GitHub Dark Default</a
								>.
							</li>
							<li>
								I use <a href="https://dank.sh">Dank Mono</a> as a font for VS Code. I also use this
								font on this website in the blog for code snippets.
							</li>
							<li>
								I use the default macOS terminal with the default Z shell. And <a
									href="https://aws.amazon.com/q/">Amazon Q</a
								> for assistance.
							</li>
							<li>
								For browsers, I use <a href="https://www.apple.com/eg/safari/">Safari</a> for
								browsing and <a href="https://www.google.com/chrome/">Google Chrome</a> for development.
								I use other browsers for testing.
							</li>
							<li>
								I use <a href="https://www.mamp.info/">MAMP</a> for WordPress development,
								<a href="https://www.postman.com/">Postman</a>
								for API testing, <a href="https://www.notion.so/">Notion</a> for notes and task
								management, <a href="https://slack.com/">Slack</a> and
								<a href="https://discord.com">Discord</a>
								for communication and{' '}
								<a href="https://www.apple.com/keynote/">Keynote</a> for course presentations.
							</li>
							<li>
								This website is built with <a href="https://kit.svelte.dev/">SvelteKit</a>, hosted
								on{' '}
								<a href="https://www.netlify.com/">Netlify</a> and the code is hosted on
								<a href="https://github.com/alialaa/alialaa"> GitHub</a>. Amazon&apos;s
								<a href="https://aws.amazon.com/s3/">S3</a>
								and{' '}
								<a href="https://aws.amazon.com/cloudfront/">CloudFront</a> are used to host some assets.
							</li>
							<li>
								I use <a href="https://godaddy.com/">GoDaddy</a> for domain names.
							</li>
							<li>
								I use <a href="https://sendy.co/">Sendy</a> for newsletters. It&apos;s a self-hosted
								service which uses{' '}
								<a href="https://aws.amazon.com/ses">Amazon Simple Email Service</a>
								. It&apos;s written using PHP and thus it needs the{' '}
								<a href="https://en.wikipedia.org/wiki/LAMP_(software_bundle)"> LAMP stack </a>{' '}
								to be hosted. I use a{' '}
								<a href="https://www.digitalocean.com/">DigitalOcean</a> droplet with the LAMP stack
								installed to host it.
							</li>
						</ul>
					</div>
				</Card>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	:global(.waves-wrapper[data-route='/uses']) {
		padding-bottom: 50vh !important;
		@include breakpoint.up('xl') {
			padding-bottom: 50vh !important;
		}
	}
	.content-wrapper {
		position: relative;
		z-index: 100;
	}
	.wrapper {
		margin-top: -40vh;
		padding-bottom: functions.toRem(120);
		position: relative;
		z-index: 100;
		@include breakpoint.up('xl') {
			margin-top: -35vh !important;
		}
		.pattern {
			--pattern-size: 60px;
			position: absolute;
			z-index: -1;
			width: 100%;
			height: 70%;
			bottom: 0%;
			left: 0;
			background:
				linear-gradient(135deg, var(--bg) 25%, transparent 25%) calc(-1 * var(--pattern-size)) 0,
				linear-gradient(225deg, var(--bg) 25%, transparent 25%) calc(-1 * var(--pattern-size)) 0,
				linear-gradient(315deg, var(--bg) 25%, transparent 25%),
				linear-gradient(45deg, var(--bg) 25%, transparent 25%);
			background-size: calc(2 * var(--pattern-size)) calc(2 * var(--pattern-size));
			background-color: var(--card);

			opacity: var(--pattern-opacity);
			&:after {
				content: '';
				position: absolute;
				width: 100%;
				height: 50%;
				bottom: 0;
				background: linear-gradient(to bottom, transparent, var(--bg));
			}
		}
	}
	.section-title {
		margin-bottom: functions.toRem(30);
		h2 {
			font-weight: 700;
			font-size: functions.toRem(34);
			line-height: 1.2;
			margin: 0;
			margin-bottom: functions.toRem(15);
			text-decoration: underline;
			text-decoration-color: var(--purple);
		}
		p {
			opacity: 0.8;
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
	.content {
		margin: functions.toRem(80) 0;
		display: grid;
		gap: functions.toRem(60);

		@include breakpoint.up('xl') {
			grid-template-columns: 1fr 1fr;
		}
		:global(.card) {
			height: 100%;
			padding: 2rem;
		}
		ul {
			margin: functions.toRem(24) 0;
			padding: 0;
			list-style: none;
			li {
				margin-bottom: functions.toRem(20);
				padding-left: functions.toRem(30);
				position: relative;
				font-size: functions.toRem(20);
				&:before {
					content: '';
					width: 14px;
					height: 4px;
					left: 0;
					position: absolute;
					background: linear-gradient(90deg, #c11dd4 0%, #8c44db 100%);
					top: 14px;
				}
			}
		}
		p {
			font-size: functions.toRem(20);
			margin: 0px 0px functions.toRem(15);
		}
		:global(.twitter-mention-button) {
			vertical-align: middle;
		}
	}
</style>
