import Header from './Header';

export default function MainLayout({children}) {
    return (
        <div id="wrapper">
            <Header/>
            <div id="contents">{children}</div>
        </div>
    )

}