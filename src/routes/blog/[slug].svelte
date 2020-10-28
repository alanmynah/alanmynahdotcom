<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].html
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Bio from '../../components/Bio.svelte';
	export let post;
</script>

<style>
	header {
		text-align: center;
	}

	header h1 {
		margin-bottom: 0.7em;
	}

	header p {
		color: #aaa;
		text-transform: uppercase;
		font-family: Rubik, sans-serif;
		font-weight: 600;
	}

	header hr {
		min-width: 100px;
		width: 30%;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
	<link rel="canonical" href={`https://alanmynah.com/blog/${post.slug}`} />
	<meta property="og:url" content={`https://alanmynah.com/blog/${post.slug}`} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta name="Description" content={post.excerpt} />
	<meta property="og:description" content={post.excerpt} />
	<meta property="og:image" content="https://alanmynah.com/profile-pic.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:domain" value="alanmynah.com" />
	<meta name="twitter:creator" value="https://twitter.com/alanmynah/" />
	<meta name="twitter:title" value={post.title} />
	<meta name="twitter:description" content="${post.excerpt}" />
	<meta name="twitter:image" content="https://alanmynah.com/profile-pic.png" />
	<meta name="twitter:label1" value="Published on" />
	<meta
		name="twitter:data1"
		value={new Date(post.printDate).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		})} />
	<meta name="twitter:label2" value="Reading Time" />
	<meta name="twitter:data2" value={post.printReadingTime} />
</svelte:head>

<header>
	<p>{post.printDate} ~ {post.printReadingTime}</p>
	<h1>{post.title}</h1>
	<hr />
</header>
<div class="container">
	<article class="content">
		{@html post.html}
	</article>
	<hr />
	<Bio />
</div>
