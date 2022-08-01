//언어설정
import {Router, useRouter} from "next/router";
import Link from 'next/link'
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

export const getStaticProps = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

//폰트어썸
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleLeft, faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleLeft, faBars, faXmark);

// 모바일헤더
import {useState, useEffect, useRef} from 'react';

function Header() {
    // 언어설정
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

    // 모바일 헤더
    const [isMobileGnb, setIsMobileGnb] = useState(false);
    const [AniGnb, setAniGnb] = useState('');
    const handleMobileGnb = () => {
        if (isMobileGnb) { // 닫혀있을 떄
            setIsMobileGnb(!isMobileGnb);
            setAniGnb('closeGnb');

        } else {
            setIsMobileGnb(!isMobileGnb)
            console.log('이?')

            setAniGnb('openGnb');
        }
    }
    useEffect(() => {
        //if (GnbAni) 어..내일
    })
    // 모바일 헤더 리스트
    const mbNav = useRef(null);
    const [navActive, setNavActive] = useState([false, false, true, false]);
    const handleNavLi = (index) => {
        navActive[index] = !navActive[index];
        //console.log(navActive)
    }


    return (
        <>
            <div className="skip-navi">
                <Link href="#content">
                    <a>본문바로가기</a>
                </Link>
            </div>
            <header id="desktopHeader" className="header clearfix">
                <div id="util" className="wrap-langSelect">
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
                <nav id="gnb">
                    <div className="main-menu">
                        <div className="row-w clearfix">
                            <Link href="/">
                                <a className="logo"> <img src="images/common/logo-valofe-cb-style.png"
                                                          alt="VALOFE"/></a>
                            </Link>
                            <ul className="main-ul">
                                <li><Link href="/"><a>{t('home')}</a></Link></li>
                                <li><Link href="/"><a>{t('company_intro')}</a></Link></li>
                                <li><Link href="/"><a>{t('business_intro')}</a></Link></li>
                                <li><Link href="/"><a>{t('recruit')}</a></Link></li>
                                <li><Link href="/"><a>{t('game_platform')}</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-menu">
                        <div className="wrap-sub">
                            <div className="row-w clearfix">
                                <ul className="sub-ul clearfix">
                                    <li>
                                        <ul className="on">
                                            <li><Link href="/company/intro"><a>{t('company_intro')}</a></Link></li>
                                            <li><Link href="/company/history"><a>{t('History')}</a></Link></li>
                                            <li><Link href="/company/ci"><a>{t('ci')}</a></Link></li>
                                            <li><Link href="/company/news"><a>{t('News')}</a></Link></li>
                                            <li><Link href="/company/customer"><a>{t('customer_support')}</a></Link>
                                            </li>
                                            <li><Link href="/company/proposal"><a>{t('proposal')}</a></Link></li>
                                            <li><Link href="/company/location"><a>{t('location')}</a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="">
                                            <li><Link href="/biz/area"><a>{t('business_area')}</a></Link></li>
                                            <li><Link href="/biz/game"><a>{t('valofe_game')}</a></Link></li>
                                            <li><Link href="/biz/world"><a>{t('global_business')}</a></Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="">
                                            <li><Link href="/career/hr"><a>{t('hr_system')}</a></Link></li>
                                            <li><Link href="/career/intro"><a>{t('job_desc')}</a></Link></li>
                                            <li><Link href="/career/notice"><a>{t('job_vacancy')}</a></Link></li>
                                            <li><Link href="/career/my"><a>{t('my_application')}</a></Link></li>
                                        </ul>
                                    </li>
                                    <li className="no-depth"/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>


            <div id="mobileHeader">
                <div className="row-w clearfix">
                    <h2 id="crtMenu">
                        <Link href="#" id="back">
                            <a><FontAwesomeIcon icon="fa-solid fa-angle-left"/> Home</a>
                        </Link>
                    </h2>
                    <h1 id="valofe">
                        <Link href="/">
                            <a> <img src="images/common/logo-valofe-cb-style.png" alt="VALOFE"/></a>
                        </Link>
                    </h1>
                    <h3 id="btnMobileGnb" onClick={handleMobileGnb}>
                        <FontAwesomeIcon icon="fa-solid fa-bars"/>
                    </h3>
                </div>
            </div>
            {/*{*/}

            <div id="mobileGnb" className={AniGnb}>
                <div className="side-menu">
                    <h1 className="wrap-tit">
                        <Link href="/"><a><span className="logo"/>Company</a></Link>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={handleMobileGnb}/>
                    </h1>
                    <div className="wrap-mb-nav">
                        <ul className="nav-list" ref={mbNav}>
                            <li className="nav-li"><Link href="/"><a>{t('home')}</a></Link>
                            </li>
                            <li onClick={e => handleNavLi(0)}
                                className={navActive[0] ? "nav-li on" : "nav-li"}
                            >
                                <Link href="/">
                                    <a className="has-ul">
                                        {t('company_intro')}
                                        <span className="size">7</span>
                                        <span className="blit-arrow"/>
                                    </a>
                                </Link>
                                <ul className="nav-list2">
                                    <li><Link href="/company/intro"><a>{t('company_intro')}</a></Link></li>
                                    <li><Link href="/company/history"><a>{t('History')}</a></Link></li>
                                    <li><Link href="/company/ci"><a>{t('ci')}</a></Link></li>
                                    <li><Link href="/company/news"><a>{t('News')}</a></Link></li>
                                    <li><Link href="/company/customer"><a>{t('customer_support')}</a></Link>
                                    </li>
                                    <li><Link href="/company/proposal"><a>{t('proposal')}</a></Link></li>
                                    <li><Link href="/company/location"><a>{t('location')}</a></Link></li>
                                </ul>
                            </li>
                            <li onClick={e => handleNavLi(1)}
                                className={navActive[1] ? "nav-li on" : "nav-li"}
                            >
                                <Link href="/">
                                    <a className="has-ul">
                                        {t('business_intro')}
                                        <span className="size">3</span>
                                        <span className="blit-arrow"/>
                                    </a>
                                </Link>
                                <ul className="nav-list2">
                                    <li><Link href="/biz/area"><a>{t('business_area')}</a></Link></li>
                                    <li><Link href="/biz/game"><a>{t('valofe_game')}</a></Link></li>
                                    <li><Link href="/biz/world"><a>{t('global_business')}</a></Link></li>
                                </ul>
                            </li>
                            <li onClick={e => handleNavLi(2)}
                                className={navActive[2] ? "nav-li on" : "nav-li"}>
                                <Link href="/">
                                    <a className="has-ul">
                                        {t('recruit')}
                                        <span className="size">3</span>
                                        <span className="blit-arrow"/>
                                    </a>
                                </Link>
                                <ul className="nav-list2">
                                    <li><Link href="/biz/area"><a>{t('business_area')}</a></Link></li>
                                    <li><Link href="/biz/game"><a>{t('valofe_game')}</a></Link></li>
                                    <li><Link href="/biz/world"><a>{t('global_business')}</a></Link></li>
                                </ul>
                            </li>
                            <li onClick={e => handleNavLi(3)}
                                className={navActive[3] ? "nav-li on" : "nav-li"}>
                                <Link href="/">
                                    <a className="has-ul">
                                        {t('game_platform')}
                                        <span className="size">4</span>
                                        <span className="blit-arrow"/>
                                    </a>
                                </Link>
                                <ul className="nav-list2">
                                    <li><Link href="/career/hr"><a>{t('hr_system')}</a></Link></li>
                                    <li><Link href="/career/intro"><a>{t('job_desc')}</a></Link></li>
                                    <li><Link href="/career/notice"><a>{t('job_vacancy')}</a></Link></li>
                                    <li><Link href="/career/my"><a>{t('my_application')}</a></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="wrap-langSelect">
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
            </div>
            {isMobileGnb ?
                <div className="bg-shadow"></div>
                :
                null
            }


            <div>{now_locale.toUpperCase()}</div>

        </>

    )
}

export default Header;