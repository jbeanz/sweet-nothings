import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Helping people find love, one whisper at a time. by Joe Triolo and Jeainny Kim
          </a>
        </div>
      </div>
      <div className={styles.center}>
        <h2>SWEET NOTHINGS</h2>
        <p>Schedule sweet, authentic messages to your partner's voicemail.
          Never forget a birthday or a wedding anniversary!</p>

        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Generate Sweet Nothings <span>-&gt;</span>
          </h2>
        </a>

      </div>
    </main>
  );
}
