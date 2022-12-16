import styles from "../css/Sites.module.css";

import { useCollection } from "../hooks/useCollection";

import { useState, useEffect } from "react";

export default function MySites() {
  const [sites, setSites] = useState(null);
  const [documentError, setDocumentError] = useState(null);
  const { documents, error } = useCollection("sites");

  useEffect(() => {
    if (documents) {
      setSites(documents);
    }

    if (error) {
      setDocumentError(error);
    }
  }, [documents, error]);

  return (
    <div className="site-content">
      <h1>My Sites</h1>
      {sites && (
        <section className={styles["sites-list"]}>
          <ul>
            {sites.map((site) => {
              return (
                <li key={site.title}>
                  <a href={site.link}>{site.title}</a>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
