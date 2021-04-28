<script>
  let name = "world";
  let src = "favicon.png";
  let count = 0;
  // counter
  const inCrementCounter = () => {
	  count +=1
  }
</script>

<main>
    <h1>
      Hello {name}
    </h1>
    <h3>Counter: {count}</h3>
    <button on:click={inCrementCounter}>increase counter!</button>
  <img {src} alt="Svelt logo" />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  h3 {
    font-size: 1rem;
  }
</style>
