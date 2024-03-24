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
import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const { language, setLanguage } = useUiStore();
  const { t } = useTranslation(["common"]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <TbWorld className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("language.title")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("language.title")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={language.split("-")[0]}
          onValueChange={(language) => setLanguage(language as Language)}
        >
          <DropdownMenuRadioItem value={"es"}>Español</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"en"}>English</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
