import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Button from "../atoms/Button";
import NavigationLinkStyles from "./NavigationLink.module.css";

export default function NavigationLink({ text }: NavigationLinkProps) {
  const { activeLink, setActiveLink, setHiddenMenu } = useContext(DataContext);
  return (
    <Button
      classNames={NavigationLinkStyles.button}
      styles={{
        color: activeLink === text ? "#808080" : "#000000",
        textDecoration: activeLink === text ? "underline" : "unset",
      }}
      onClick={() => {
        setActiveLink(text);
        setHiddenMenu(true);
      }}
    >
      {text}
    </Button>
  );
}

interface NavigationLinkProps {
  text: string;
}
