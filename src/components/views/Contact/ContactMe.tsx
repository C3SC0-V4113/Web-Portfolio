import { Container } from "@/components/ui/container";
import { ContactForm } from "./ContactForm";
import { IconButton } from "@/components/ui/icon-button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ContactMe = () => {
  return (
    <Container className="flex flex-col bg-primary text-primary-foreground">
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">Lets Talk</span>
        <h1 className="text-2xl font-bold">Contact Me</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-16">
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold text-center">
            Interact With Me in Social Media
          </p>
          <div className="flex flex-row gap-4 align-middle justify-evenly md:flex-col md:h-full">
            <div className="flex flex-col gap-2 text-center md:flex-row md:gap-5 md:self-center md:w-40">
              <IconButton
                icon={FaGithub}
                className="mx-auto md:mx-0"
                iconClass="md:w-12 md:h-12"
                href="https://github.com/C3SC0-V4113"
              />
              <p className="text-lg md:text-xl md:my-auto">GitHub</p>
            </div>
            <div className="flex flex-col gap-2 text-center md:flex-row md:gap-5 md:self-center md:w-40">
              <IconButton
                icon={FaLinkedin}
                iconClass="md:w-12 md:h-12"
                className="mx-auto md:mx-0"
                href="https://www.linkedin.com/in/francisco-jos%C3%A9-valle-cornejo/"
              />
              <p className="text-lg md:text-xl md:my-auto">LinkedIn</p>
            </div>
            <div className="flex flex-col gap-2 text-center md:flex-row md:gap-5 md:self-center md:w-40">
              <IconButton
                icon={FaXTwitter}
                iconClass="md:w-12 md:h-12"
                className="mx-auto md:mx-0"
                href="https://twitter.com/c3_sc0"
              />
              <p className="text-lg md:text-xl md:my-auto">X</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-center">
            Contact Me if you want to work with me
          </p>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};
