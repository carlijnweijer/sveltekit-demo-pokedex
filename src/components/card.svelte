<script>
	export let makeup;
</script>

<div class="card bordered">
	<figure>
		<img src={makeup.image_link} alt={makeup.name} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{makeup.name}
		</h2>
		<p>{makeup.description.slice(0, 155)}...</p>
	</div>
</div>
