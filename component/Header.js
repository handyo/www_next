import {Router, useRouter} from "next/router";
import Link from 'next/link'
import {useCallback} from "react"

function Header() {
    const router = useRouter();
    const {locale, locales, defaultLocale} = router;
    const now_locale = locale || defaultLocale || locales[0];
    console.log('locales: ' + locales[1])
    const {pathname} = router;
    const onChangeLocale = useCallback((lang) => {
        router.push(pathname, pathname, {locale: lang});
    }, []);
    return (
        <>
            <div className="skip-navi">
                <Link href="#content">
                    <a>본문바로가기</a>
                </Link>
            </div>
            <p>HEADER {locales[2]}</p>
            <div>{now_locale.toUpperCase()}</div>
            {locales.map((other_locale, i) => {
                return (
                    <div key={i}>
                        {now_locale !== other_locale && (
                            <button type="button"
                                    onClick={() => onChangeLocale(other_locale)}> {other_locale.toUpperCase()}</button>
                        )}
                    </div>
                )
            })}
            <header id="desktopHeader" className="header clearfix"></header>
            <div id="mobileHeader" className="clearfix"></div>
            <div id="mobileGnb"></div>
        </>

    )
}

export default Header;