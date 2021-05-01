<script>
  let date = new Date();
  import logo from "../images/GitHub-Mark-Light-32px.png";
</script>

<div>
  <footer>
    <a
      href="https://github.com/ThatGuyJamal"
      target="_blank"
      rel="noopener noreferrer"
      alt="Link to my github"
    >
      &copy; ThatGuyJamal
      <img src={logo} alt="github logo" />
    </a>
  </footer>
</div>

<style>
  :root {
    --discord-dark: #23272a;
    --discord-dark-gray: #2c2f33;
    --discord-gray: #99aab5;
    --discord-light-blue: #7289da;
    --discord-dark-blue: #4e5d94;
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: var(--discord-dark-gray);
    color: white;
    text-align: center;
    animation-delay: 1s;
    animation-name: footer_animation;
  }

  /* ? footer animations */

  @keyframes footer_animation {
    5% {
      background-color: var(--discord-dark);
    }
    35% {
      background-color: var(--discord-dark-gray);
    }
    60% {
      background-color: var(--discord-gray);
    }
    100% {
      background-color: black;
    }
  }

  footer img {
    margin-left: 0.5rem;
  }

  footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--discord-light-blue);
  }
</style>
