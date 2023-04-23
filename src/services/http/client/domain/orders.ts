import type { Items } from "$/types/entities";

export default async function getColors(): Promise<Items> {
  return await fetch("api/orders").then((res) => res.json());
}
