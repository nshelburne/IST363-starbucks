import Head from 'next/head'
import Image from 'next/image'

import Button from '../components/button'
import Heading from '../components/heading'
import Row from '../components/row'
import Col from '../components/col'
import Section from '../components/section'
import Layout, { siteTitle } from '../components/layout'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <Image
          src="/images/making-coffee.jpg" 
          width={857}
          height={450}
          alt='Making coffee'
        />
        <Heading type="h1">Menu</Heading>
        <p>High quality fairtrade freshly roasted coffee.</p>
        <Button label="View Menu" href="/menu" type="primary"/>
      </Section>
      <Section>
        <Image
          src="/images/location.jpg" 
          width={783}
          height={450}
          alt='a Starbucks location'
        />
        <Heading type="h1">Locations</Heading>
        <p>Find a Starbucks near your and try our coffee and food items today.</p>
        <Button label="View Locations" href="/locations" type="primary"/>
      </Section>
      <Section>
        <Heading type="h1">Other information</Heading>
        <Section>
          <Button label="View People" href="/people" type="primary"/>
        </Section>
          <Row>
            <Col>
            <Button
              label ='View portfolio' 
              href = '/portfolio'
              type = "secondary"
              />
            </Col>
            <Col>
              <Button
                label ='About me' 
                href = '/about'
                type = "secondary"
                />
            </Col>
          </Row>
        </Section>
    </Layout>
  )
}