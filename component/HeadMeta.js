import React from 'react';
import Head from 'next/head'

function HeadMeta({title, keyword, description, url, img_fb}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="keyword" content={keyword}/>
                <meta name="description" content={description}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={url}/>
                <meta property="og:title" content={title}/>
                <meta property="og:image" content={img_fb}/>
                <meta property="og:description" content={description}/>
                <meta property="og:site_name" content={title}/>
                <meta property="og:locale" content="en_US"/>

                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
            </Head>
        </>
    );
}

HeadMeta.defaultProps = {
    title: '타이틀 디폴트',
    keyword: '키워드  디폴트',
    description: '설명글 디폴트',
    url: 'www.valofe.com',
    img_fb: 'https://file.valofe.com/Valofe_file/web/at/ko/images/landing/merlin/fb-1200x630-min.jpg',
}

export default HeadMeta;