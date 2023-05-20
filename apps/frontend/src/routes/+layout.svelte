<div class="app-wrapper">
  <header class="app-header">
    <nav>
      <ul class="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/posts/hello-world">Posts</a>
        </li>
      </ul>
    </nav>
  </header>

  <!-- prettier-ignore -->
  <main class="app-main">
    <slot></slot>
  </main>
</div>

<style>
  .app-wrapper {
    min-height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
  }

  .app-header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #000;
  }

  .app-main {
    padding: 1rem 1.5rem;
  }

  .nav-links {
    display: flex;
    gap: 1em;
  }
</style>
