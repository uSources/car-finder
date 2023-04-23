import type { Items } from "$/types/entities";

export default async function getMakes(): Promise<Items> {
  return await fetch("api/makes").then((res) => res.json());
}
