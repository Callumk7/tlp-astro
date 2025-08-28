import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { MenuIcon } from "../ui/icons/menu";
import { Button } from "../ui/button";

const links = [
  {
    id: 0,
    href: "/",
    name: "Home",
  },
  {
    id: 1,
    href: "/piggies",
    name: "Our Piggies",
  },
  {
    id: 3,
    href: "/how-to-adopt",
    name: "How to Adopt",
  },
  {
    id: 4,
    href: "/boarding",
    name: "Boarding",
  },
  {
    id: 5,
    href: "/surrender",
    name: "Give up a Piggy",
  },
];

function NavigationLinks({
  isDropdownMenu = false,
  pathname,
}: {
  isDropdownMenu?: boolean;
  pathname?: string;
}) {
  console.log(`${pathname}`);
  return (
    <>
      {links.map((link) => {
        if (isDropdownMenu) {
          return (
            <DropdownMenuItem asChild key={link.id}>
              <a href={link.href}>{link.name}</a>
            </DropdownMenuItem>
          );
        } else {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                className={clsx(
                  "font-inter font-semibold text-sage-10 transition-colors ease-in-out hover:text-sage-12",
                  pathname === link.href &&
                    "text-sage-12 underline decoration-plum-9 decoration-2",
                )}
              >
                {link.name}
              </a>
            </li>
          );
        }
      })}
    </>
  );
}

export function NavBar({ pathname }: { pathname: string }) {
  return (
    <nav className="relative z-20 mx-auto flex w-4/5 flex-row items-center justify-end py-5 lg:justify-between lg:gap-12">
      {/*Standard navigation menu, inline when screens are large or above.*/}
      <ul className="hidden flex-row items-center justify-start gap-8 lg:flex">
        <NavigationLinks pathname={pathname} />
      </ul>
      {/*Dropdown menu navigation for smaller screens. Will be hidden if the inline menu 
      is visible*/}
      <DropdownMenu>
        <DropdownMenuTrigger className="lg:hidden">
          <MenuIcon className="h-9 w-9" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mx-6 w-[80vw]">
          <NavigationLinks isDropdownMenu pathname={pathname} />
          <Button className="block w-full lg:hidden" variant={"primary"}>
            <a href={"/contact"}>Contact Us</a>
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex gap-7">
        <Button className="hidden lg:block" variant={"primary"}>
          <a href={"/contact"}>Contact Us</a>
        </Button>
      </div>
    </nav>
  );
}
