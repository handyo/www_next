import '../styles/globals.css'
import {seoContextProvider} from "../context/context";
import {prefix} from "../config/config";
import {appWithTranslation} from "next-i18next";
import MainLayout from "../component/MainLayout";

function MyApp({Component, pageProps}) {
    return (
        // <seoContextProvider value={{prefix}}>
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
        // </seoContextProvider>
    )
}

//export default MyApp
export default appWithTranslation(MyApp);
