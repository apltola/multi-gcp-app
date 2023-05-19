<script>
  import { PUBLIC_API_URL } from '$env/static/public';
  try {
    console.log('PUBLIC_API_URL', PUBLIC_API_URL)
    console.log('import.meta.env.VITE_PUBLIC_API_URL', import.meta.env.VITE_PUBLIC_API_URL)
  } catch (error) {
    console.log('jjooo ei....')
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
