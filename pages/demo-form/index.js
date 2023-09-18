import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Test() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          test <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <button class="btn btn-primary">test btn</button>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
