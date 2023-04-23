import type BadgeProperties from "./types";

export default function Badge({ label }: BadgeProperties) {
  return <div className="badge badge-primary">{label}</div>;
}
