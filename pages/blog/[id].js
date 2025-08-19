/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";
import Loader from "@/components/Loader/Loader";
import { fetchPostStart } from "@/store/slices/postSlice";
import { postService } from "@/services/postService";

export default function BlogDetail({ post: initialPost }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentPost, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (router.query.id && !initialPost) {
      dispatch(fetchPostStart(router.query.id));
    }
  }, [dispatch, router.query.id, initialPost]);

  const post = currentPost || initialPost;

  if (!post) {
    return (
      <>
        <Head>
          <title>Loading Post - My Next.js Blog</title>
          <meta name="description" content="Loading blog post..." />
        </Head>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto p-8">
            <Loader />
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - My Next.js Blog</title>
        <meta
          name="description"
          content={
            post.body
              ? post.body.substring(0, 160) + "..."
              : "Read this blog post"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-8">
          {isLoading && <Loader />}
          {error && <div className="text-red-500">{error}</div>}
          <Card>
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              {post.title}
            </h1>
            <div className="text-gray-600 mb-4 text-sm">
              <span>By User {post.userId}</span>
              <span className="mx-2">•</span>
              <span>
                {typeof post.reactions === "object"
                  ? `${post.reactions.likes || 0} likes, ${
                      post.reactions.dislikes || 0
                    } dislikes`
                  : `${post.reactions || 0} reactions`}
              </span>
              <span className="mx-2">•</span>
              <span>{post.views || 0} views</span>
            </div>
            <div className="prose max-w-none text-gray-700">
              <p>{post.body}</p>
            </div>
            {post.tags && (
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </main>
      </div>
    </>
  );
}
