// css:
import styles from "../css/About.module.css";
// import avatar from "../assets/creepy-cat-opt.svg";
import burst from "../assets/burst-opt.svg";

import { useCollection } from "../hooks/useCollection";
import { useState, useEffect } from "react";

export default function About() {
  const [skills, setSkills] = useState(null);
  const [formalEdu, setFormalEdu] = useState(null);
  const [selfTaught, setSelfTaught] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [documentError, setDocumentError] = useState(false);
  const { documents, error } = useCollection("about");

  useEffect(() => {
    setIsPending(true);

    if (documents) {
      setIsPending(false);
      setFormalEdu(documents[0].formalEducation);
      setSelfTaught(documents[0].selfTaught);

      setSkills(documents[1].mySkills);
      // console.log(documents);
    }

    if (error) {
      setDocumentError(error);
      setIsPending(false);
    }
  }, [documents, error]);
  return (
    <div className={styles["about-container"]}>
      {documentError && <p className="error"> {documentError}</p>}
      {documents && !isPending && (
        <>
          <div className={styles.top}>
            <section className={styles["title-section"]}>
              <h1 className={styles["page-heading"]}>Shelby Shipley</h1>
              <figure>
                <img
                  className={styles.photo}
                  src={burst}
                  alt="where the site's author's professional pic will go"
                />
                <figcaption>Photo</figcaption>
              </figure>
            </section>
            <div className={styles["edu-skill-section"]}>
              <section className={styles["edu-section"]}>
                <h2 className={styles["section-heading"]}>Education</h2>
                <div className={styles.content}>
                  <h3>Formal Education</h3>
                  <p className={styles.education}>{formalEdu}</p>
                  <h3>"Self Taught"</h3>
                  <p className={styles.education}>{selfTaught}</p>
                </div>
              </section>
              <section className={styles["skills-section"]}>
                <div>
                  <h2 className={styles["section-heading"]}>Skills</h2>
                  {document && (
                    <ul
                      className={`${styles["skills-list"]} ${styles.content}`}
                    >
                      {skills.map((skill) => {
                        return (
                          <li key={skill} className={styles.skill}>
                            <span>{skill}</span>
                            {/** TODO: add an aside element with a little detail about experience ? */}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </section>
            </div>
          </div>
          <section className={styles["passions-section"]}>
            <h2 className={styles["section-heading"]}>Passions</h2>
            <p className={`${styles.passions} ${styles.content}`}>
              He was a rather silent man, though perfectly good-humored. No
              clumsiness of Arren's fretted him; he was companionable; there
              could be no better shipmate, Arren thought. But he would go into
              his own thoughts and be silent for hours on end, and then when he
              spoke there was a harshness in his voice, and he would look right
              through Arren. This Did not weaken the love the boy felt for him,
              but maybe it lessened liking somewhat; it was a little awesome.
              Perhaps Sparrowhawk felt this, for in that foggy night off the
              shores of Wathort he began to talk to Arren, rather haltingly,
              about himself. "I do not want to go among men again tomorrow," he
              said. "I've been pretending that I am free. . . . That nothing's
              wrong in the world. That I'm not Archmage, not even sorcerer. That
              I'm Hawk of Temere, without responsibilities or privileges, owing
              nothing to anyone...." He stopped and after a while went on, "Try
              to choose carefully, Arren, when the great choices must be made.
              When I was young, I had to choose between the life of being and
              the life of doing. And I leapt at the latter like a trout to a
              fly. But each deed you do, each act, binds you to its
              consequences, and makes you act again and yet again. Then very
              seldom do you come upon a space, a time like this, between act and
              act, when you may stop and simply be. Or wonder who, after all,
              you are."
            </p>
          </section>
        </>
      )}
    </div>
  );
}
