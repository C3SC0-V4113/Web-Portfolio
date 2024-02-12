import { Button } from "../ui/button";
import { AiOutlineMenu } from "react-icons/ai";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export const DrawerMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <AiOutlineMenu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"} className="sm:w-[400px]">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="p-1">
                <NavigationMenuLink href="#home">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-1">
                <NavigationMenuLink href="#about">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-1">
                <NavigationMenuLink href="#services">
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-1">
                <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-1">
                <NavigationMenuLink href="#projects">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-1">
                <NavigationMenuLink href="#contacts">
                  Contact Me
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-1">
                <NavigationMenuTrigger>English</NavigationMenuTrigger>
                <NavigationMenuContent>Español</NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};
