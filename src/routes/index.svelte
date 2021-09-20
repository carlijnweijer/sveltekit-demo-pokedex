<script>
	import { highestRatedMakeup } from '../stores/makeupstore';
	console.log('makeup', $highestRatedMakeup);
	console.log('clg');
</script>

<svelte:head>
	<title>SvelteKit Makeup Bieb</title>
</svelte:head>

<h1>Makeup Bieb</h1>
{#each $highestRatedMakeup as makeup}
	<p>{makeup.name}</p>
	<p>{makeup.brand ? makeup.brand : 'brand unknown'}</p>
{/each}
