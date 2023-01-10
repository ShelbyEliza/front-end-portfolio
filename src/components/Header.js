// css:
import styles from "../css/Header.module.css";
import burst from "../assets/burst-opt.svg";
import MoonFace from "../assets/menu-images/MoonFace";
import MoonLady from "../assets/menu-images/MoonLady";
import { NavLink } from "react-router-dom";

import InnerMoon from "../assets/menu-images/InnerMoon";
import OuterMoon from "../assets/menu-images/OuterMoon";
import usePathName from "../hooks/usePathName";
import { useState } from "react";
import RotatingRing from "../assets/menu-images/RotatingRing";

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
          <InnerMoon rotationClass={rotationClass} />
          {/* <RotatingRing rotationClass={rotationClass} /> */}
          {/* <MoonLady rotationClass={rotationClass} /> */}
        </section>
        <nav className={`${styles["btn-container"]} `}>
          <NavLink
            id="home"
            to={"/home"}
            className={styles["home-btn"]}
            onClick={(e) => selectPage(e.target.id)}
          >
            {/* <MoonFace /> */}
            {/* <figure>
              <img src={burst} alt="stylized cat avatar" />
              <figcaption></figcaption>
            </figure> */}
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
    </header>
  );
}
