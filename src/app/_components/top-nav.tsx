import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b border-[#282828] p-5 text-xl font-semibold">
      <div>Aura</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <button className="text-xs bg-[#282828] hover:opacity-60 transition duration-300 rounded-md font-normal px-2 py-1">Dashboard</button>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
