import type { CardProperties } from "./types";

export default function Card({ children, figure, ...rest }: CardProperties) {
  return (
    <div className="card card-compact bg-base-100" {...rest}>
      {figure && <figure>{figure}</figure>}
      <div className="card-body">{children}</div>
    </div>
  );
}
