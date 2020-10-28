<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`)
			.then((r) => r.json())
			.then((posts) => {
				return { posts };
			});
	}
</script>

<script>
	export let posts;
</script>

<style>
	h2,
	.post-item-footer {
		font-family: Rubik, sans-serif;
		font-weight: 700;
	}

	.post-item-date {
		color: #aaa;
		text-align: left;
		text-transform: uppercase;
		margin-right: 16px;
	}

	hr {
		margin: 60px auto;
	}
</style>

<svelte:head>
	<title>Blog</title>
	<meta property="og:url" content={`https://alanmynah.com/blog/`} />
	<meta property="og:type" content="blog" />
	<meta property="og:title" content="alanmynah's blog" />
	<meta property="og:image" content="https://alanmynah.com/profile-pic.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:domain" value="alanmynah.com" />
	<meta name="twitter:creator" value="https://twitter.com/alanmynah/" />
	<meta name="twitter:title" value="Personal Blog" />
	<meta name="twitter:image" content="https://alanmynah.com/profile-pic.png" />
</svelte:head>

<div class="container">
	<h1>Blog</h1>
	{#each posts as post, index}
		{#if index}
			<hr />
		{/if}
		<div class="post-item">
			<h2><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></h2>
			<p>{post.excerpt}</p>
			<div class="post-item-footer"><span class="post-item-date">— {post.printDate}</span></div>
		</div>
	{/each}
</div>
