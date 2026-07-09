import { createRoot } from "react-dom/client";

import { Route, BrowserRouter as Router, Routes } from "react-router";

import "./index.css";

import App from "./App.tsx";

import { HomePage } from "./pages/HomePage";

import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";

import { CategoriesPage } from "./pages/CategoriesPage";

import { AuthPage } from "./pages/AuthPage";

import { WishlistPage } from "./pages/WishlistPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";

import { AccountPage } from "./pages/AccountPage";

import { NotFoundPage } from "./pages/NotFoundPage";

createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="products" element={<ProductsPage />}>
          <Route path=":id" element={<ProductPage />} />
        </Route>

        <Route path="categories" element={<CategoriesPage />} />

        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="cart" element={<ShoppingCartPage />} />

        <Route path="auth" element={<AuthPage />} />

        <Route path="acc" element={<AccountPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>,
);
