<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
  import Footer from './components/footer.svelte'
</script>

<main>
	<Router {routes} />
  <Footer/>
</main>

<style >
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>