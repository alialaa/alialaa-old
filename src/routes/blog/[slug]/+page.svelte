<script lang="ts">
  import "dracula-prism/dist/css/dracula-prism.css";

import "../../../styles/prism-overrides.css"
	export let data;
</script>

<article>
	<h1>{data.meta.title}</h1>
	<p>Published: {data.meta.date}</p>
	<svelte:component this={data.content} />
</article>