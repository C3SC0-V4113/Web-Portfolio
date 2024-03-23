import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { useUiStore } from "@/hooks/useUiStore";
import { FaRegMoon, FaSun } from "react-icons/fa";
import { Theme } from "@/contracts/types/TUiStore";

export const ThemeToggle = () => {
  const { setTheme, theme } = useUiStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FaRegMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Dark Mode</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(theme) => setTheme(theme as Theme)}
        >
          <DropdownMenuRadioItem value={"dark"}>Activado</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"light"}>
            Desactivado
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"system"}>
            Configuración del sistema
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
