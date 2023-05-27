import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

// creating sign in functionallity using NextAuth.js and google cloud
export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            // adding google in signIn makes it so that it takes us straight to google log in page
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-2">
        {/* this will grab anything in between the Layout tag in index.js and view it here */}
        {children}
      </div>
    </div>
  );
}
