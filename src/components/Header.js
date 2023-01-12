// css:
import styles from "../css/Header.module.css";
import "../css/MoonMenu.css";

// assets:
import OuterMoon from "../assets/menu-images/OuterMoon";
import MoonFace from "../assets/menu-images/MoonFace";
import RotationRing from "../assets/menu-images/RotationRing-opt";

import usePathName from "../hooks/usePathName";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  let pathName = usePathName();
  const [rotationClass, setRotationClass] = useState(pathName);
  const [previousClass, setPreviousClass] = useState("blogs-and-art");

  const selectPage = (page) => {
    let pageSelected = page + "-selected-from-" + previousClass;
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
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <section className={styles["moon-container"]}>
          <OuterMoon rotationClass={rotationClass} />
          <MoonFace rotationClass={rotationClass} />
          <RotationRing rotationClass={rotationClass} />
        </section>
        <div className={styles.static}>
          <nav className={`${styles["btn-container"]} `}>
            <NavLink
              id="home"
              to={"/home"}
              className={styles["home-btn"]}
              onClick={(e) => selectPage(e.target.id)}
            >
              Home
            </NavLink>
            <div className={styles["rotating-btns"]} id={rotationClass}>
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
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
