import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import BurgerIcon from "../atoms/BurgerIcon";
import Container from "../atoms/Container";
import Logo from "../atoms/Logo";
import Navigation from "../atoms/Navigation";
import Wrapper from "../atoms/Wrapper";
import SearchArea from "./SearchArea";
import NavigationStyles from "./NavigationBar.module.css";
import Menu from "./Menu";

export default function NavigationBar({ text }: NavigationBarProps) {
  const { hiddenMenu, setHiddenMenu } = useContext(DataContext);
  return (
    <Navigation>
      <Container styles={NavigationStyles.container}>
        <Wrapper>
          <Logo />
          <Menu />
        </Wrapper>
        <SearchArea />
        <BurgerIcon
          onClick={() => setHiddenMenu(!hiddenMenu)}
          ishiddenMenu={hiddenMenu}
        />
      </Container>
    </Navigation>
  );
}

interface NavigationBarProps {
  text?: string;
}
