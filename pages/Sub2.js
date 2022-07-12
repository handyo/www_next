import React from 'react';
import HeadMeta from "../component/HeadMeta";

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'

export const getStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

function Sub2(props) {
    const {t} = useTranslation("common");
    return (
        <>
            <HeadMeta title="타이틀서브2" keyword="키워드서브2" description="설명글 서브2" url="www.valofe.com"
                      img_fb="https://file.valofe.com/Valofe_file/web/at/ko/images/landing/sae/fb_1200_630-min.png"/>
            <h1>
                서브페이지2 - pros작성
            </h1>
            <p>{t('proposal')}</p>
        </>
    );
}

export default Sub2;