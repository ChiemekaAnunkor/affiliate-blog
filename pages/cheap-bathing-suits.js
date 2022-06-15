import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {event} from "../lib/ga"
import cheapbathingsuits from "../public/img/cheapwomensbathingsuits.jpg"
import logo from "../public/img/logo.jpg"


export default function CheapBathingSuits() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Affliate Marketing company</title>
        <meta name="description" content="we review and compaire latest products so you dont have to" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='canonical' href='https://reviewiersconnect.netlify.app/' />
        
      </Head>

      <main className={styles.main}>
      <h1>7 Cheap Swim Suits That Look and Feel Luxurious for Summer 2022</h1>
      <div className=''>
      


      <p className="mt-1 ..."> june 12, 2022</p>

      </div>


      <a href="https://www.amazon.com/s?k=cheap+bathing+suits+for+women&i=fashion&adFormat=grid&adId=searchbar&adMode=search&adType=smart&creativeASIN=searchbar&imprToken=97ffb8f2bad1e094ddf8b776c6a498d0&impressionTimestamp=1655270268294&linkCode=w42&ref-refURL=https%3A%2F%2Faffiliate-program.amazon.com%2Fhome%2Fads%2Fadcode%2Fsearch&sig=undefined&sigts=undefined&slotNum=29&tag=anchoraffilia-20&ref=sm_n_se_dkp_ZZ_sea">
      <Image src={cheapbathingsuits}/>

      </a>
      <div className='row'>
        <button className='button'>Shop now!</button>
      </div>

      <div className='row'>
      <div className={"column"}>

        <h2> Featured</h2>
        <p></p>
        <a href='https://www.amazon.com/dp/B073WMYP6M/ref=as_sl_pc_tf_til?tag=anchoraffilia-20&linkCode=w00&linkId=b7940282d711e99e9827f277896e5041&creativeASIN=B09X2GCSDD&th=1'>
      <br/>
      <img className="adimage" src='https://m.media-amazon.com/images/I/91tNQzXaaVL._AC_SL1500_.jpg' alt='towls' title='superquick dry towels' loading='lazy'/>
      </a>

      </div>
        
      <div className='column a-main'>
      <p className='p' > Looking to refresh your bikini rotation without sacrificing your entire paycheck? We have been there. Packing for a one-week vacation can really add up, especially if you are wanting to swap out last seasons picks for fresh styles. After all, the budget also has to cover airfare, lots of sunscreen, a couple pairs of sunnies, and a snap-worthy beach towel — we aren't looking to pay an arm and a leg for a single swimsuit.</p>
      <p>discovering a good quality bathing suit that is worth putting down some cash for is easier said than done, though. On top of looking for the perfect fit like swimsuits specifically for small busts or the perfect plus-size swimsuits, there's no shortage of cute summer 2022 trends that make us want to pull out our credit cards. Puff sleeves and high-waisted bottoms continue to be a feminine favorite, Euphoria-inspired metallic shades will help you live your best Maddie Perez life, and cropped rash guards are coveted by athletes and influencers alike, not to mention the major 70s resurgence we are seeing in sparkly stripes and crochet bikini tops.</p>
      <p>Maybe you are a college student in search of affordable bathing suits, or perhaps you are just wondering if cheap swimsuits that don not look cheap truly do exist. Spoiler: They do.That is why we put in the work to find some purchase-worthy options.</p>
      <p>all of these styles are under $100 and editor-approved, so if you are looking for affordable bikini brands and sets that will guarantee Instagrams so good you will give your post-vacation self FOMO, look no further. Keep scrolling — floral halter tops, modest one-pieces, and plenty of stylish options in an inclusive range of sizes await below.</p>
        </div>
        <div className={"column"}>
      <h2> Advertisment</h2>
      <a href='https://www.amazon.com/dp/B09CD89BDQ/ref=as_sl_pc_tf_til?tag=anchoraffilia-20&linkCode=w00&linkId=8084eb412dfcdfcf7aaee2beff6c00c0&creativeASIN=B09CD89BDQ'>
      <br/>
      <img className="adimage" src='https://m.media-amazon.com/images/I/81sbJeQsMqS._AC_SL1500_.jpg' alt='towls' title='superquick dry towels' loading='lazy'/>
      </a>




      


      </div>
  
     
      </div>


      
      {/* <button
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
      </button> */}

      </main>

      <footer className={styles.footer}>
        <a
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
