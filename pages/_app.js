import "../styles/main.scss";
import Background from "../components/Background";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }) {
	return (
        <>
            <Background />
            <Menu />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
