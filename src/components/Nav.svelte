<script>
	export let segment;
</script>

<style>
	nav {
		align-items: flex-end;
		display: flex;
		flex: 1;
		font-family: Rubik, sans-serif;
		font-weight: 700;
		justify-content: flex-end;
		text-transform: uppercase;
	}

	a {
		color: inherit;
		text-decoration: none;
		padding: 10px 5px;
		display: block;
		position: relative;
		margin-left: 20px;
	}

	a:not(.selected) {
		opacity: 0.7;
	}

	a::before {
		content: '';
		position: absolute;
		transition: transform 0.3s ease;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2px;
		background: #aaa;
		transform: scaleX(0);
	}

	a:hover::before,
	.selected::before {
		transform: scaleX(1);
	}

	.selected::before {
		background: #fd6378;
	}

	@media (max-width: 600px) {
		nav {
			justify-content: space-evenly;
		}
	}
</style>

<nav>
	<a class={segment === undefined ? 'selected' : ''} href=".">home</a>
	<a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
	<a rel="prefetch" class={segment === 'blog' ? 'selected' : ''} href="blog">blog</a>
	<a
		rel="noopener noreferrer"
		class={segment === 'garden' ? 'selected' : ''}
		href="https://garden.alanmynah.com/explore">garden</a>
</nav>
