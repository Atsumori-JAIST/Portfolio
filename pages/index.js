import Head from 'next/head'
import Header from '../components/header'
import About from '../components/about'
import Skills from '../components/skills'
import Value from '../components/value'
import Future from '../components/future'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>

      <Head>
        <title>Introduction Page</title>
        <link rel="icon" href="/images/logo_white.png" />
      </Head>

      <header>
        <Header></Header>
      </header>
      <main>
        <About></About>
        <Skills></Skills>
        <Value></Value>
        <Future></Future>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
