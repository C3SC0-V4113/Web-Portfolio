import { About } from "./components/views/About";
import { Header } from "./components/views/Home";
import { NavBar } from "./components/views/NavBar";
import { Services } from "./components/views/Services";

export const WebPortfolioApp = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <div className="bg-background text-background-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-primary text-primary-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-popover text-popover-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-card text-card-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-secondary text-secondary-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-muted text-muted-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-accent text-accent-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="bg-destructive text-destructive-foreground">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
};
