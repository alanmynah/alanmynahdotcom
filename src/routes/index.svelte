<style>
	.home-container {
		align-items: center;
		display: flex;
		flex: 1;
		justify-content: center;
		margin: 2em 0;
		min-height: 400px;
	}

	.home-copy {
		flex: 1;
	}

	h1 {
		font-weight: 700;
		margin-bottom: 0.5em;
	}

	p {
		font-size: 1.4em;
		line-height: 1.5;
	}

	figure {
		margin: 0 1em;
		text-align: center;
	}

	figcaption {
		font-size: 0.8em;
		font-style: italic;
	}

	img {
		width: 100%;
		max-width: 400px;
	}

	@media (max-width: 1020px) {
		p {
			font-size: 1.2em;
		}

		img {
			max-width: 300px;
		}
	}

	@media (max-width: 800px) {
		.home-container {
			flex-direction: column;
		}

		.home-copy {
			flex: 0;
			padding-bottom: 2em;
			text-align: center;
		}
	}
</style>

<svelte:head>
	<title>Sapper Blog Template</title>
</svelte:head>

<div class="home-container">
	<div class="home-copy">
		<h1>Welcome to alanmynah.com</h1>
		<p>
			I
			<a href="https://github.com/alanmynah" target="_blank">learn</a>,
			<a href="/blog" target="_blank">write about</a>
			and
			<a href="https://scrimba.com/" target="_blank">help others learn</a>
			code.
		</p>
	</div>

	<figure>
		<img alt="Person relaxing under a tree" src="undraw-person-under-tree.svg" />
		<figcaption>Illustration thanks to <a href="https://undraw.co" target="_blank">Undraw</a></figcaption>
	</figure>
</div>
