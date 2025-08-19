/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "@/components/Navbar/Navbar";
import ItemList from "@/components/ItemList/ItemList";
import Loader from "@/components/Loader/Loader";
import { fetchPostsStart } from "@/store/slices/postSlice";
import { postService } from "@/services/postService";

export default function BlogList({ initialPosts }) {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!initialPosts?.posts?.length) {
      dispatch(fetchPostsStart({ limit: 10, skip: 0 }));
    }
  }, [dispatch, initialPosts]);

  const displayPosts = posts.length > 0 ? posts : initialPosts?.posts || [];

  return (
    <>
      <Head>
        <title>Blog Posts - My Next.js Blog</title>
        <meta
          name="description"
          content="Browse our collection of blog posts covering various topics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
            Blog Posts
          </h1>
          {isLoading && <Loader />}
          {error && <div className="text-red-500">{error}</div>}
          <ItemList items={displayPosts} />
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const initialPosts = await postService.getPosts({ limit: 10, skip: 0 });
    return {
      props: {
        initialPosts,
      },
    };
  } catch (error) {
    return {
      props: {
        initialPosts: { posts: [], total: 0 },
      },
    };
  }
}
