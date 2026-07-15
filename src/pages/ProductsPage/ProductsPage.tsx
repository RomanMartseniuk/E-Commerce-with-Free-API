import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  IconArrowBadgeRight,
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconArrowsDownUp,
  IconFilter,
  IconSearch,
} from "@tabler/icons-react";
import { useState } from "react";

type SortType = {
  sortBy: "title" | "price" | "date";
  type: "asc" | "desc";
} | null;

type FiltersType = {
  minPrice?: number;
  maxPrice?: number;
  category?: number;
};

const SortIcon = ({ type }: { type: "asc" | "desc" | undefined }) => {
  return (
    <>
      {type ? (
        type === "asc" ? (
          <IconArrowNarrowDown />
        ) : (
          <IconArrowNarrowUp />
        )
      ) : (
        <IconArrowBadgeRight />
      )}
    </>
  );
};

const SortMenu = ({ onChange }: { onChange: () => SortType }) => {
  const [sort, setSort] = useState<SortType>(null);

  const handleChangeSort = (by: "price" | "title" | "date" | undefined) => {
    if (!by) return setSort(null);

    if (by === sort?.sortBy) {
      if (sort.type === "asc") return setSort({ ...sort, type: "desc" });
      return setSort({ ...sort, type: "asc" });
    }

    return setSort({ sortBy: by, type: "desc" });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">
          <IconArrowsDownUp />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <p>Sort By</p>
          </DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleChangeSort("price")}>
            <SortIcon type={sort?.sortBy === "price" ? sort.type : undefined} />
            <p>Price</p>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleChangeSort("title")}>
            <SortIcon type={sort?.sortBy === "title" ? sort.type : undefined} />
            <p>Title</p>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleChangeSort("date")}>
            <SortIcon type={sort?.sortBy === "date" ? sort.type : undefined} />
            <p>Adding Date</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {sort && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleChangeSort(undefined)}>
              Clear
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return;
};

const FilterMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">
          <IconFilter />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <p>Sort By</p>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <p>Adding Date</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>Adding Date</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>Adding Date</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const ProductsPage = () => {
  return (
    <Container>
      <nav className="flex justify-between w-full">
        <SortMenu onChange={() => null} />
          
        <div className="flex border-2 rounded-full border-muted p-2 pl-5">
          <input
            placeholder="Enter something to search"
            type="text"
            className="w-100 outline-none"
          />
          <Button variant="outline" className="rounded-full">
            <IconSearch />
          </Button>
        </div>

        <FilterMenu />
      </nav>
    </Container>
  );
};
