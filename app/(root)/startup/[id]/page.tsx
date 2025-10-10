import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

import markdownit from "markdown-it";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

const md = markdownit();

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ MUST unwrap params in Next.js 16 Canary

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");

  return (
    <>
      <section className="!min-h-[230px] pink_container">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="!max-w-5xl sub-heading">{post?.description}</p>
      </section>
      <section className="section_container">
        <img
          src={post?.image}
          alt={post?.title}
          className="rounded-xl w-full h-auto"
        />

        <div className="space-y-5 mx-auto mt-10 max-w-4xl">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post?.auther?._id}`}
              className="flex items-center gap-2 mb-3">
              <Image
                src={post?.author?.image}
                alt="avatar"
                className="drop-shadow-lg rounded-full"
                width={64}
                height={64}
              />

              <div>
                <p className="text-20-medium">{post?.author?.name}</p>
                <p className="!text-black-300 text-16-medium">
                  @{post?.author?.username}
                </p>
              </div>
            </Link>
            <p className="category-tag">{post?.category}</p>
          </div>
          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent ? (
            <article
              className="max-w-4xl font-work-sans break-all prose"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>
        <hr className="divider" />

        {/* TODO: EDITOR SELECTED STARTUPS */}

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
}
