import Head from 'next/head'
import { Navbar, About, Header, Project, Skills, Education, Contact, Footer } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sahib Singh</title>

        {/* Primary Meta Tags */}
        <title>Yeabtsega Behailu</title>
        <meta name="title" content="Yeabtsega Behailu" />
        <meta name="author" content="Yeabtsega Behailu" />
        <meta name="description" content="Web Developer" />
        <meta name="keywords"
          content="Yeabtsega Behailu" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yeabtsega Behailu" />
        <meta property="og:description" content="Web Developer " />
        <meta property="og:image" content="./website.png" />
          
        <meta name="google-site-verification" content="mzoNw9Qn19gAfDXgZGNJIw4aOhU46Gw2kLTcZPgfH1s" />  
      </Head>

      <Navbar />
      <Header />
      <About />
      <Project />
      <Skills />
      <Education />
      <Contact />
      <Footer />

    </>
  )
}
