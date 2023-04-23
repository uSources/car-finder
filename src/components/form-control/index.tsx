import type { FormControlProperties } from "./types";

export default function FormControl({
  children,
  label,
}: FormControlProperties) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {children}
    </div>
  );
}
