"use client";

import { posts } from "../../data/posts";
import { useParams } from "next/navigation";

export default function PostPage() {
  const params = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="md:text-white md:mt-40 md:max-w-xl md:flex md:flex-col md:gap-6">
      <h1 className="md:text-3xl md:font-bold">{post.title} </h1>
      <span className="md:text-secondary">{post.date}</span>
      <p className="md:text-secondary">{post.description}</p>
      <img className="md:text-white" src={post.image} alt={post.imageAlt} />
    </div>
  );
}
