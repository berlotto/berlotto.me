import type { CollectionEntry } from "astro:content";

const getPostsByCategory = (
  posts: CollectionEntry<"posts">[],
  category: string
) => posts.filter(post => post.data.category === category);

export default getPostsByCategory;
