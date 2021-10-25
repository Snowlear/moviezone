import { CSSProperties } from "react";

export default function Box({
  onClick = () => {},
  children,
  classNames,
  isClear = false,
  styles = {},
}: BoxProps) {
  return (
    <button
      onClick={() => onClick()}
      style={styles}
      className={classNames === undefined ? "" : " " + classNames}
    >
      {children}
    </button>
  );
}

interface BoxProps {
  onClick?: Function;
  children?: any;
  isClear?: boolean;
  classNames?: string;
  styles?: CSSProperties;
}
