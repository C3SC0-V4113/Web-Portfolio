import { Button } from "../ui/button";
import { AiOutlineMenu } from "react-icons/ai";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Command, CommandGroup, CommandItem, CommandList } from "../ui/command";
import { FaCode, FaHome, FaLink, FaStar } from "react-icons/fa";
import { MdOutlineWorkspaces } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { LanguagesForm } from "./LanguagesForm";

const navMenu = [
  {
    direction: "#home",
    handler: "Home",
    icon: <FaHome className="w-6 h-6 mr-4" />,
  },
  {
    direction: "#about",
    handler: "About",
    icon: <FaCode className="w-6 h-6 mr-4" />,
  },
  {
    direction: "#services",
    handler: "Services",
    icon: <FaLink className="w-6 h-6 mr-4" />,
  },
  {
    direction: "#skills",
    handler: "Skills",
    icon: <FaStar className="w-6 h-6 mr-4" />,
  },
  {
    direction: "#projects",
    handler: "Projects",
    icon: <MdOutlineWorkspaces className="w-6 h-6 mr-4" />,
  },
  {
    direction: "#contact",
    handler: "Contact Me",
    icon: <FaMessage className="w-6 h-6 mr-4" />,
  },
];

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
          <Command>
            <CommandList className="h-full py-4 max-h-none">
              <CommandGroup>
                {navMenu.map((navItem, index) => (
                  <CommandItem key={index} className="p-0">
                    <a
                      href={navItem.direction}
                      className="flex w-full align-middle px-2 py-1.5"
                    >
                      {navItem.icon}
                      <span className="text-base">{navItem.handler}</span>
                    </a>
                  </CommandItem>
                ))}
              </CommandGroup>
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
