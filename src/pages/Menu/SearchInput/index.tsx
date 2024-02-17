import React from "react";
import style from "./SearchInput.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string> >
}

export default function SearchInput({ search, setSearch }: Props) {

  return(
    <div className={ style.search }>
      <input 
        type="text" 
        name="search" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="searchInput" />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}