import "../styles/main.scss";
import Background from "../components/Background";

function MyApp({ Component, pageProps }) {
	return (
        <>
            <Background />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
