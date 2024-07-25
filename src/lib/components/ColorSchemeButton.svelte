<script lang="ts">
	let {
		colorScheme,
		setColorScheme,
		reducedMotion
	}: {
		reducedMotion: boolean | null;
		colorScheme: string | null;
		setColorScheme: (v: string) => void;
	} = $props();

	let isDark = $derived(colorScheme === 'dark');
</script>

{#if colorScheme !== null}
	<button
		class="toggle-button"
		onclick={() => {
			setColorScheme(isDark ? 'light' : 'dark');
		}}
		type="button"
		aria-pressed={isDark ? 'true' : 'false'}
		aria-label="Dark Mode"
		title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
	>
		<div
			class="color-scheme-button"
			class:dark-active={isDark}
			class:light-active={!isDark}
			class:no-motion={reducedMotion}
		>
			<div class="moon">
				<svg
					aria-hidden="true"
					focusable="false"
					viewBox="0 0 16 16"
					fill="var(--text)"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M14.53 10.53a7 7 0 01-9.058-9.058A7.003 7.003 0 008 15a7.002 7.002 0 006.53-4.47z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="sun">
				<div class="body"></div>
				{#each Array(8).fill(null) as r, i}
					<div class={`ray ray_${i} ${i % 2 === 0 ? 'small' : ''}`}></div>
				{/each}
			</div>
		</div>
		<p aria-hidden="true" class="toggle-button-text">{`Dark Mode: ${isDark ? 'On' : 'Off'}`}</p>
	</button>
{/if}

<style lang="scss">
	.color-scheme-button {
		height: 26px;
		width: 26px;
		box-sizing: content-box;
		position: relative;
		@include breakpoint.down('md') {
			height: 20px;
			width: 20px;
		}
		&.no-motion {
			.moon,
			.sun,
			.body,
			.ray {
				transition: none !important;
			}
		}
		@media (prefers-reduced-motion: reduce) {
			.moon,
			.sun,
			.body,
			.ray {
				transition: none !important;
			}
		}
		&.light-active {
			.moon {
				opacity: 0;
				transform: scale(0.5) rotateZ(-60deg);
				transition-delay: 0s;
			}
			.sun {
				opacity: 1;
				.body {
					transform: scale(1);
					opacity: 1;
				}
				.ray {
					opacity: 1;
					transform: scale(1);
				}
			}
		}
		&.dark-active {
			.moon {
				opacity: 1;
				transform: scale(1) rotateZ(0deg);
			}
			.sun {
				.body {
					transform: scale(0);
					opacity: 0;
				}
				.ray {
					transform: scale(0) !important;
					opacity: 0;
				}
			}
		}
		.moon,
		.sun {
			height: 100%;
			width: 100%;
		}
		.sun {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
			.body {
				width: 45%;
				height: 45%;
				background-color: var(--text);
				border-radius: 100%;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
			}
			.ray {
				width: 3px;
				height: 3px;
				background-color: var(--text);
				border-radius: 100%;
				position: absolute;
				transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
				&.small {
					width: 2px;
					height: 2px;
				}
				&.ray_0 {
					top: 15%;
					left: 15%;
					transition-delay: 0s;
				}
				&.ray_1 {
					top: 0;
					left: 50%;
					transform: scale(1) translateX(-50%);
					transition-delay: 0.15s;
				}
				&.ray_2 {
					top: 15%;
					right: 15%;
					transition-delay: 0.2s;
				}
				&.ray_3 {
					top: 50%;
					right: 0;
					transform: scale(1) translateY(-50%);
					transition-delay: 0.1s;
				}
				&.ray_4 {
					bottom: 15%;
					right: 15%;
					transition-delay: 0s;
				}
				&.ray_5 {
					bottom: 0;
					left: 50%;
					transform: scale(1) translateX(-50%);
					transition-delay: 0.25s;
				}
				&.ray_6 {
					bottom: 15%;
					left: 15%;
					transition-delay: 0.1s;
				}
				&.ray_7 {
					top: 50%;
					left: 0;
					transform: scale(1) translateY(-50%);
					transition-delay: 0.35s;
				}
			}
		}
		.moon {
			transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
			transition-delay: 0.35s;
			svg {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
