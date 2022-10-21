import { ReactComponent as Logo } from "../assets/logo-1.svg";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
}
