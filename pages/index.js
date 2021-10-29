import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb with NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header component */}
      <Header />
      {/* banner component */}
      <Banner />
    </div>
  )
}
