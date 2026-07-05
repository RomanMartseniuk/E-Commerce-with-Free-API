import { createRoot } from "react-dom/client";

import { Route, BrowserRouter as Router, Routes } from "react-router";

import "./index.css";

import App from "./App.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />}/>
        <Route path="products" element={<>Home Page</>}></Route>
        <Route path="categories" element={<>Categories Page</>} />
        <Route path="wishlist" element={<>Wishlist Page</>} />
        <Route path="cart" element={<>Cart Page</>} /> 
        <Route path="acc" element={<>Account Page</>} /> 
        <Route path="*" element={<>404 Page</>} /> 

      </Route>
    </Routes>
  </Router>,
);
