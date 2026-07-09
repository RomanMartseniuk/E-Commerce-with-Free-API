import { useResponsive } from "@/hooks/useResponsive";
import { Container } from "../common/Container";

import { Button } from "../ui/button";
import { Nav } from "./Nav";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router";

export const Header = ({
  isBurger,
  setBurger,
}: {
  isBurger: boolean;
  setBurger: (arg: boolean) => void;
}) => {
  const { isMobile } = useResponsive();

  return (
    <header className="fixed z-100 top-0 left-0 w-screen bg-secondary flex items-center justify-center">
      <Container className="justify-between flex-row h-15 ">
        <Link to="/">
          <Button>Shop</Button>
        </Link>
        {!isMobile && <Nav />}
        {isMobile && (
          <Button
            variant={"secondary"}
            onClick={() => {
              setBurger(!isBurger);
            }}
          >
            {!isBurger ? <IconMenu2 stroke={2} /> : <IconX stroke={2} />}
          </Button>
        )}
      </Container>
    </header>
  );
};
