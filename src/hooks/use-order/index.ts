import { useQuery } from "@tanstack/react-query";

import { getOrders } from "$/services/http/client/domain";

export default function useOrders() {
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return {
    orders: data || [],
  };
}
