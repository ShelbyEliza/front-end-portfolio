// css:
import styles from "../../css/Header.module.css";
import { NavLink } from "react-router-dom";

import InnerMoon from "../../assets/menu-images/InnerMoon";
import OuterMoon from "../../assets/menu-images/OuterMoon";
import Pointer from "../../assets/menu-images/Pointer";
import usePathName from "../../hooks/usePathName";
import { useState } from "react";

export default function Header() {
  let pathName = usePathName();
  const [rotationClass, setRotationClass] = useState(pathName);
  const [previousClass, setPreviousClass] = useState("blogs-and-art");

  const selectPage = (page) => {
    let pageSelected = page + "-selected-from-" + previousClass;
    console.log(page, previousClass);
    if (page === "home") {
      setRotationClass(pageSelected);
      setPreviousClass("blogs-and-art");
    } else if (
      page !== previousClass ||
      (page === "blogs-and-art" && previousClass === "blogs-and-art")
    ) {
      setRotationClass(pageSelected);
      setPreviousClass(page);
    }
  };

  return (
    <header>
      <div className={styles["circle-container"]}>
        <div className={styles["moon-container"]}>
          <OuterMoon rotationClass={rotationClass} />
          <InnerMoon rotationClass={rotationClass} />
          {/* <Pointer rotationClass={rotationClass} /> */}
        </div>
        <nav className={`${styles["btn-container"]} ${styles[rotationClass]}`}>
          <NavLink
            id="home"
            to={"/home"}
            className={styles["home-btn"]}
            onClick={(e) => selectPage(e.target.id)}
          >
            Home
          </NavLink>
          <NavLink
            id="about"
            to={"/about"}
            className={styles["about-btn"]}
            onClick={(e) => selectPage(e.target.id)}
          >
            About
          </NavLink>
          <NavLink
            id="blogs-and-art"
            to={"/blogs-and-art"}
            className={styles["blogs-and-art-btn"]}
            onClick={(e) => selectPage(e.target.id)}
          >
            Blogs and Art
          </NavLink>
          <NavLink
            id="sites"
            to="/sites"
            className={styles["sites-btn"]}
            onClick={(e) => selectPage(e.target.id)}
          >
            Sites
          </NavLink>
        </nav>
      </div>

      {/* <img src="/assets/logo-1.svg" alt="Shelby Shipley Works Logo" /> */}
    </header>
  );
}
