import { API_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
  console.log('🧐 data loader');

  const [candidates, jobs] = await Promise.all([
    fetch(`${API_URL}/api/candidates`).then((r) => r.json()),
    fetch(`${API_URL}/api/jobs`).then((r) => r.json())
  ]);

  return {
    candidates,
    jobs
  };
}) satisfies PageServerLoad;
