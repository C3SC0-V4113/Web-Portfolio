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
import { LanguagesForm } from "./LanguagesForm";
import { useState } from "react";

const navMenu = [
  {
    direction: "home",
    handler: "Home",
    icon: <FaHome className="w-6 h-6 mr-4" />,
  },
  {
    direction: "about",
    handler: "About",
    icon: <FaCode className="w-6 h-6 mr-4" />,
  },
  {
    direction: "services",
    handler: "Services",
    icon: <FaLink className="w-6 h-6 mr-4" />,
  },
  {
    direction: "skills",
    handler: "Skills",
    icon: <FaStar className="w-6 h-6 mr-4" />,
  },
  {
    direction: "projects",
    handler: "Projects",
    icon: <MdOutlineWorkspaces className="w-6 h-6 mr-4" />,
  },
  {
    direction: "contactme",
    handler: "Contact Me",
    icon: <FaMessage className="w-6 h-6 mr-4" />,
  },
];

export const DrawerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>
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
                <LanguagesForm classNames={{ container: "w-full" }} />
              </CommandGroup>
            </CommandList>
          </Command>
        </SheetContent>
      </Sheet>
    </div>
  );
};
