"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { posts } from "../posts"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function InsightPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-16">

        {/* Back Navigation */}
        <Link
          href="/insights"
          className="text-blue-400 hover:text-blue-500 underline block mb-10"
        >
          ← Back to Insights
        </Link>

        {/* Hero Image */}
        {post.image && (
          <div className="w-full aspect-[2.2/1] rounded-2xl overflow-hidden shadow-xl border border-gray-800 mb-10">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-10 font-mono">
          <span className="px-3 py-1 rounded bg-gray-900 border border-gray-700 uppercase tracking-wide">
            {post.type === "blog" ? "Blog Post" : "Case Study"}
          </span>
          <span className="px-3 py-1 rounded bg-gray-900 border border-gray-700">
            {post.date}
          </span>
        </div>

        {/* Summary */}
        <div className="bg-gray-900/80 border border-blue-900/40 rounded-xl p-6 mb-14 shadow-lg">
          <p className="text-lg md:text-xl text-blue-200 font-light leading-relaxed">
            {post.summary}
          </p>
        </div>

        {/* Content */}
        <article
          className="
            prose prose-invert max-w-none
            prose-headings:text-white prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[17px] prose-p:leading-8 prose-p:my-5
            prose-ul:my-6 prose-ol:my-6
            prose-li:marker:text-blue-400
            prose-strong:text-white prose-a:text-blue-400
            prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:pl-5 prose-blockquote:my-8
            prose-img:rounded-xl prose-img:shadow-xl
          "
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content || ""}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  )
}
