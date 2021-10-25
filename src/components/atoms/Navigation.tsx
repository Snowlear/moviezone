import NavigationStyles from "./Navigation.module.css";

export default function Navigation({ children }: NavigationProps) {
  return <nav className={NavigationStyles.nav}>{children}</nav>;
}

interface NavigationProps {
  children?: any;
}
