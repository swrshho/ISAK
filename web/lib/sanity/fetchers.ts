import { client } from "./clients";
import { postsQuery, postBySlugQuery } from "./queries";

export async function getPosts() {
    return client.fetch(postsQuery);
}

export async function getPostsBySlug(slug: string) {
    return client.fetch(getPostsBySlug, { slug });
}