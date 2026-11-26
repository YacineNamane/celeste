import { defineQuery } from "next-sanity";

export const DISHES_QUERY = defineQuery(`
  *[_type == "dish" && !(_id in path("drafts.**"))]
  | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    category,
    price,
    image {
      asset->{
        _id,
        url
      },
      alt
    }
  }
`);
