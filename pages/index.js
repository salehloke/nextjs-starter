import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {/* DEMO FORM  */}
        <div className={styles.grid}>
          <a href="/demo-form" className={styles.card}>
            <h3>Demo Form &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
        {/* end of DEMO FORM */}
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
