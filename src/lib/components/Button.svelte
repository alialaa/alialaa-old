<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type props = (
		| (HTMLButtonAttributes & { href?: never })
		| (HTMLAnchorAttributes & { href: string })
	) & {
		variant?: 'solid' | 'outline';
		size?: 'small' | 'medium';
		className?: string;
	};

	let { variant = 'solid', children, class: className, size = 'medium', ...rest }: props = $props();

	let node: HTMLAnchorElement | HTMLButtonElement;

	export function focus() {
		node.focus();
	}
</script>

<svelte:element
	this={rest.href ? 'a' : 'button'}
	bind:this={node}
	class="button button-{variant} button-size-{size} {className}"
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</svelte:element>

<style lang="scss">
	.button {
		color: var(--text);
		font-size: functions.toRem(14);
		text-decoration: none;
		font-weight: 700;
		max-width: 100%;
		min-width: 120px;
		text-align: center;
		display: inline-block;
		padding: 1rem 2rem;
		z-index: 10;
		border: none;
		cursor: pointer;
		letter-spacing: 0.5px;
		position: relative;
		&:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: linear-gradient(-90deg, #c11dd4 0%, #8c44db 100%);
			top: 2px;
			left: 2px;
			z-index: -1;
		}
		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			background: var(--card);
			top: 0;
			left: 0;
			z-index: -1;
			border: 1px solid var(--card-border);
		}
		&:hover {
			color: var(--card);
			&:after {
				background: var(--op-card);
				border: 1px solid var(--op-card-border);
			}
		}
		&[disabled] {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}
</style>
