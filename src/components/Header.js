// css:
import styles from "../components-css/Header.module.css";
import "../components-css/MoonMenu.css";

// assets:
import texture from "../assets/menu-images/moon-texture.png";
import OuterMoon from "../assets/menu-images/OuterMoon";
import MoonFace from "../assets/menu-images/MoonFace";
import RotationRing from "../assets/menu-images/RotationRing";

import usePathName from "../hooks/usePathName";

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  /** pathName = current page */
  let pathName = usePathName();
  const [rotationClass, setRotationClass] = useState(pathName);
  const [previousClass, setPreviousClass] = useState("home");

  /**
   * only run useEffect once on initial load.
   * initial load -> menu pointer points at the About position.
   *    if site loads from any page other than About
   *    OuterMoon must rotate into position.
   */
  useEffect(() => {
    let pageSelected = pathName + "-selected-from-about";
    setRotationClass(pageSelected);
    setPreviousClass(pathName);
    console.log("Initial load");
    // eslint-disable-next-line
  }, []);

  const selectPage = (page) => {
    let pageSelected = page + "-selected-from-" + previousClass;
    if (page !== previousClass) {
      setRotationClass(pageSelected);
      setPreviousClass(page);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <section className={styles["moon-container"]}>
          <img id={rotationClass} src={texture} alt="moon texture" />
          <OuterMoon rotationClass={rotationClass} pathName={pathName} />
          <MoonFace rotationClass={rotationClass} />
          <RotationRing rotationClass={rotationClass} />
        </section>
        <div className={styles.static}>
          <nav className={`${styles["btn-container"]} `}>
            <div className={styles["rotating-btns"]} id={rotationClass}>
              <NavLink
                id="blogs-and-art"
                to={"/blogs-and-art"}
                className={styles["blogs-and-art-btn"]}
                onClick={(e) => selectPage(e.target.id)}
              >
                Blogs and Art
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
