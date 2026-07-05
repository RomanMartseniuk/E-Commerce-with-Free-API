import { Outlet } from "react-router";
import {Footer} from "./components/layout/Footer";
import {Header} from "./components/layout/Header";
import { BurgerMenu } from "./components/layout/BurgerMenu";
import { useState } from "react";

function App() {
  const [isBurger, setIsBurger] = useState(false);
  
  return (
    <>
      <Header isBurger={isBurger} setBurger={setIsBurger} />
      <BurgerMenu isBurger={isBurger} />
      <main className="pt-20 min-h-screen w-full flex flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
