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
    <div className="fixed top-0 right-0 z-10 justify-between hidden w-full p-3 md:flex bg-background">
      <div
        className="h-auto my-auto cursor-pointer w-14"
        onClick={() => {
          const element = document.getElementById("home");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <svg
          id="Capa_1"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 72.47 47.34"
          className="fill-foreground"
        >
          <path d="M10,36.86V26.2H4.64V20.87H10V10.21H26v5.33H20.63v5.33H15.3V26.2h5.33v5.33H26v5.33Z" />
          <path d="M44.64,36.77V31.46H50V26.15h5.31V20.84H50V15.52H44.64V10.21H60.58V20.84h5.31v5.31H60.58V36.77Z" />
          <path d="M22.89,29V17.62H32v2.27H27.44v2.28H32v2.27H27.44V29Z" />
          <path d="M38.8,29V26.71H36.53V22.17H34.26V17.62H38.8v4.55h4.55V17.62h4.54v4.55H45.62v4.54H43.35V29Z" />
        </svg>
      </div>
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
