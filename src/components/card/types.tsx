import type { ReactNode, ComponentProps } from "react";

export interface CardProperties extends ComponentProps<"div"> {
  figure?: ReactNode;
}
