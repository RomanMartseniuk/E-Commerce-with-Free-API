import { cn } from "@/lib/utils";
import { Container } from "../common/Container";
import { Nav } from "./Nav";


export const BurgerMenu = ({
  isBurger,
}: {
  isBurger: boolean;
}) => {
  return (
    <div
      className={cn(
        "fixed top-15 h-[calc(100vh-60px)] transition-all bg-secondary w-screen duration-700",
        isBurger ? "right-0" : "-right-full",
      )}
    >
      <Container>
         <Nav className="flex-col" />
      </Container>
    </div>
  );
};
