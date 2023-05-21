import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPost } from '$lib/contentful';

export const load = (async ({ params }) => {
  const post = await getPost(params.slug);

  if (!post) {
    throw error(404, 'Not found');
  }

  return {
    post
  };
}) satisfies PageServerLoad;
