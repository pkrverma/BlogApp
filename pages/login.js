import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { loginStart } from "@/store/slices/authSlice";
import Loader from "@/components/Loader/Loader";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  function handleLogin(e) {
    e.preventDefault();
    dispatch(loginStart({ username, password }));
  }

  return (
    <>
      <Head>
        <title>Login - My Next.js Blog</title>
        <meta
          name="description"
          content="Login to access your dashboard and manage your blog posts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto p-8 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-5">Login</h1>
          <form
            onSubmit={handleLogin}
            className="bg-gray-100 rounded-lg shadow max-w-sm w-full p-6 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 p-2 rounded bg-white text-gray-800"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-2 rounded bg-white text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded py-2 font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
            {isLoading && <Loader />}
            {error && <span className="text-red-500 text-sm">{error}</span>}
          </form>
        </main>
      </div>
    </>
  );
}
