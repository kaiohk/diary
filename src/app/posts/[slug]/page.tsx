import { posts } from "../../data/posts";

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="text-white mt-40 max-w-xl flex flex-col gap-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <span className="text-secondary">{post.date}</span>
      <p>{post.description}</p>
      <img src={post.image} alt={post.imageAlt} />
    </div>
  );
}
