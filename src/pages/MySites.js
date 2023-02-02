import styles from "../css/Sites.module.css";

import { useState, useEffect } from "react";
import Screenshot from "../components/Screenshot";

import { useCollection } from "../hooks/useCollection";

export default function MySites() {
  const [sites, setSites] = useState(null);
  // const [documentError, setDocumentError] = useState(null);
  const { documents, error } = useCollection("sites");

  useEffect(() => {
    if (documents) {
      setSites(documents);
    }

    // if (error) {
    //   setDocumentError(error);
    // }
  }, [documents, error]);

  return (
    <div className={`site-content ${styles["my-sites"]}`}>
      <div className={styles.top}>
        <h1 className={styles["page-heading"]}>My Sites</h1>
      </div>
      {sites && (
        <section>
          <ul className={styles.list}>
            {sites.map((site) => {
              return (
                <li key={site.title} className={styles.item}>
                  <div className={styles.border}>
                    <div className={styles.left}>
                      <a href={site.link} className={styles.link}>
                        <Screenshot site={site} />
                      </a>
                    </div>
                    <div className={styles.right}>
                      <h3 className={styles.title}>{site.title}</h3>
                      <p className={styles.description}>{site.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
