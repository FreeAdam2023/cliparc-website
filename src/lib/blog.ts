import type { ComponentType } from "react";
import { meta as post1, default as Post1 } from "@/content/blog/clipboard-history-on-mac";
import { meta as post2, default as Post2 } from "@/content/blog/mac-clipboard-tricks-for-developers";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  tags: string[];
  readingMinutes: number;
  image?: string;
};

type PostModule = { meta: BlogPostMeta; Component: ComponentType };

const posts: PostModule[] = [
  { meta: post1, Component: Post1 },
  { meta: post2, Component: Post2 },
];

export function getAllPosts(): BlogPostMeta[] {
  return [...posts]
    .map((p) => p.meta)
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

export function getPost(slug: string): PostModule | undefined {
  return posts.find((p) => p.meta.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.meta.slug);
}
