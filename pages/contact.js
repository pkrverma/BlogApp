import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - My Next.js Blog</title>
        <meta
          name="description"
          content="Get in touch with us for any questions about our blog application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            Contact
          </h1>
          <p className="text-lg text-gray-700">
            Email:{" "}
            <span className="font-mono text-green-700">test@example.com</span>
          </p>
        </main>
      </div>
    </>
  );
}
