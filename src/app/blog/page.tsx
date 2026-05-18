import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = buildMetadata({
  title: "Blog - ClipArc",
  description:
    "Tips, tricks, and guides for getting more out of your Mac clipboard. macOS productivity tutorials from the makers of ClipArc.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header currentPath="/blog" />

      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-gray-400 mb-12">
            Mac clipboard tips, productivity guides, and product updates.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-800 pb-8 last:border-0"
              >
                <Link
                  href={`/blog/${post.slug}/`}
                  className="block group"
                >
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">
                    {post.title}
                  </h2>
                  <div className="flex gap-3 text-sm text-gray-500 mb-3">
                    <time dateTime={post.datePublished}>
                      {new Date(post.datePublished).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </time>
                    <span>·</span>
                    <span>{post.readingMinutes} min read</span>
                  </div>
                  <p className="text-gray-400">{post.description}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
