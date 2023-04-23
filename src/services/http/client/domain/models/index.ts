import type { Models, PaginationResponse } from "$/types/entities";

interface getModelsProperties {
  page?: number;
  make?: (string | null)[] | null;
  sort?: string;
  name?: string;
}

export default async function getModels({
  page = 1,
  make,
  sort,
  name,
}: getModelsProperties): Promise<PaginationResponse<Models>> {
  const params = new URLSearchParams({
    page: `${page}`,
    make: make ? make.join(",") : "",
    sort: sort || "",
    name: name || "",
  });

  return await fetch(`api/models?${params.toString()}`).then((res) =>
    res.json()
  );
}
