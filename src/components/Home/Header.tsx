import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";
import { ShapeSVG } from "./ShapeSVG";
import { FaXTwitter } from "react-icons/fa6";

export const Header = () => {
  return (
    <div className="grid grid-cols-1 gap-3 px-4 py-5 md:grid-cols-2 md:py-8 md:px-6">
      <div className="flex flex-col gap-3 text-center md:text-justify ">
        <h1 className="text-3xl font-bold">Francisco Valle</h1>
        <h2>Soy el desarrollador web que potenciará tu presencia en linea</h2>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button className="w-full md:w-auto">Contact Me</Button>
          <Button className="w-full md:w-auto bg-accent text-accent-foreground hover:text-primary-foreground">
            My Works
          </Button>
        </div>
        <div className="flex flex-row justify-center gap-4 align-middle md:justify-start">
          <div className="p-2 rounded-full bg-accent text-accent-foreground">
            <FaGithub className="w-6 h-6" />
          </div>
          <div className="p-2 rounded-full bg-accent text-accent-foreground">
            <FaLinkedin className="w-6 h-6" />
          </div>
          <div className="p-2 rounded-full bg-accent text-accent-foreground">
            <FaXTwitter className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="justify-center hidden align-middle md:flex">
        <ShapeSVG />
      </div>
    </div>
  );
};
