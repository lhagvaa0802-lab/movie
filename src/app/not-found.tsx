// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-3">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="text-zinc-500">
          The page you’re looking for doesn’t exist.
        </p>
        <Link className="underline" href="/">
          Go home
        </Link>
      </div>
    </div>
  );
}