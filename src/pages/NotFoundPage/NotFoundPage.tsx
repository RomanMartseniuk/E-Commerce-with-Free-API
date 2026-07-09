import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconHome, IconSearch } from "@tabler/icons-react";

export const NotFoundPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Error 404
        </span>

        <h1 className="mt-4 text-7xl font-extrabold tracking-tight sm:text-8xl">
          Oops!
        </h1>

        <h2 className="mt-2 text-3xl font-bold">Page not found</h2>

        <p className="mt-6 text-muted-foreground">
          The page you're looking for doesn't exist, may have been moved,
          renamed, or the URL might be incorrect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg">
            <Link to="/" className="flex items-center gap-1">
              <IconHome size={18} />
              Go Home
            </Link>
          </Button>

          <Button variant="outline" size="lg">
            <Link to="/products" className="flex items-center gap-1">
              <IconSearch size={18} />
              Browse Products
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => window.history.back()}
          >
            <IconArrowLeft size={18} />
            Go Back
          </Button>
        </div>

        <div className="mt-14 rounded-2xl border bg-muted/40 p-6">
          <h3 className="font-semibold">What can you do?</h3>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Check the URL for any typing mistakes.</li>
            <li>• Return to the homepage.</li>
            <li>• Browse our product catalog.</li>
            <li>• Use the navigation menu to find what you need.</li>
          </ul>
        </div>
      </div>
    </main>
  );
};
