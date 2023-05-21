import { CFN_CDA_TOKEN, CFN_ENV } from '$env/static/private';
import contentful from 'contentful';
import type { Entry } from 'contentful';
import type { ContentfulPost } from './types';

const client = contentful.createClient({
  space: 'ogpq1yc6lmmm',
  environment: CFN_ENV,
  accessToken: CFN_CDA_TOKEN
});

function entryToPost(entry: Entry): ContentfulPost {
  const { slug, body, previewHeading, previewBody, image } = entry.fields;
  const { url, filename } = (image as any).fields.file;

  return {
    slug: slug as string,
    body: body as string,
    previewHeading: previewHeading as string,
    previewBody: (previewBody ?? '') as string,
    image: {
      url,
      fileName: filename
    }
  };
}

export async function getPosts(): Promise<ContentfulPost[]> {
  const entries = await client
    .getEntries({
      content_type: 'blogPost'
    })
    .then((res) => res.items);

  return entries.map(entryToPost);
}

export async function getPost(slug: string): Promise<ContentfulPost | null> {
  const entry = await client
    .getEntries({
      content_type: 'blogPost',
      'fields.slug': slug
    })
    .then((res) => res.items[0] ?? null);

  if (!entry) return null;

  return entryToPost(entry);
}
