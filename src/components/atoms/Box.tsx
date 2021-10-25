import boxStyles from "./Box.module.css";

export default function Box({
  children,
  styles,
  keyValue,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onClick = () => {},
}: BoxProps) {
  return (
    <div
      key={keyValue}
      className={boxStyles.box + (styles === undefined ? "" : " " + styles)}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
}

interface BoxProps {
  children: any;
  styles?: string;
  keyValue?: string;
  onMouseEnter?: Function;
  onMouseLeave?: Function;
  onClick?: Function;
}
