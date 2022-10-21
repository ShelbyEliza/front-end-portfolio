import { ReactComponent as Logo } from "../assets/logo-1.svg";
// import River from "../assets/river.jpg";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      class="flex justify-center p-20"
      // style={{
      //   backgroundImage: `url(${River})`,
      //   backgroundSize: "100%",
      // }}
    >
      <Link to="/">
        <Logo />
      </Link>
      {/* <div
        style={{
          backgroundImage: `url(${River})`,
        }}
      >
        hello
      </div> */}
    </header>
  );
}
