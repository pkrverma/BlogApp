import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

function useAuthRedirect() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) router.replace("/login");
  }, [isAuthenticated, router]);
}

export default function Dashboard() {
  useAuthRedirect();
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Head>
        <title>Dashboard - My Next.js Blog</title>
        <meta
          name="description"
          content="User dashboard for managing blog posts and account settings"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
            Dashboard
          </h1>
          {user && (
            <div className="bg-white rounded-lg shadow max-w-lg p-6 border border-gray-200">
              <p className="mb-2 text-lg text-gray-700">
                Welcome, <span className="font-semibold">{user.username}</span>!
              </p>
              <ul className="text-gray-600">
                <li>
                  ID: <span className="font-mono">{user.id}</span>
                </li>
                <li>
                  Name:{" "}
                  <span className="font-mono">
                    {user.firstName} {user.lastName}
                  </span>
                </li>
                <li>
                  Email: <span className="font-mono">{user.email}</span>
                </li>
              </ul>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
