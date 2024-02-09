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

export const NavMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem className="p-1">
          <NavigationMenuLink href="#home">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-1">
          <NavigationMenuLink href="#about">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-1">
          <NavigationMenuLink href="#services">Services</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-1">
          <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-1">
          <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-1">
          <NavigationMenuLink href="#contacts">Contact Me</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-1">
          <NavigationMenuTrigger>English</NavigationMenuTrigger>
          <NavigationMenuContent>Español</NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
