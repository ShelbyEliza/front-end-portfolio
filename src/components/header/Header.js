// css:
import styles from "../../css/Header.module.css";
import { NavLink, useLocation } from "react-router-dom";

import InnerMoon from "../../assets/menu-images/InnerMoon";
import OuterMoon from "../../assets/menu-images/OuterMoon";
import { useState } from "react";

export default function Header() {
  const [rotationClass, setRotationClass] = useState("");
  const [previousClass, setPreviousClass] = useState("blogs-and-art");
  const location = useLocation();
  // const reg = /[a-z]/;
  // const locationID = location.pathname;
  // const found = locationID.match(reg);
  // console.log(found);

  const selectPage = (page) => {
    if (page === "home") {
      console.log(true);
      setRotationClass("");
      setPreviousClass("blogs-and-art");
    } else if (page !== previousClass) {
      let pageSelected = page + "-selected-from-" + previousClass;
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
        </div>
        <nav
          className={`${styles["btn-container"]} ${styles[rotationClass]} ${
            styles[location.pathname]
          }`}
        >
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
