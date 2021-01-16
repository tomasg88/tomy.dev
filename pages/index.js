import Head from "next/head";
import Background from "../components/Background";
import LandingButton from "../components/LandingButton";

export default function Home() {
	return (
		<div>
			<Head>
				<title key="title">tomygonzalez.dev</title>
				<link key="favicon" rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Background />
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
