<script>
	import { Mail } from 'lucide-svelte';
	import Button from './Button.svelte';
</script>

<div class="newsletter">
	<div class="title">
		<Mail focusable="false" aria-hidden="true" size="32" />
		<h3>Newsletter</h3>
	</div>
	<p>Subscribe to get notified whenever I release new courses, articles or tutorials.</p>
	<!-- <div
      className={`message ${error ? "error" : ""} ${success ? "success" : ""}`}
      aria-live="polite"
  >
      {loading ? (
          <span className="visually-hidden">Subscribing to newsletter</span>
      ) : (
          error || success
      )}
  </div> -->
	<form method="POST" action="/?/subscribeToNewsletter">
		<input type="text" aria-label="Name (Optional)" name="name" placeholder="Name (Optional)" />
		<input type="email" name="email" aria-label="Email" placeholder="Email" />
		<div>
			<Button dark disabled={false} type="submit">
				Subscribe<span class="visually-hidden"> to newsletter</span>
			</Button>
		</div>
	</form>
</div>

<style lang="scss">
	.newsletter {
		background: var(--wave-1);
		padding: functions.toRem(30);
		border: 2px dashed var(--purple);
		// background: linear-gradient(0deg, #c11dd4 0%, #8c44db 100%);
		width: 100%;
		// box-shadow: 4px 4px 0 #441a4a;
		// border: 1px solid #441a4a;
		.title {
			margin-bottom: functions.toRem(10);
			display: flex;
			align-items: center;
		}
		h3 {
			margin: 0 0 0 functions.toRem(15);

			// color: #fff;
			font-weight: 800;
			// text-shadow: 2px 2px 0 #130f1e;
		}
		p {
			margin: 0 0 functions.toRem(30) 0;
			// color: #fff;
			font-weight: 500;
			font-size: functions.toRem(18);
		}
		input {
			width: 100%;
			border: none;
			background: #ffffff;
			height: 45px;
			margin-bottom: functions.toRem(20);
			box-shadow: 1.5px 1.5px 0 #622876;
			border: 1px solid #2c0e36;
			padding: 0 functions.toRem(15);
			// &:focus {
			// 	outline: 4px solid #2c0e36;
			// 	// border: 4px solid #ac2dd7;
			// }
		}
		:global(button) {
			width: 100%;

			// &:focus {
			// 	outline: 3px solid #2d0e36;
			// }
			// &:after {
			// 	background: var(--wave-1);
			// }

			// &:before {
			// 	background: #6e1b77;
			// }
		}
		// :global(button:hover:after) {
		// 	background: var(--wave-1) !important;
		// }
	}
</style>
