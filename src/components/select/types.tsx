import type { ComponentProps } from "react";

import type { Items } from "$/types/entities";

export interface SelectProperties extends ComponentProps<"select"> {
  options?: Items;
}
