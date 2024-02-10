import {
  NavigationMenu,
  NavigationMenuContent,
  //   NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

export const NavMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem asChild>
          <Button className="p-4" variant={"ghost"}>
            <NavigationMenuLink href="#home">Home</NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem asChild>
          <Button className="p-4" variant={"ghost"}>
            <NavigationMenuLink href="#about">About</NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem asChild>
          <Button className="p-4" variant={"ghost"}>
            <NavigationMenuLink href="#services">Services</NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem asChild>
          <Button className="p-4" variant={"ghost"}>
            <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem asChild>
          <Button className="p-4" variant={"ghost"}>
            <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem asChild>
          <Button className="p-4" variant={"ghost"}>
            <NavigationMenuLink href="#contacts">Contact Me</NavigationMenuLink>
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>English</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              <NavigationMenuLink>Español</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
