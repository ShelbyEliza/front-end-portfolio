// css:
import styles from "../../css/Header.module.css";

import Tester from "../../assets/menu-images/TesterSVG";
// import { NavLink } from "react-router-dom";

const navOptions = [
  "About",
  "Sites",
  "Blogs and Art",
  "Get in Touch",
  "Home",
  "Design Guide",
];

const rotationAngles = [22, 60, 98];

export default function Header() {
  return (
    <header>
      <nav className={styles["circle-container"]}>
        <Tester />
      </nav>

      {/* <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>

        <li>
          <NavLink to="/my-sites">My Sites</NavLink>
        </li>
        <li>
          <NavLink to="/blogs-&-art">Blogs & Art</NavLink>
        </li>

        <li>
          <NavLink to="/contact-me">Get in Touch</NavLink>
        </li>

        <li>
          <NavLink to="/design-guide">Design Guide</NavLink>
        </li>
      </ul> */}
    </header>
  );
}
