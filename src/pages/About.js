// css:
import styles from "../pages-css/About.module.css";
// assets:
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiInkscape,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

export default function About() {
  return (
    <div className="page-content">
      <div className={styles["about-container"]}>
        <section className={styles["title-section"]}>
          <div className={styles["col-1"]}>
            <figure className={styles["photo-container"]}>
              {/* <img
                    className={styles.photo}
                    // src={}
                    alt="A place for a photo of the author of the site."
                  /> */}
              <figcaption>Photo</figcaption>
            </figure>
          </div>
          <div className={styles["col-2"]}>
            <h1 className={styles["page-heading"]}>Shelby Shipley</h1>
            <div className={styles["subtitle"]}>
              <p className={styles["contact-info"]}>
                <b>email:</b> blahblahblah@email.com
              </p>
              <p className={styles["contact-info"]}>
                <b>gitHub:</b> https://github.com/ShelbyEliza
              </p>
            </div>
          </div>
        </section>

        <section className={styles["edu-skills-section"]}>
          <div className={styles["col-1"]}>
            <h2 className={styles["section-heading"]}>Education and Skills</h2>
          </div>
          <div className={styles["col-2"]}>
            <div className={styles["col-2-content"]}>
              <h3>Formal Education</h3>
              <p>
                I graduated from the University of Arkansas in 2015 with a
                Bachelor of Science in Geology and Minor in French Language.
              </p>
              <h3>"Self Taught"</h3>
              <p>
                To say I am a self-taught web developer is an unfair assessment.
                Without the seemingly infinite collections of computer science
                knowledge available at the click of a mouse and the incredible
                educators strewn about the internet I would know close to
                nothing. I wouldn&#39;t be able to construct useful tools like
                my recipe catalog,{" "}
                <a href="https://larder-to-table.web.app/">Larder to Table</a>,
                or my reading blog,{" "}
                <a href="https://under-the-shelf.web.app/">Under the Shelf</a>.
                I wouldn&#39;t be able to see the joy on my nephews&#39; and
                nieces&#39; faces while they play the{" "}
                <a href="https://snake-game-27ff9.web.app/">Snake Game</a> I
                built.
              </p>
              <p>
                In the past two years of study I have learned that the
                continuous pursuit of knowledge is the most critical aspect of
                developing on the web; followed closely by giving that knowledge
                back to your community.
              </p>
              <section className={styles["skills-section"]}>
                {document && (
                  <div>
                    <ul className={styles["skills-list"]}>
                      <li className={styles.skill}>
                        <figure alt="JavaScript logo">
                          <SiJavascript
                            className={styles.fig}
                            aria-label="JavaScript logo"
                          />
                          <figcaption>
                            <h4>JavaScript</h4>
                          </figcaption>
                        </figure>
                      </li>
                      <li className={styles.skill}>
                        <figure>
                          <SiReact
                            className={styles.fig}
                            aria-label="React logo"
                          />
                          <figcaption>
                            <h4>React</h4>
                          </figcaption>
                        </figure>
                      </li>
                      <li className={styles.skill}>
                        <figure>
                          <SiCss3
                            className={styles.fig}
                            aria-label="CSS logo"
                          />
                          <figcaption>
                            <h4>CSS</h4>
                          </figcaption>
                        </figure>
                      </li>
                      <li className={styles.skill}>
                        <figure>
                          <SiHtml5
                            className={styles.fig}
                            aria-label="HTML logo"
                          />
                          <figcaption>
                            <h4>HTML</h4>
                          </figcaption>
                        </figure>
                      </li>
                      <li className={styles.skill}>
                        <figure>
                          <SiFirebase
                            className={styles.fig}
                            aria-label="Firebase logo"
                          />
                          <figcaption>
                            <h4>Firebase</h4>
                          </figcaption>
                        </figure>
                      </li>
                      <li className={styles.skill}>
                        <figure>
                          <SiInkscape
                            className={styles.fig}
                            aria-label="Inkscape logo"
                          />
                          <figcaption>
                            <h4>Vector Art</h4>
                          </figcaption>
                        </figure>
                      </li>
                      <li className={styles.skill}>
                        <figure>
                          <SiNodedotjs
                            className={styles.fig}
                            aria-label="Node.js logo"
                          />
                          <figcaption>
                            <h4>Node.js</h4>
                          </figcaption>
                        </figure>
                      </li>
                      <li className={styles.skill}>
                        <figure>
                          <SiGithub
                            className={styles.fig}
                            aria-label="GitHub logo"
                          />
                          <figcaption>
                            <h4>gitHub</h4>
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                )}
              </section>
            </div>
          </div>
        </section>

        <section className={styles["passions-section"]}>
          <div className={`${styles["col-1"]} ${styles["bottom-left"]}`}>
            <h2 className={styles["section-heading"]}>Passions</h2>
          </div>
          <div className={`${styles["col-2"]} ${styles["bottom-right"]}`}>
            <div className={styles["col-2-content"]}>
              <ul>
                <li>
                  <h3>monotonous tinkering.</h3>
                  <p className={styles.indent}>
                    It may not be for everyone, but I love tedious tasks like
                    <br />
                    <b> constructing jigsaw puzzles</b>,
                    <b> adjusting vector nodes</b>, and
                    <b> tweaking website styles</b>.
                  </p>
                  <p>
                    Trekking through the CSS weeds never bogs me down because
                    subtle refinements to color and spacing lead to vibrant and
                    smooth web layouts, and that is something I treasure.{" "}
                  </p>
                </li>
                <li>
                  <h3>paying attention to the details.</h3>
                  <p className={styles.indent}>
                    Activities, which require a <b>keen eye</b> and a{" "}
                    <b>patient nature</b>, take up most of my time.
                  </p>
                  <p>
                    From ardently tasting and refining the flavors of my
                    homemade beans and soups, to discovering fresh spring buds
                    during a hike, or scrutinizing the impressive (or not so
                    impressive..) UI decisions found across the web,{" "}
                    <b>I find joy in the details.</b>{" "}
                  </p>
                </li>
                <li>
                  <h3>spending time with loved ones.</h3>
                  <p className={styles.indent}>
                    I am pleased to brag that I am a beloved auntie to{" "}
                    <b>three wonderful munchkins</b>. Whether it&#39;s
                    imaginative play or tickle-monster-tag time, I love
                    fostering secure and positive relationships with my
                    niblings.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
