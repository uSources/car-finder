import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { ArrayParam, StringParam, useQueryParam } from "use-query-params";

import { getModels } from "$/services/http/client/domain";

export default function useInfiniteModels() {
  const [make] = useQueryParam("make", ArrayParam);
  const [name] = useQueryParam("name", StringParam);
  const [order] = useQueryParam("order", StringParam);

  const { data, isSuccess, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["models", make, name, order],
      queryFn: ({ pageParam = 1 }) =>
        getModels({
          page: pageParam,
          make: make || undefined,
          name: name || undefined,
          sort: order || undefined,
        }),
      getNextPageParam(request) {
        return request.pagination.hasNextPage
          ? request.pagination.nextPage
          : false;
      },
    });

  const models = useMemo(
    () =>
      data?.pages.reduce((prev, page) => {
        return {
          pagination: page.pagination,
          data: [...prev.data, ...page.data],
        };
      }),
    [data]
  );

  return {
    models,
    isSuccess,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}
