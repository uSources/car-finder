import type { ProgressProperties } from "./types";

export default function Progress({ label }: ProgressProperties) {
  return <button className="btn loading">{label}</button>;
}
