import Heading from '../../components/heading';
import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head'
import Row from '../../components/row';
import Col from '../../components/col'
import Card from '../../components/card'
import {getLocationItems} from '../../lib/api';

export async function getStaticProps() {
    const locationsData = await getLocationItems();
    return {
        props:{ locationsData },
    }
}

export default function Locations ({locationsData}) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} - Locations</title>
            </Head>
            <Heading type='h1'>Locations</Heading>
            <p>Check out locations across the country.</p>
            <Row>
                {locationsData.edges.map((edge, index) => {
                const {node} = edge;
                
                    return (
                        <Col sm={6} md={4} lg={3} key={index}>
                            <Card node={node} returnPage="locations"/>  
                        </Col>
                    )
                })}
            </Row>
        </Layout>
    )
}