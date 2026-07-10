import { useState } from "react";

import { Outlet } from "react-router";

import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import { BurgerMenu } from "@/components/layout/BurgerMenu";

import { Toaster } from "./components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [isBurger, setIsBurger] = useState(false);
  
  return (
    <>
      <Header isBurger={isBurger} setBurger={setIsBurger} />
      <BurgerMenu isBurger={isBurger} />
      <main className="pt-20 min-h-screen w-full flex flex-col items-center">
        <Outlet />
      </main>
      <Toaster />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
