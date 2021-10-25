import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Box from "../atoms/Box";
import MenuStyles from "./Menu.module.css";
import NavigationLink from "./NavigationLink";

export default function Menu({}: MenuProps) {
  const { hiddenMenu } = useContext(DataContext);
  return (
    <Box styles={MenuStyles.menu + (hiddenMenu ? " " + MenuStyles.hidden : "")}>
      <NavigationLink text="Popular" />
      <NavigationLink text="Search Movie" />
      <NavigationLink text="My Favourites" />
      <NavigationLink text="Watch Later" />
    </Box>
  );
}

interface MenuProps {}
