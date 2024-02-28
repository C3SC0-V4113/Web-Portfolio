// import { ThemesTester } from "./components/ui/themes-tester";
import { About } from "./components/views/About";
import { ContactMe } from "./components/views/Contact";
import { Footer } from "./components/views/Footer";
import { Header } from "./components/views/Home";
import { NavBar } from "./components/views/NavBar";
import { Projects } from "./components/views/Projects";
import { Services } from "./components/views/Services";
import { Skills } from "./components/views/Skills";

export const WebPortfolioApp = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
      {/* <ThemesTester /> */}
    </>
  );
};
