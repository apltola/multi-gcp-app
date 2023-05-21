<script>
  import { marked } from 'marked';
  import WrappedImage from '../../../components/wrappedImage.svelte';

  export let data;

  const body = marked(data.post.body);
  const image = data.post.image;
</script>

<div class="wrapper">
  <WrappedImage imageUrl={image.url} />

  <article class="post">
    {@html body}
  </article>
</div>

<style>
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
