import {Router, useRouter} from "next/router";
import Link from 'next/link'
import {useCallback, useRef, useState} from "react"
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

function Header() {
    const {t} = useTranslation("common");


    const router = useRouter();
    const {locale, locales, defaultLocale} = router;
    const now_locale = locale || defaultLocale || locales[0];
    const {pathname} = router;
    //console.log(now_locale);


    const handleSelect = (e) => {
        //console.log(e.target.value)
        router.push(pathname, pathname, {locale: e.target.value});
        e.target.value = locale;
    };
    // const onChangeLocale = useCallback((Lang) => {
    //     router.push(pathname, pathname, {locale: Lang});
    // }, []);

    return (
        <>
            <div className="skip-navi">
                <Link href="#content">
                    <a>본문바로가기</a>
                </Link>
            </div>
            <div>{now_locale.toUpperCase()}</div>
            {/* {locales.map((other_locale, i) => {
                return (
                    <div key={i}>
                        {now_locale !== other_locale && (
                            <button type="button"
                                    onClick={() => onChangeLocale(other_locale)}> {other_locale.toUpperCase()}</button>
                        )}
                    </div>
                )
            })}*/}
            <header id="desktopHeader" className="header clearfix">
                <div id="util">
                    <div className="row-w">
                        <label htmlFor="langs">
                            <select name="langs" id="langs" onChange={handleSelect} value={now_locale}>
                                <option value="ko">{t('ko')}</option>
                                <option value="en">{t('en')}</option>
                                <option value="jp">{t('jp')}</option>
                                <option value="tw">{t('tw')}</option>
                                <option value="cn">{t('cn')}</option>
                                <option value="vn">{t('vn')}</option>
                            </select>
                        </label>
                    </div>
                </div>
            </header>
            <div id="mobileHeader" className="clearfix"></div>
            <div id="mobileGnb"></div>
        </>

    )
}

export default Header;