import { useQuery } from "@tanstack/react-query";

import { getMakes } from "$/services/http/client/domain";

export default function useMakes() {
  const { data } = useQuery({
    queryKey: ["makes"],
    queryFn: getMakes,
  });

  return {
    makes: data || [],
  };
}
