import type { InputProperties } from "./types";

export default function FormControl({
  placeholder,
  type,
  ...rest
}: InputProperties) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full max-w-xs"
      {...rest}
    />
  );
}
