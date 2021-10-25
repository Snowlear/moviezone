import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SearchAreaStyles from "./SearchArea.module.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Form from "../atoms/Form";

export default function SearchArea({ data }: SearchAreaProps) {
  const { search, setSearch, handleSearch, activeLink } =
    useContext(DataContext);
  return (
    <Form styles={SearchAreaStyles.form} onSubmit={handleSearch}>
      {activeLink === "Search Movie" && (
        <React.Fragment>
          <Input
            styles={SearchAreaStyles.input}
            placeholder="Forrest Gump?"
            value={search}
            onChange={(e: string) => setSearch(e)}
          ></Input>
          <Button classNames={SearchAreaStyles.button}>Search</Button>
        </React.Fragment>
      )}
    </Form>
  );
}

interface SearchAreaProps {
  data?: any;
}
