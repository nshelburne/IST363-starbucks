import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Container from './container'
import Header from './header'
import Footer from './footer'

import styles from './layout.module.css'

export const siteTitle = 'Starbucks'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/starbucks-logo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
        <meta
          name="description"
          content="This is a simple rebuild of a Starbucks website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Container>
        <main>{children}</main> 
      </Container>
      <Footer />
    </>
  )
}