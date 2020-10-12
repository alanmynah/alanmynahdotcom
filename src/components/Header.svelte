<script>
	import Nav from './Nav.svelte';
	import Socials from './Socials.svelte';

	export let segment;
</script>

<style>
	header {
		display: flex;
		margin: 0 auto;
		max-width: 1400px;
		padding: 2em;
		width: 100%;
	}
</style>

<header>
	<Socials />
	<Nav {segment} />
</header>
