import WrapperStyles from "./Navigation.module.css";

export default function Wrapper({ children }: WrapperProps) {
  return <nav className={WrapperStyles.nav}>{children}</nav>;
}

interface WrapperProps {
  children?: any;
}
