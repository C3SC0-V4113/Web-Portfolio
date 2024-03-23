import { Button } from "@/components/ui/button";
import { TbWorld } from "react-icons/tb";
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
import { Language } from "@/contracts/types/TUiStore";

export const LanguageToggle = () => {
  const { language, setLanguage } = useUiStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <TbWorld className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Change language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={(language) => setLanguage(language as Language)}
        >
          <DropdownMenuRadioItem value={"es"}>Español</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"en"}>English</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
