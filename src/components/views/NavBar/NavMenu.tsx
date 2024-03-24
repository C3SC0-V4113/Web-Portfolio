import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "../../ui/button";
import { ThemeToggle, LanguageToggle } from "./";
import { useTranslation } from "react-i18next";

export const NavMenu = () => {
  const { t } = useTranslation(["common"]);
  const navMenu = [
    {
      direction: "home",
      handler: t("home"),
    },
    {
      direction: "about",
      handler: t("about"),
    },
    {
      direction: "services",
      handler: t("services"),
    },
    {
      direction: "skills",
      handler: t("skills"),
    },
    {
      direction: "projects",
      handler: t("projects"),
    },
    {
      direction: "contactme",
      handler: t("contactme"),
    },
  ];

  return (
    <div className="fixed top-0 right-0 z-10 justify-end hidden w-full p-3 md:flex bg-background">
      <NavigationMenu>
        <NavigationMenuList>
          {navMenu.map((navItem, index) => (
            <NavigationMenuItem key={index} asChild>
              <Button
                onClick={() => {
                  const element = document.getElementById(navItem.direction);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-4"
                variant={"ghost"}
              >
                <NavigationMenuLink>{navItem.handler}</NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <LanguageToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
