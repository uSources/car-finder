import type { SelectProperties } from "./types";

export default function FormControl({
  placeholder,
  options,
  defaultValue,
  ...rest
}: SelectProperties) {
  return (
    <select
      defaultValue={defaultValue}
      className="select select-bordered w-full max-w-xs"
      {...rest}
    >
      {placeholder && (
        <option value={undefined} hidden>
          {placeholder}
        </option>
      )}
      {options?.map(({ key, value }) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
}
