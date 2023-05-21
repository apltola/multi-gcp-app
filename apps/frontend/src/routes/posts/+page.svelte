<script>
  import WrappedImage from '../../components/wrappedImage.svelte';

  export let data;
  console.log(data.posts);
</script>

<h1>Posts</h1>

<ul class="grid">
  {#each data.posts as post}
    <li class="card">
      <a href={`/posts/${post.slug}`}>
        <WrappedImage imageUrl={post.image.url} wrapperPadding={65} />
        <div class="text-content">
          <h2>{post.previewHeading}</h2>
          <p>{post.previewBody}</p>
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 600px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card {
    border: 1px solid #000;
    transition: all 0.125s ease-in 0s;
  }

  .card:hover {
    background-color: rgb(247, 247, 247);
  }

  .card a {
    text-decoration: none;
    color: inherit;
  }

  .card h2 {
    margin-top: 0;
  }

  .card p {
    margin-bottom: 0;
  }

  .text-content {
    padding: 1em;
    padding-top: 0.5em;
  }
</style>
