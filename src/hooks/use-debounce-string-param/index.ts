import type { Dispatch } from "react";
import { useEffect, useState } from "react";
import { StringParam, useQueryParam } from "use-query-params";

import useDebounce from "../use-debounce";

export default function useDebounceStringParam(
  param: string,
  delay: number
): [string | null | undefined, Dispatch<string>] {
  const [parameter, setParameter] = useQueryParam(param, StringParam);
  const [state, setState] = useState(parameter);
  const debouncedValue = useDebounce(state, delay);

  useEffect(() => {
    setParameter(debouncedValue);
  }, [debouncedValue, setParameter]);

  return [state, setState];
}
