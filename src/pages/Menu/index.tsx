import style from "./Menu.module.scss";
import Logo from "../../assets/logo.svg?react";
import SearchInput from "./SearchInput";
import { useState } from "react";

export default function Menu() {

  const [search, setSearch] = useState("");

  return(
    <main>
      <nav className={ style.nav }>
        <Logo/>
      </nav>

      <header className={ style.header }>
        <div className={ style.header__text }>
          The house of code and pasta
        </div>
      </header>

      <section className={ style.menu }>
        <h3 className={ style.menu__title }>Menu</h3>
        <SearchInput search={ search } setSearch={ setSearch } />
      </section>
    </main>
  );
}