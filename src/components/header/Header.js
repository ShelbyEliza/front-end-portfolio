// css:
import styles from "../../css/Header.module.css";

import Tester from "../../assets/menu-images/TesterSVG";
import InnerMoon from "../../assets/menu-images/InnerMoon";
import OuterMoon from "../../assets/menu-images/OuterMoon";
import { Link } from "react-router-dom";

const navOptions = [
  "About",
  "Sites",
  "Blogs and Art",
  "Get in Touch",
  "Home",
  "Design Guide",
];

const navKey = {
  about: 0,
  blogsAndArt: 22,
  sites: 60,
};

export default function Header() {
  return (
    <header>
      <div className={styles["circle-container"]}>
        <div className={styles["moon-container"]}>
          <OuterMoon />
          <InnerMoon />
        </div>
        <nav className={styles["btn-container"]}>
          <Link to="/about" className={styles["about-btn"]}>
            About
          </Link>
          <Link to="/blogs-and-art" className={styles["blogs-and-art-btn"]}>
            Blogs and Art
          </Link>
          <Link to="/sites" className={styles["sites-btn"]}>
            Sites
          </Link>
        </nav>
      </div>
    </header>
  );
}
