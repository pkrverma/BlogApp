import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>About - My Next.js Blog</title>
        <meta
          name="description"
          content="Learn about this Next.js blog application showcasing modern React development patterns"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">About</h1>
          <p className="text-lg text-gray-700">
            This blog showcases usage of Next.js, Redux Toolkit, and Redux-Saga
            for modern web development.
          </p>
        </main>
      </div>
    </>
  );
}
