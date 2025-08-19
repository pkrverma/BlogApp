import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js Blog - Home</title>
        <meta
          name="description"
          content="A full-featured blog application built with Next.js, Redux Toolkit, and Redux-Saga"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            Welcome to My Next.js Blog
          </h1>
          <p className="text-lg text-gray-700">
            This is a simple blog application built with modern React and Redux
            patterns.
          </p>
        </main>
      </div>
    </>
  );
}
