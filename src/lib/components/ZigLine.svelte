<script lang="ts">
	let {
		maxWidth = '100%',
		height = '50px',
		color = '#da80e5'
	}: { maxWidth?: string; height?: string; color?: string } = $props();
</script>

<div class="wrapper">
	<div
		class="zigzag-line"
		style:background-image={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 365 301.16'%3E%3Cpolygon fill='%23${color.replace('#', '')}' points='365 182.43 182.57 0 123.17 59.4 123.23 59.45 0 182.68 0 301.16 182.62 118.77 365 300.92 365 182.43'/%3E%3C/svg%3E")`}
		style:max-width={maxWidth}
		style:height
	></div>
</div>

<style lang="scss">
	.zigzag-line {
		display: inline-block;
		width: 100%;
		:global(html.no-js) & {
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 365 301.16'%3E%3Cpolygon fill='%23da80e5' points='365 182.43 182.57 0 123.17 59.4 123.23 59.45 0 182.68 0 301.16 182.62 118.77 365 300.92 365 182.43'/%3E%3C/svg%3E") !important;
		}
	}
</style>
