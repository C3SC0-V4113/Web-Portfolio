import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const languages = [
  {
    value: "spanish",
    label: "Español",
  },
  {
    value: "english",
    label: "English",
  },
];

interface Props {
  classNames?: {
    container: string;
  };
}

export const LanguagesForm = ({ classNames }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("english");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`justify-between p-4 w-44 ${classNames?.container}`}
        >
          {value
            ? languages.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`p-0 w-44 ${classNames?.container}`}>
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>Language not found</CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                value={language.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    `mr-2 h-4 w-4`,
                    value === language.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
