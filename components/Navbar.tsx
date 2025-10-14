import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="bg-white shadow-sm px-5 py-3 font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="sm:hidden size-6" />
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                  redirect("/");
                }}>
                <button type="submit">
                  <span className="max-sm:hidden">Log out</span>
                  <LogOut className="sm:hidden size-6 text-red-500" />
                </button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage src={session?.user?.image} alt="AV" />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}>
                <button type="submit">Log in</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
