import Head from "next/head";
import Link from "next/Link";
import styles from '../styles/Header.module.css'

export default function header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Dj Events</Link>
      </div>

      <nav>

        <ul>
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
