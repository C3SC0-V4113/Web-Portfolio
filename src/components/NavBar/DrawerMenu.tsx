import {
  Drawer,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
} from "@/components/ui/drawer";
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

export const DrawerMenu = () => {
  return (
    <div className="md:hidden">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button>
            <AiOutlineMenu />
          </Button>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerContent className="fixed bottom-0 right-0 flex flex-col rounded-t-[10px] sm:left-auto sm:w-[400px] h-full">
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
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </div>
  );
};
