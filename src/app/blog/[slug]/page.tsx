import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getAllSlugs, getPost } from "@/lib/blog";
import { getArticleJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, Component } = post;

  return (
    <>
      <JsonLd
        data={getArticleJsonLd({
          title: meta.title,
          description: meta.description,
          slug: meta.slug,
          datePublished: meta.datePublished,
          dateModified: meta.dateModified,
          image: meta.image,
        })}
      />
      <Header currentPath={`/blog/${slug}`} />

      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-8 py-16">
          <Link
            href="/blog/"
            className="text-sm text-gray-500 hover:text-blue-400 transition mb-8 inline-block"
          >
            ← Back to blog
          </Link>

          <article>
            <header className="mb-10">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                {meta.title}
              </h1>
              <div className="flex gap-3 text-sm text-gray-500">
                <time dateTime={meta.datePublished}>
                  {new Date(meta.datePublished).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{meta.readingMinutes} min read</span>
              </div>
            </header>

            <div className="article-body">
              <Component />
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </>
  );
}
