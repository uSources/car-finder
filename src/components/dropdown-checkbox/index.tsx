import classNames from "classnames";

import CheckboxGroup from "../checkbox-group";
import type { DropdownCheckboxProperties } from "./types";

export default function DropdownCheckbox({
  label,
  options,
  className,
  values,
  onChange,
}: DropdownCheckboxProperties) {
  return (
    <div className="dropdown dropdown-bottom relative">
      <label tabIndex={0} className="btn m-1">
        {label}
      </label>
      <ul
        tabIndex={1}
        className={classNames(
          "dropdown-content menu p-2 shadow bg-base-200 rounded-box max-w-2xl w-screen"
        )}
      >
        <CheckboxGroup
          onChange={onChange}
          values={values}
          className={classNames("gap-2", className)}
          options={options}
        />
      </ul>
    </div>
  );
}
