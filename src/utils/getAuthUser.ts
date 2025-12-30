import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getAuthUser() {
  const user = await currentUser();
  if (!user) redirect("/");
  return user;
}
