import type { ComponentProps } from "react";

import type { Items } from "$/types/entities";

export interface CheckboxGroupProperties
  extends Omit<ComponentProps<"div">, "onChange"> {
  options: Items;
  values?: (string | null)[];
  onChange?: (value: (string | null)[]) => void;
}
