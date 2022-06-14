import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {event} from "../lib/ga"

export default function AutismPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="we review and compaire latest products so you dont have to" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='canonical' href='http://localhost:3000/' />
        
      </Head>

      <main className={styles.main}>
      
      <button
        onClick={() =>
          event({
            action: "affiliate link",
            params: {
              search_term: "clicked AL",
            },
          })
        }
      >
        Click me
      </button>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
