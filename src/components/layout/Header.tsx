import { Container } from "../common/Container";

import { Button } from "../ui/button";
import { Nav } from "./Nav";

import { IconMenu2, IconX } from "@tabler/icons-react";

export const Header = ({
  isBurger,
  setBurger,
}: {
  isBurger: boolean;
  setBurger: (arg: boolean) => void;
}) => {
  return (
    <header className="fixed top-0 left-0 w-screen bg-secondary">
      <Container className="justify-between flex-row h-15 ">
        <Button>Shop</Button>

        <Nav />
        <Button
          variant={"secondary"}
          onClick={() => {
            setBurger(!isBurger);
          }}
        >
          {!isBurger ? <IconMenu2 stroke={2} /> : <IconX stroke={2} />}
        </Button>
      </Container>
    </header>
  );
};
