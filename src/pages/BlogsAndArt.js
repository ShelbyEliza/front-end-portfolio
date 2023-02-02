// css:
import styles from "../css/BlogsAndArt.module.css";

// assets:
import lady from "../assets/art/lady.svg";

import { useCollection } from "../hooks/useCollection";
import { useState, useEffect } from "react";

export default function BlogsAndArt() {
  const [blogs, setBlogs] = useState(null);
  const [documentError, setDocumentError] = useState(null);
  const { documents, error } = useCollection("blogs");

  useEffect(() => {
    if (documents) {
      setBlogs(documents);
    }

    if (error) {
      setDocumentError(error);
    }
  }, [documents, error]);

  return (
    <div className="site-content">
      {!documentError ? (
        <div className={styles.page}>
          {blogs && (
            <>
              <section className={styles["blogs-section"]}>
                <div className={styles["top"]}>
                  <h1 className={styles["page-heading"]}>Checkout</h1>
                  <h3>my programming notes</h3>
                </div>
                <ul className={styles["blogs-list"]}>
                  {blogs.map((blog) => {
                    return (
                      <li key={blog.id}>
                        <a
                          href={blog.link}
                          title={blog.description}
                          className={styles.blog}
                        >
                          {blog.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
              <section className={styles["art-section"]}>
                <div className={styles["bottom"]}>
                  <h1 className={styles["section-heading"]}>Checkout</h1>
                  <h3>my vector art</h3>
                </div>
                <div className={styles["art-container"]}>
                  <figure className={styles["art-frame"]}>
                    <img
                      className={styles.art}
                      src={lady}
                      alt="a lady's face"
                    />
                  </figure>

                  <figure className={styles["art-frame"]}>
                    <img className={styles.art} src="" alt="" />
                  </figure>

                  <figure className={styles["art-frame"]}>
                    <img className={styles.art} src="" alt="" />
                  </figure>

                  <figure className={styles["art-frame"]}>
                    <img className={styles.art} src="" alt="" />
                  </figure>
                </div>
              </section>
            </>
          )}
        </div>
      ) : (
        <div>{documentError}</div>
      )}
    </div>
  );
}
