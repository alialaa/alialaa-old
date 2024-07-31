<script lang="ts">
	import Newsletter from '$components/Newsletter.svelte';

	let { form } = $props();
</script>

<div class="outer">
	<div class="content-wrapper">
		<p class="message" class:error={form?.newsletterError} class:success={form?.newsletterSuccess}>
			{form?.newsletterError || form?.newsletterSuccess}
		</p>
		<Newsletter />
	</div>
</div>

<style lang="scss">
	.outer {
		padding: 80px 0;
		.content-wrapper {
			max-width: 700px;
		}
		.message {
			color: #ffffff;
			font-weight: 500;
			padding: functions.toRem(10);
			margin-bottom: functions.toRem(20);
			// margin: 0;
			&.error {
				background: var(--error);
			}
			&.success {
				background: var(--purple);
			}
		}
	}
</style>
