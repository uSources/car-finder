import type { ChangeEvent } from "react";

import type { CheckboxGroupProperties } from "./types";
import Checkbox from "../checkbox";

export default function CheckboxGroup({
  options,
  onChange,
  values = [],
  ...rest
}: CheckboxGroupProperties) {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let currentSelected = values;
    if (checked) {
      currentSelected = [...values, value];
    } else {
      currentSelected = values.filter((checkbox) => checkbox !== value);
    }
    onChange && onChange(currentSelected);
  };

  return (
    <div {...rest}>
      {options.map(({ key, value }) => (
        <Checkbox
          key={key}
          label={value}
          value={key}
          checked={values && values.includes(key)}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
}
