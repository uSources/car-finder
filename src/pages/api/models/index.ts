import type { NextApiRequest, NextApiResponse } from "next";

import backend from "$/services/http/backend";
import type { ComplexFilter, Models, SearchResponse } from "$/types/entities";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const make = req.query.make
    ? (req.query.make as string).split(",")
    : undefined;
  const page = req.query.page as string;
  const name = req.query.name as string;
  const sort = req.query.sort as string;

  const complexFilters: Array<ComplexFilter> = [];

  const params = new URLSearchParams({
    verbose: "yes",
    limit: "50",
    page: page || "1",
    sort: sort || "name",
  });

  if (make) {
    complexFilters.push({
      val: make,
      op: "in",
      field: "make_id",
    });
  }

  if (name) {
    complexFilters.push({
      val: name,
      op: "like",
      field: "model",
    });
  }

  complexFilters &&
    complexFilters.length > 0 &&
    params.set("json", JSON.stringify(complexFilters));

  return await backend
    .get<SearchResponse<Models>>("/models", params.toString())
    .then((response) => {
      const currentPage = parseInt(page) || 1;
      const hasNextPage =
        response && response.collection.pages - 1 >= currentPage;
      const pagination = {
        currentPage: currentPage,
        hasNextPage: hasNextPage,
        nextPage: hasNextPage ? currentPage + 1 : currentPage,
      };
      return {
        pagination: pagination,
        data: response && response.data,
      };
    })
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json({ error }));
}
