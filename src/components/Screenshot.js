import styles from "../css/Sites.module.css";

// eslint-disable-next-line
import larderToTable from "../assets/sites-screenshots/larder-to-table.png";
// eslint-disable-next-line
import underTheShelf from "../assets/sites-screenshots/under-the-shelf.png";
// eslint-disable-next-line
import piddleTogether from "../assets/sites-screenshots/piddle-together.png";

export default function Screenshot(site) {
  // console.log(piddleTogether);
  return (
    <div className={styles["shot-container"]}>
      <img
        className={styles.shot}
        src={site.site.screenshotAddress}
        alt={`${site.site.title}'s screenshot`}
      />
    </div>
  );
}
