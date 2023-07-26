import React from "react";
type CheckBoxProps = {
  id: string;
  name: string;
  value: any;
  isChecked: boolean | undefined;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox = ({
  id,
  value,
  name,
  isChecked,
  handleChange,
}: CheckBoxProps) => {
  return (
    <input
      id={id}
      name={name}
      type="checkbox"
      onChange={handleChange}
      checked={isChecked}
      value={(!isChecked).toString()}
    />
  );
};

export default Checkbox;
