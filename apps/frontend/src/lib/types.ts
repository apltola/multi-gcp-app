export interface ContentfulPost {
  slug: string;
  body: string;
  previewHeading: string;
  previewBody: string;
  image: {
    url: string;
    fileName: string;
  };
}
