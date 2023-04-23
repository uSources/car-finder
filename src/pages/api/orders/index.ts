import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return await res.json([
    { key: "id", value: "Identificador" },
    { key: "make_id", value: "Fabricante" },
    { key: "name", value: "Nombre" },
  ]);
}
