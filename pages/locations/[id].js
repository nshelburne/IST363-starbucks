import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Section from '../../components/section';
import Card from '../../components/card';
import Row from '../../components/row';
import Col from '../../components/col';
import Heading from '../../components/heading';
import {getLocationItems, getLocationItemBySlug} from '../../lib/api';


export async function getStaticPaths() {
    const allSlugs = await getLocationItems();
    const paths = allSlugs.edges.map(edge => {
        const {slug} = edge.node;
        return {
            params: { 
                id: slug
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const locationItemData = await getLocationItemBySlug (params.id)
    return {
        props: { 
            locationItemData
        }
    }
}

export default function LocationItem({locationItemData}) {
    const {title, featuredImage, content, menuTypes, store} = locationItemData;
    const {sourceUrl, mediaDetails, altText} = featuredImage.node;
    const {width,height} = mediaDetails;

    return (
        <Layout>
            <Head>
                <title>{siteTitle} - {title} </title>
            </Head>
            <Row>
                <Col>
                    <Link href='/locations'>
                        <a>See our other locations</a>
                    </Link>
                </Col>
            </Row>
            <Image 
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <h1>{title}</h1>
            <p> {store.address}</p>
            <div dangerouslySetInnerHTML={{__html: content}}/>
            <Heading type="h1">Menu</Heading>
            {menuTypes.edges.map(edge=> {
                const {name, items} = edge.node;
                return <Section title={name}>
                    <Row justifyContentCenter>
                    {items.edges.map((edge, index)=> {
                        const {node} = edge;
                        return <Col sm={6} md={4} lg={3} key={index}>
                            <Card node={node} returnPage="menu"/>  
                        </Col>
                    })}
                    </Row>
                </Section>
            })}
            
        </Layout>
    )
}

