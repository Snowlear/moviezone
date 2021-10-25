import InputStyles from "./Input.module.css";

export default function Input({
  styles,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      className={InputStyles.input + (styles === undefined ? "" : " " + styles)}
      placeholder={placeholder}
    />
  );
}

interface InputProps {
  onChange?: Function;
  value?: string;
  styles?: string;
  placeholder?: string;
}
