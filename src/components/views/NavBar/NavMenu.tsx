import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "../../ui/button";
import { LanguagesForm } from "./LanguagesForm";

export const NavMenu = () => {
  const navMenu = [
    {
      direction: "#home",
      handler: "Home",
    },
    {
      direction: "#about",
      handler: "About",
    },
    {
      direction: "#services",
      handler: "Services",
    },
    {
      direction: "#skills",
      handler: "Skills",
    },
    {
      direction: "#projects",
      handler: "Projects",
    },
    {
      direction: "#contactme",
      handler: "Contact Me",
    },
  ];

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navMenu.map((navItem, index) => (
          <NavigationMenuItem key={index} asChild>
            <Button
              onClick={() => console.log(navItem.direction)}
              className="p-4"
              variant={"ghost"}
            >
              <NavigationMenuLink href={navItem.direction}>
                {navItem.handler}
              </NavigationMenuLink>
            </Button>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <LanguagesForm />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
