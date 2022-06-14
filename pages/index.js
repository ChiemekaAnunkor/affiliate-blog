import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {event} from "../lib/ga"
import marketingimage from "../public/img/marketingimage.jpg"
import logo from "../public/img/logo.jpg"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Affliate Marketing company</title>
        <meta name="description" content="we review and compaire latest products so you dont have to" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='canonical' href='http://localhost:3000/' />
        
      </Head>

      <main className={styles.main}>
      <h1>Affiliate Marketing company focused on providing the best products to our customers</h1>
      <Image src={marketingimage}/>
      <div className='row'>
      <Image src={logo}/>
      <p> reviewers Connect</p>

      </div>

      <div className='row'>
      <div className={"column"}>

        <h2> Blogs</h2>
        <p>17 best sensory toys for kids with autism</p>
        
        <button href="https://https://reviewiersconnect.netlify.app/sensory-toys-for-kids-with-autism"> click me</button>


      </div>
        
      <div className='column a-main'>
      <p> We partner with major companies to provide the best expereince for our customers</p>
      <p>We strive to be the most trusted product recommendation service around, and we work with total editorial independence. We won’t post a recommendation unless our writers and editors have deemed something the best through rigorous reporting and testing.</p>
      <p>Our reviews take weeks or months of research and years of experience. In addition to relying on our own expertise, we gather interviews and data from the best sources around, including engineers, scientists, designers, and innumerable subject-matter experts, ranging from barbers to cat café staff (and residents) to cornhole champions. And we pore over customer reviews to find out what matters to real people who already own and use the things were assessing. In a world where overpriced, top-of-the-line models loaded with junk features are often seen as the gold standard, we aim to recommend high-quality things that warrant their price and don’t push extra features you’ll rarely use.</p>
      <p> Our process is often fascinating and fun imagine creating an obstacle course for robot vacuums, say, or setting a room ablaze to test fireproof safes. And we apply our assiduous approach and next-level research skills to more than 1,000 product categories, including washing machines, TVs, artificial Christmas trees, bath towels, nonstick pans, soundbars, storage bins, office chairs, headlamps, sewing machines, mattresses, wine glasses, air purifiers, space heaters, treadmills, iPhone cases, Wi-Fi routers, carry-on suitcases, cloth face masks, and, yes, actual wire cutters. In everything we do, we endeavor to make finding the best stuff—and knowing what stuff isn’t worth buying—quick, easy, and transparent, so you can get on with living your life.</p>

        </div>
        <div className={"column"}>
      <h2> Advertisment</h2>
      <p> Comming soon </p>
      <a href='https://ucompares.com/wp-content/uploads/2020/10/TravelPayouts.jpg'>
      <img src='https://ucompares.com/wp-content/uploads/2020/10/TravelPayouts.jpg' width={200} height={200}/> 
      <br/>
      </a>
      <a href="https://www.travelpayouts.com/?marker=367105">Travel affiliate links</a>

      </div>
  
     
      </div>


      
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
