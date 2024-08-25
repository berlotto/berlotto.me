import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueCategories = (posts: CollectionEntry<"posts">[]) => {
  const filteredPosts = posts.filter(({ data }) => !data.draft);
  const categories: string[] = filteredPosts
    .flatMap(post => post.data.category)
    // .map(category => slugifyStr(category))
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index
    )
    .sort((catA: string, catB: string) => catA.localeCompare(catB));
  return categories;
};

export default getUniqueCategories;
