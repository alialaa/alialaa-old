<script lang="ts">
	let {
		reducedMotion,
		setReducedMotion
	}: {
		reducedMotion: boolean | null;
		setReducedMotion: (v: boolean) => void;
	} = $props();
</script>

{#if reducedMotion !== null}
	<button
		onclick={() => {
			setReducedMotion(!reducedMotion);
		}}
		class="toggle-button"
		type="button"
		aria-pressed={!reducedMotion ? 'true' : 'false'}
		aria-label="Animations"
		title={!reducedMotion ? 'Turn off animations' : 'Turn on animations'}
	>
		<div
			class="animations-button"
			class:animations-active={!reducedMotion}
			class:animations-inactive={reducedMotion}
			class:no-motion={reducedMotion}
		>
			<div class="circles">
				<div class="circle circle_1"></div>
				<div class="circle circle_2"></div>
				<div class="circle circle_3"></div>
			</div>
		</div>
		<p aria-hidden="true" class="toggle-button-text">
			{`Animations: ${!reducedMotion ? 'On' : 'Off'}`}
		</p>
	</button>
{/if}

<style lang="scss">
	.animations-button {
		height: 26px;
		width: 26px;
		box-sizing: content-box;
		position: relative;
		@include breakpoint.down('md') {
			height: 20px;
			width: 20px;
		}
		&.animations-inactive {
			.circles {
				.circle {
					width: 100%;
					height: 100%;
				}
			}
		}
		.circles {
			width: 100%;
			height: 100%;
			.circle {
				position: absolute;
				width: 50%;
				height: 50%;
				background: var(--text);
				border-radius: 100%;
				transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
				&.circle_1 {
					opacity: 0.9;
					bottom: 0;
					right: 0;
				}
				&.circle_2 {
					opacity: 0.5;
					top: 50%;
					left: 50%;
					transform: translateX(-50%) translateY(-50%);
				}
				&.circle_3 {
					opacity: 0.2;
					top: 0;
					left: 0;
				}
			}
		}
	}
</style>
