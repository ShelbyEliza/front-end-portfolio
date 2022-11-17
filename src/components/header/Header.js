import MoonMenu from "./MoonMenu.js";
import styles from "../../css/Header.module.css";

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
        <MoonMenu />
      </nav>
    </header>
  );
}
