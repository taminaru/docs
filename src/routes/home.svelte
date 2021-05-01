<script>
</script>

<main>
  <h1>Website Under Development</h1>
  <div class="this">
    <div class="card">
      <div class="container">
        <p>
          The Landing page is still under devlopment. However you can still add
          Taminaru to your server!
        </p>
      </div>
    </div>
  </div>
  <div class="link">
    <a
      target="blank"
      href="https://discord.com/oauth2/authorize?client_id=769409289043050516&permissions=2956029142&scope=bot%20applications.commands"
      >Link bot</a
    >
  </div>
  <div class="link">
    <a target="blank" href="https://discord.com/invite/N79DZsm3m2"
      >Support Server!</a
    >
  </div>
</main>

<style>
  /* misc fonts */
  @import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;1,400;1,500;1,600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;1,400;1,500;1,600&family=Freckle+Face&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap");
  /*Bot logo text  */
  @import url("https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap");
  :root {
    --discord-dark: #23272a;
    --discord-dark-gray: #2c2f33;
    --discord-gray: #99aab5;
    --discord-light-blue: #7289da;
    --discord-dark-blue: #4e5d94;
  }

  /* Centering the cards */
  .this {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  main {
    min-height: 85vh;
  }

  h1 {
    color: #fff;
  }
  h1:hover {
    text-decoration: overline;
  }

  .link {
    margin: 1rem;
  }

  a {
    color: var(--discord-light-blue);
    font-size: large;
    text-decoration: none;
  }

  a:hover {
    font-size: 1.3rem;
    transition: 0.7s;
  }

  .card {
    margin: 3.7rem;
    box-shadow: 0 5px 9px 0 var(--discord-gray);
    transition: 0.3s;
    width: 40%;
    border-radius: 5px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    display: flex;
    flex-direction: column;
    color: white;
    padding: 2px 16px;
  }
  .container p {
    text-align: center;
    align-items: center;
  }
</style>
