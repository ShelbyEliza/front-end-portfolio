import styles from "../css/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={`${styles.tester} ${styles.animation}`}></div>
      <p className={styles.text}>
        He was a rather silent man, though perfectly good-humored. No clumsiness
        of Arren's fretted him; he was companionable; there could be no better
        shipmate, Arren thought. But he would go into his own thoughts and be
        silent for hours on end, and then when he spoke there was a harshness in
        his voice, and he would look right through Arren. This Did not weaken
        the love the boy felt for him, but maybe it lessened liking somewhat; it
        was a little awesome. Perhaps Sparrowhawk felt this, for in that foggy
        night off the shores of Wathort he began to talk to Arren, rather
        haltingly, about himself. "I do not want to go among men again
        tomorrow," he said. "I've been pretending that I am free. . . . That
        nothing's wrong in the world. That I'm not Archmage, not even sorcerer.
        That I'm Hawk of Temere, without responsibilities or privileges, owing
        nothing to anyone...." He stopped and after a while went on, "Try to
        choose carefully, Arren, when the great choices must be made. When I was
        young, I had to choose between the life of being and the life of doing.
        And I leapt at the latter like a trout to a fly. But each deed you do,
        each act, binds you to its consequences, and makes you act again and yet
        again. Then very seldom do you come upon a space, a time like this,
        between act and act, when you may stop and simply be. Or wonder who,
        after all, you are."
      </p>
    </div>
  );
}
