import React from 'react';
import HeadMeta from "../component/HeadMeta";

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next'


export async function getStaticProps({locale}) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            //locale
        },
    }
}


function Sub1(props) {
    const {t} = useTranslation();

    return (
        <>
            <HeadMeta/>
            <h1>
                서브페이지1 - props를 쓰지 않았습니다.
            </h1>

            <div>
                <h1>{t('h1')}</h1>
                <ul>
                    <li>
                        {t('common:currentUrl')} : http://localhost:3000
                    </li>
                    <li>{t('common:description')}:</li>
                    <li>{t('common:currentUrl')}:</li>
                </ul>
            </div>
        </>
    );
}

export default Sub1;