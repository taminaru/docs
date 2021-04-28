<script>
  export let name
  // 
  let user = { loggedIn: false };
  function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

<main>
  <div class="nav">
    <h1>
      {name} Bot
    </h1>
  </div>
  <div class="main">
    {#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{:else}
	<button on:click={toggle}>
		Log in
	</button>
{/if}
  </div>
</main>

<style>
  .main {
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
