import type { Items } from "$/types/entities";

export default async function getYears(): Promise<Items> {
  return await fetch("api/years").then((res) => res.json());
}
