import PostService from "@/application/services/postService";
import NotionPage from "@/components/Notion/NotionPage";
import { Metadata } from "next";
import React from "react";
export const dynamicParams = true;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const service = new PostService();
  await service.init();

  const posts = await service.getFilterPosts({ options: { status: ["Public"], type: "Paper" } });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getFetch(slug: string) {
  const service = new PostService();
  await service.init();

  const posts = await service.getFilterPosts({ options: { status: ["Public"], type: "Paper" } });

  const post = posts.find((p) => p.slug === slug);
  const blockMap = await service.getPostBlock(post?.id!);

  return {
    post,
    blockMap,
  };
}

export async function generateMetadata({params: {slug}}: Props): Promise<Metadata> {
  const { post } = await getFetch(slug);
    return {
      title: post?.title,
      description: post?.summary || post?.title,
      openGraph: {
        images: [
          {
            url: post?.thumbnail || '',
            alt: post?.title,
          },
        ],
      },
      keywords: post?.tags?.map((tag) => tag),
    }
}

export default async function PaperDetail({ params: { slug } }: Props) {
  const { blockMap, post } = await getFetch(slug);
  return (
    <>
      {blockMap && (
        <div className="mt-4">
          <NotionPage blockMap={blockMap} post={post!} />
        </div>
      )}
    </>
  );
}