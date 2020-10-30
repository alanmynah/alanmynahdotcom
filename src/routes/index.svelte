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
		font-size: 1em;
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

	@media (max-width: 360px) {
		.home-copy {
			padding-left: 2.5em;
		}
	}
</style>

<svelte:head>
	<title>alanmynah's blog</title>
</svelte:head>

<div class="home-container">
	<div class="home-copy">
		<h1>Welcome to alanmynah.com</h1>
		<p>
			I
			<a href="https://github.com/alanmynah" target="_blank">learn</a>,
			<a rel="prefetch" href="/blog" target="_blank">write about</a>
			and
			<a href="https://scrimba.com/" target="_blank">help others learn</a>
			code.
		</p>
	</div>

	<figure>
		<img alt="A picture of me standing somewhere" src="me-small.jpg" />
		<figcaption>
			Me standing somewhere in London, credit to
			<a href="https://twitter.com/skatersezo" target="_blank">@skatersezo</a>
		</figcaption>
	</figure>
</div>
