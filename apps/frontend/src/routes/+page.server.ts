import { API_URL } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  console.log('API_URL', API_URL);

  return {};
}
