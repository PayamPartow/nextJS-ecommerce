import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

// creating sign in functionallity using NextAuth.js and google cloud
export default function Home() {
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
  return <div>Logged in as {session.user.email}</div>;
}
