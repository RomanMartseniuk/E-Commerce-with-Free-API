import { createRoot } from "react-dom/client";

import { Route, BrowserRouter as Router, Routes } from "react-router";

import "./index.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<>Home Page</>}/>
      </Route>
    </Routes>
  </Router>,
);
