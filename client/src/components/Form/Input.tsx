type InputProps = {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  style: React.CSSProperties;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({
  id,
  name,
  style,
  value,
  placeholder,
  handleChange,
}: InputProps) => {
  return (
    <input
      id={id}
      style={style}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
