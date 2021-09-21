<script>
	import { highestRatedMakeup } from '../stores/makeupstore';
	console.log('makeup', $highestRatedMakeup);
	import Card from '../components/card.svelte';
</script>

<svelte:head>
	<title>SvelteKit Makeup Bieb</title>
</svelte:head>

<h1 class="text-5xl uppercase mt-4 font-bold text-secondary">Makeup Bieb</h1>
<h2 class="text-3xl font-medium mb-4 text-primary italic">the makeup wiki</h2>

<div class="hero bg-base-200 w-full rounded-xl py-6">
	<div class="text-center hero-content">
		<div class="max-w-md">
			<h3 class="mb-5 text-3xl font-bold text-neutral">What are you looking for?</h3>
			<div class="form-control">
				<div class="relative">
					<input
						type="text"
						placeholder="I'm looking for.."
						class="w-full pr-16 input input-primary input-bordered"
					/>
					<button class="absolute top-0 right-0 rounded-l-none btn btn-primary">Search</button>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div class="grid md:grid-cols-3 grid-cols-2 gap-4 px-10">
	{#each $highestRatedMakeup as makeup}
		<Card {makeup} />
	{/each}
</div> -->
