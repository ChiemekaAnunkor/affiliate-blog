import Head from 'next/head'
import NavBar from '../components/navbar'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>sensory toys for children with autism</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="we review and compaire latest products so you dont have to" />
      </Head>
      <NavBar/>
      <main>
      <h1>Sensory toys for children with autism</h1>
      <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=anchoraffilia-20&linkCode=ur2&linkId=db217de2922d07bb153e29d43c89ef38&camp=1789&creative=9325&node=165793011">my link</a>
      <iframe className='border'  width= "120px" height="240px" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src={"//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=anchoraffilia-20&marketplace=amazon&amp;region=US&placement=B08XVYZ1Y5&asins=B08XVYZ1Y5&linkId=400c3281c31bffff4e5a9ac2e27917c2&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"}>
    </iframe>
      <div>
        hellow world
      </div>

      

      </main>
    </div>
  )
}

export default IndexPage