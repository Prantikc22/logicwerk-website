"use client"

import Footer4Col from "@/components/ui/footer-column"
import Link from "next/link"
import Image from "next/image"

import { posts } from "./posts"

export default function InsightsPage() {
  const blogPosts = posts.filter(p => p.type === "blog")
  const caseStudies = posts.filter(p => p.type === "case-study")

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold mb-8 tracking-tight text-center font-sans">Insights & Ideas</h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Explore our latest thinking on AI, software delivery, and digital transformation.
        </p>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="bg-gray-900 rounded-xl shadow-lg hover:shadow-blue-700/30 transition-shadow border border-gray-800 flex flex-col overflow-hidden group">
                {post.image && (
  <Image
    src={post.image}
    alt={post.title}
    width={400}
    height={192}
    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
    sizes="(max-width: 768px) 100vw, 33vw"
    priority={false}
  />
)}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{post.summary.length > 180 ? post.summary.slice(0, 180) + '…' : post.summary}</p>
                  <span className="text-xs text-gray-500 mt-auto">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map(post => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="bg-gray-900 rounded-xl shadow-lg hover:shadow-blue-700/30 transition-shadow border border-gray-800 flex flex-col overflow-hidden group">
                {post.image && (
  <Image
    src={post.image}
    alt={post.title}
    width={400}
    height={192}
    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
    sizes="(max-width: 768px) 100vw, 33vw"
    priority={false}
  />
)}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-400 mb-4 flex-1">{post.summary.length > 180 ? post.summary.slice(0, 180) + '…' : post.summary}</p>
                  <span className="text-xs text-gray-500 mt-auto">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Link href="/" className="mt-12 text-blue-400 hover:text-blue-600 underline text-lg block text-center">← Back to Home</Link>
      </main>
      <Footer4Col />
    </div>
  )
}
