"use client";
import { toast } from "sonner";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function SignOutLink() {
  function handleLogout() {
    toast("Logout", {
      description: "Logout Successful",
    });
  }

  return (
    <SignOutButton>
      <Link
        href={"/"}
        className="w-full text-left capitalize"
        onClick={handleLogout}
      >
        Logout
      </Link>
    </SignOutButton>
  );
}
