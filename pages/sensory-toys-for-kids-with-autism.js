import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {event} from "../lib/ga"
import sensoryToys from "../public/img/sensorytoys.jpg"
import logo from "../public/img/logo.jpg"

export default function AutismPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="find the best sensory toys for kidds with autism" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='canonical' href='http://localhost:3000/' />
        
      </Head>

      <main className={styles.main}>
      <h1> The 15 Best Sensory Toys for Exploring Different Textures, Sights, and Sounds for Kids With Autism</h1>

      <div className={"row"}>
      <Image src={logo} ></Image>
      <p>Author:M.A BCBA Clinical Director</p>
      </div>
      <div className={"row"}>
      <div className={"column"}>
        <h2> Toys functions</h2>
        <p>See other other Product reviews </p>
        <button> click me</button>


      </div>

      <div className={"column a-main"}>
      <h2> Choosing the best functional toy</h2>
      <p> The toy world can be overwhelming. There’s a lot to choose from. But sensory toys — toys or items that offer children a way to play using their senses — go back to basics. “Instead of just being entertained by a toy, sensory toys allow a child to really be engaged and have impact on the materials,” explains Jennie Monness, an early childhood educator and co-founder of Union Square Play, a parenting community and play space. “Sensory play provides opportunities for children to learn about the world around them by seeing the impact they can have on their surroundings. It helps young children make early connections, especially when they can truly experience a material versus watch it.”</p>
      <p>Sensory toys are particularly helpful in terms of childhood development. “You can watch a YouTube video on cooking, but you learn much more by actually cooking along with it,” explains Monness. The same goes for sensory play with infants and toddlers. “You can show a toddler pictures of a river but you can also fill a shallow bin with water and stones and have them actually touch, feel, splash and sit in it. The impact of experiencing play, especially play that uses more than one sense, is huge and makes the learning more comprehensive.” </p>
      <p> While any child can enjoy sensory toys, “materials used for sensory play are especially beneficial for children with disabilities because they call for exploring with more than one sense,” says Monness. “For instance, a set of plain wood blocks may not be as beneficial for a child with sensory challenges, however if these blocks had different textures, we'd be able to see which texture this child gravitated to, learning what input from the environment was more optimal for this child.”</p>
      <h2>Different types of sensory toys</h2>
      <p>When it comes to sensory toys and products, there are all different options on the market and sensory toys can be categorized in a variety of ways. (Some of them don’t always look like traditional “toys,” either, as you’ll see from the list below.) Monness suggests grouping sensory toys by the experience they provide as well as who a child is. </p>
      <p>“Sensory materials are incredibly valuable because they allow children to act on urges they have as they are exploring the world,” she explains. “These tendencies in play are formally called schemas.”</p>
      <p>One schema that a child can act on using sensory materials, for example, is “transforming schema,” aka discovering how a material can change property. “This is often why a child will get very messy with sensory materials — they are figuring out the unique properties of something like slime and how it oozes, pours, plops and changes depending on how it changes shape depending on how it's used.”</p>
      <p>Monness notes that some materials and types of sensory toys include:
      <ul>
        <li>Sound-making sensory toys: These allow a child to see the effect they have on the environment ("when I shake this, it makes this noise!" or "When I bang this, it makes this noise, but when I bang that other toy, it doesn't make as loud of a noise").</li>
        <li>Water sensory play: Children see how they create splashes, how things sink in water or float, how they can pour, dump, or splash.</li>
        <li>Baking activities: These use touch, smell and taste, allowing children to compare the differences at each step of the process.</li>
      </ul>
      </p>
      <h2>Staying safe while enjoying sensory toys</h2>
      <p>As far as sensory toys go, there are always precautions to take in terms of safety. The American Academy of Pediatrics (AAP) notes that toys should be large (larger than your child's mouth to prevent choking), sturdy, nontoxic, not too loud and age-appropriate. The group has a full list of guidelines on its site to consider before purchasing a toy.</p>
      <p>Monness notes that seeing where a child is developmentally and monitoring closely is also important. “Children are a lot more competent than we believe them to be,” she says. While safety always comes first, sometimes nervousness, she notes, can indicate, “‘I don’t trust you,’ and then they don’t really learn to trust themselves.” That said, there are instances where you should always intervene for your child’s safety, such as if she starts to throw sand (which can get caught in her eyes) or tries to put stones, marbles or other small toys in her mouth (which are choking hazards). </p>

      <h2>How to choose the right sensory toy for your specific needs</h2>

      <p>When choosing a sensory toy for your child, start by observing your child: What is she constantly trying to get her hands on? What seems irresistible to them? With that in mind (as well as the other above-mentioned considerations), Monness suggests purchasing items that match her interests to make a play station just for her. </p>
      <p>If your child fixates on cleaning and wiping, for example, you might give her a sponge and some bubble bath and let her clean play dishes. Monness suggests creating “yes” experiences out of “no” experiences — which most likely involves sensory play because children often want to get their hands on something.</p>
      <p>Other factors Monness suggests considering when buying sensory toys:
        <ul>
          <li>Material (metal that clanks or sand that slips through fingers, for example).</li>
          <li>What senses the material stimulates.</li>
          <li>What interests your child. (For example, if your child enjoys playing with toy cars, incorporating kinetic sand can help her see how her cars mold and mark the sand.) </li>
        </ul>
      </p>
      <h2>How we picked the best sensory toys for toddlers</h2>
      <p>To choose the sensory toys included in this piece, we consulted with experts in the field and found clinicians with experience with working with childen with autism between the ages on 06months to 15 years of age.</p>


      <img src='../../sensorytoys.jpg' alt=''></img>
      </div>
      <div className={"column"}>
      <h2> Advertisment</h2>
      <p> Comming soon </p>

      </div>


        
      </div>

      <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=anchoraffilia-20&linkCode=ur2&linkId=d4b57bc9effdedd1c43445b729bd836b&camp=1789&creative=9325&index=toys-and-games&keywords=sensory toys for kids with autism">      <Image src={sensoryToys}/>
</a>


      <div className={"column"}>
        
      </div>

      <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=anchoraffilia-20&linkCode=ur2&linkId=d4b57bc9effdedd1c43445b729bd836b&camp=1789&creative=9325&index=toys-and-games&keywords=sensory toys for kids with autism">  <button
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

</a>
      
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
