// css:
import styles from "../pages-css/Sites.module.css";

// eslint-disable-next-line
import larderToTable from "../assets/sites-screenshots/larder-to-table.png";
// eslint-disable-next-line
import underTheShelf from "../assets/sites-screenshots/under-the-shelf.png";
// eslint-disable-next-line
import piddleTogether from "../assets/sites-screenshots/piddle-together.png";
// eslint-disable-next-line
import financeTracker from "../assets/sites-screenshots/finance-tracker.png";
// eslint-disable-next-line
import snakeGame from "../assets/sites-screenshots/snake-game.png";
// eslint-disable-next-line
import magicCardGame from "../assets/sites-screenshots/magic-card-game.png";

export default function Screenshot(site) {
  // console.log();
  return (
    <img
      className={styles.shot}
      src={site.site.screenshotAddress}
      alt={`${site.site.title}'s screenshot`}
    />
  );
}
