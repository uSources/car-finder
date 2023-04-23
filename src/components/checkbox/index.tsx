import type { CheckboxProperties } from "./types";

export default function Checkbox({
  checked,
  label,
  ...rest
}: CheckboxProperties) {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        {label && <span className="label-text">{label}</span>}
        <input
          type="checkbox"
          checked={checked}
          className="checkbox"
          {...rest}
        />
      </label>
    </div>
  );
}
