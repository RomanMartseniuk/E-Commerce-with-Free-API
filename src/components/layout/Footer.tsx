import { Link } from "react-router";

import { Container } from "../common/Container";

import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <div className="w-full border-t bg-muted/50">
      <Container className="mx-auto py-8">
        <div className="w-full flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/">
              <Button variant="ghost" className="px-0 text-xl font-bold">
                Shop.
              </Button>
            </Link>

            <p className="mt-2 text-sm text-muted-foreground">
              React E-Commerce pet project powered by{" "}
              <a
                href="https://fakeapi.platzi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-foreground"
              >
                Platzi Fake API
              </a>
              .
            </p>
          </div>

          {/* Navigation */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm md:grid-cols-1">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/wishlist"
              className="hover:text-primary transition-colors"
            >
              Wishlist
            </Link>
            <Link to="/cart" className="hover:text-primary transition-colors">
              Cart
            </Link>
            <Link
              to="/account"
              className="hover:text-primary transition-colors"
            >
              Account
            </Link>
          </nav>
        </div>

        <div className="w-full mt-8 flex flex-col items-center justify-between gap-2 border-t pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Shop. All rights reserved.</p>

          <p>
            Created by{" "}
            <a
              href="https://github.com/RomanMartseniuk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-foreground"
            >
              Roman Martseniuk
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};
