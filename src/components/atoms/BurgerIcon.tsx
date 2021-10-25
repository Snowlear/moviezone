import BurgerStyles from "./BurgerIcon.module.css";

export default function BurgerIcon({ onClick, ishiddenMenu }: ContainerProps) {
  return (
    <i
      onClick={() => onClick()}
      className={
        BurgerStyles.burgerMenu +
        " " +
        (ishiddenMenu ? "fas fa-bars" : "fas fa-times")
      }
    ></i>
  );
}

interface ContainerProps {
  onClick: Function;
  ishiddenMenu: boolean;
}
