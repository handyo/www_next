import '../styles/globals.css'
import {seoContextProvider} from "../context/context";
import {prefix} from "../config/config";
import {appWithTranslation} from "next-i18next";

function MyApp({Component, pageProps}) {
    return (
        <seoContextProvider value={{prefix}}>
            <Component {...pageProps} />
        </seoContextProvider>
    )
}

//export default MyApp
export default appWithTranslation(MyApp);
