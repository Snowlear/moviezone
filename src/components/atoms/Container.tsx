import ContainerStyles from "./Container.module.css";

export default function Container({ children, styles }: ContainerProps) {
  return (
    <div
      className={
        ContainerStyles.container + (styles === undefined ? "" : " " + styles)
      }
    >
      {children}
    </div>
  );
}

interface ContainerProps {
  children: any;
  styles?: string;
}
