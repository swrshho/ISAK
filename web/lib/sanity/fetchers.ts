import { client } from "./clients";
import { postsQuery, postBySlugQuery } from "./queries";

export async function getPosts() {
    const data = await client.fetch(postsQuery);
    console.log("Sanity response:", data[0].banner.asset);
    return data
}

export async function getPostsBySlug(slug: string) {
    return await client.fetch(postBySlugQuery, { slug });
}