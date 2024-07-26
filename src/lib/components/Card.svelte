<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="card" {...rest}>
	{#if children}{@render children()}{/if}
</div>

<style lang="scss">
	.card {
		padding: 1rem;
		padding-bottom: 0.6rem;
		border: 1px solid var(--card-border);
		background-color: var(--card);
		position: relative;
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: linear-gradient(-161deg, #943eda 0%, #c11ed5 50%, var(--card-border) 100%);
			top: 3px;
			left: 3px;
			z-index: -1;
		}
	}
</style>
