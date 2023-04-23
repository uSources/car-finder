import type { DropdownProperties } from "./types";

export default function Dropdown({ label, options }: DropdownProperties) {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        {label}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {options.map(({ key, value }) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
