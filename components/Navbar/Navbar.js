import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import Button from "@/components/Button/Button";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-green-50 text-gray-700 shadow-sm py-3 mb-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="font-extrabold text-lg tracking-wide">
          NextBlog
        </Link>
        <div className="flex gap-5 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <span>Hi {user?.username}!</span>
              <Button onClick={handleLogout} variant="muted">
                Logout
              </Button>
            </>
          ) : (
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
