import { Container } from "@/components/ui/container";

export const Footer = () => {
  return (
    <Container className="bg-secondary text-secondary-foreground">
      <p>© Creado con Amor por Francisco Valle {new Date().getFullYear()}</p>
    </Container>
  );
};
