import Head from "next/head";
import LandingButton from "../components/LandingButton";

export default function Home() {
	return (
		<div>
			<Head>
				<title key="title">tomygonzalez.dev</title>
				<link key="favicon" rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div className='stars'></div>
				<div className='twinkling'></div>
				<div className="landing">
					<LandingButton name="About" />
					<LandingButton name="Projects" />
					<LandingButton name="Blog" />
					<LandingButton name="Contact" />
				</div>
			</main>
		</div>
	);
}
