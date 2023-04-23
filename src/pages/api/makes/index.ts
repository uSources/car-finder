import type { NextApiRequest, NextApiResponse } from "next";

import backend from "$/services/http/backend";
import type { Makes, SearchResponse } from "$/types/entities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return await backend
    .get<SearchResponse<Makes>>("/makes")
    .then((response) => response?.data)
    .then((data) =>
      data?.map(({ id, name }) => ({
        key: `${id}`,
        value: `${name}`,
      }))
    )
    .then((makes) => res.json(makes))
    .catch((error) => res.status(500).json({ error }));
}
