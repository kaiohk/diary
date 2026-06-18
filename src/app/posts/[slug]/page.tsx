import { posts, header } from "../../data/posts";
import Header from "../../../components/Header";
import { Highlight } from "../../../components/Highlight";
import { Quote } from "../../../components/Quote";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { Metadata } from "next";

const components = {
  Highlight,
  Quote,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = posts.find((p) => p.slug === slug);
  const content = getPostContent(slug);

  if (!post || !content) {
    return <p className="text-white">Post not found.</p>;
  }

  function getPostContent(slug: string) {
    try {
      const filePath = path.join(
        process.cwd(),
        "src/app/content",
        `${slug}.mdx`,
      );
      const content = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch {
      return null;
    }
  }

  return (
    <div className="page-transition p-4 sm:p-0 text-white mt-20 md:mt-40 max-w-xl flex flex-col gap-6">
      <Header
        title={post.title}
        description={post.description}
        date={post.date}
        image={header[0].image}
        imageAlt={post.imageAlt}
      />
      <img src={post.image} alt={post.imageAlt} />
      <div className="prose prose-invert mt-3 mb-10 w-full wrap-break-word">
        <MDXRemote source={content} components={components} />
      </div>
    </div>
  );
}
