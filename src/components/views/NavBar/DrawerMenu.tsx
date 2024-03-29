import { Button } from "../../ui/button";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../../ui/command";
import { FaCode, FaHome, FaLink, FaStar } from "react-icons/fa";
import { MdOutlineWorkspaces } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ThemeToggle, LanguageToggle } from "./";
import { useTranslation } from "react-i18next";

export const DrawerMenu = () => {
  const { t } = useTranslation(["common"]);
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    matches && setOpen(false);
  }, [matches]);

  const navMenu = [
    {
      direction: "home",
      handler: t("home"),
      icon: <FaHome className="w-6 h-6 mr-4" />,
    },
    {
      direction: "about",
      handler: t("about"),
      icon: <FaCode className="w-6 h-6 mr-4" />,
    },
    {
      direction: "services",
      handler: t("services"),
      icon: <FaLink className="w-6 h-6 mr-4" />,
    },
    {
      direction: "skills",
      handler: t("skills"),
      icon: <FaStar className="w-6 h-6 mr-4" />,
    },
    {
      direction: "projects",
      handler: t("projects"),
      icon: <MdOutlineWorkspaces className="w-6 h-6 mr-4" />,
    },
    {
      direction: "contactme",
      handler: t("contactme"),
      icon: <FaMessage className="w-6 h-6 mr-4" />,
    },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="fixed z-10 border top-5 right-5 border-secondary">
            <AiOutlineMenu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"} className="sm:w-[400px]">
          <Command>
            <CommandList className="h-full py-4 max-h-none">
              <CommandGroup>
                {navMenu.map((navItem, index) => (
                  <CommandItem key={index} className="p-0">
                    <a
                      onClick={() => {
                        const element = document.getElementById(
                          navItem.direction
                        );
                        setOpen(false);
                        setTimeout(
                          () => element?.scrollIntoView({ behavior: "smooth" }),
                          500
                        );
                      }}
                      // href={navItem.direction}
                      className="flex w-full align-middle px-2 py-1.5"
                    >
                      {navItem.icon}
                      <span className="text-base">{navItem.handler}</span>
                    </a>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator className="my-4" />
              <CommandGroup>
                <div className="flex justify-between w-full">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
              </CommandGroup>
            </CommandList>
          </Command>
        </SheetContent>
      </Sheet>
    </div>
  );
};
