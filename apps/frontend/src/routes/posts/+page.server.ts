import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/contentful';

export const load = (async ({ params }) => {
  const posts = await getPosts();
  return { posts };
}) satisfies PageServerLoad;
