import { cn } from "@/lib/utils";
import { Link } from "../ui/link";

export const Nav = ({className=''}: {className?:string}) => {
  return (
    <nav className={cn("flex items-center gap-4", className)}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/wishlist">WishList</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/acc">Account</Link>
    </nav>
  );
};
