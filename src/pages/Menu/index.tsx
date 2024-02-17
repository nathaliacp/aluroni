import style from "./Menu.module.scss";
import Logo from "../../assets/logo.svg?react";

export default function Menu() {

  return(
    <main>
      <nav className={ style.menu }>
        <Logo/>
      </nav>
    </main>
  );
}