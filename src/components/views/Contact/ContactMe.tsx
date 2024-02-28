import { Container } from "@/components/ui/container";
import { ContactForm, SocialMedia } from "./";

export const ContactMe = () => {
  return (
    <Container
      id="contactme"
      className="flex flex-col bg-primary text-primary-foreground"
    >
      <div className="flex flex-col gap-0.5 text-center">
        <span className="text-sm font-light">Lets Talk</span>
        <h1 className="text-2xl font-bold text-background">Contact Me</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-16">
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold text-center">
            Interact With Me in Social Media
          </p>
          <SocialMedia />
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
