import type { Items } from "$/types/entities";

export interface DropdownCheckboxProperties {
  label: string;
  options: Items;
  className?: string;
  values?: (string | null)[];
  onChange?: (value: (string | null)[]) => void;
}
