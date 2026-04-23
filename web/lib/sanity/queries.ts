export const postsQuery = `
    *[_type == "post"]{
    _id,
    title,
    banner,
    body,
    slug,
    publishedAt
    }
`;

export const postBySlugQuery = `
    *[_type == "post" && slug.current == $slug][0]
`;