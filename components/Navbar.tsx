import React from "react";
import Link from "next/link";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[10vh] px-8 border-b-[1px]">
      <Link href="/" className="text-xl font-extrabold text-blue-700">
        Neony
      </Link>
      <div className="flex items-center gap-5">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard" className="">
            Dashboard
          </Link>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
