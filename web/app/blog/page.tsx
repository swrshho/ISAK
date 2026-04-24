import { getPosts } from "@/lib/sanity/fetchers";
import ImageComponent from "@/components/ImageComponent";

export const revalidate = 10

export default async function BlogPage() {
    const posts = await getPosts()

    return (
        <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Blogs</h1>

            <div className="space-y-4">
                {posts.map((post: any) => (
                    <div
                        key={post._id}
                        className="border rounded-lg p-4 hover:shadow-md transition"
                    >
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <ImageComponent image={post.banner} />
                        <p>{post.body}</p>
                        <p className="text-sm text-gray-500">
                            {new Date(post.publishedAt).toDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    )
}