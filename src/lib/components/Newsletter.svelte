<script>
	import { Mail } from 'lucide-svelte';
	import Button from './Button.svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	let loading = $state(false);
	let error = $state('');
	let success = $state('');
</script>

<div class="newsletter">
	<div class="title">
		<Mail focusable="false" aria-hidden="true" size="32" />
		<h3>Newsletter</h3>
	</div>
	<p>Subscribe to get notified whenever I release new courses, articles or tutorials.</p>
	<div class="message" class:error class:success aria-live="polite">
		{#if loading}
			<span class="visually-hidden">Subscribing to newsletter</span>
		{:else}
			{error || success}
		{/if}
	</div>
	<form
		method="POST"
		action="/newsletter?redirect={$page.url.pathname}"
		use:enhance={({ cancel }) => {
			if (loading) {
				cancel();
			}
			loading = true;
			error = '';
			success = '';
			return ({ result }) => {
				if (result.type === 'error') {
					error = result.error?.message || 'An error has occurred!';
				}
				if (result.type === 'redirect') {
					const url = new URL(`${$page.url.origin}${result.location}`);
					const _error = url.searchParams.get('error');
					const _success = url.searchParams.get('success');
					if (_error) {
						error = _error;
					}
					if (_success) {
						success = _success;
					}
				}
				loading = false;
			};
		}}
	>
		<input type="text" aria-label="Name (Optional)" name="name" placeholder="Name (Optional)" />
		<input type="email" name="email" aria-label="Email" placeholder="Email" />
		<div>
			<Button dark disabled={loading} type="submit">
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
		width: 100%;
		.message {
			color: #ffffff;
			font-weight: 500;
			&.error {
				padding: functions.toRem(10);
				margin-bottom: functions.toRem(20);
				background: var(--error);
			}
			&.success {
				padding: functions.toRem(10);
				margin-bottom: functions.toRem(20);
				background: var(--purple);
			}
		}
		.title {
			margin-bottom: functions.toRem(10);
			display: flex;
			align-items: center;
		}
		h3 {
			margin: 0 0 0 functions.toRem(15);
			font-weight: 800;
		}
		p {
			margin: 0 0 functions.toRem(30) 0;
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
		}
		:global(button) {
			width: 100%;
		}
	}
</style>
