type TextareaProps = {
  id: string;
  name: string;
  value: string;
  placeholder: string;
  rows: number;
  style: React.CSSProperties;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
const Textarea = ({
  placeholder,
  id,
  name,
  value,
  rows,
  style,
  handleChange,
}: TextareaProps) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      rows={rows}
      style={style}
      onChange={handleChange}
    />
  );
};

export default Textarea;
