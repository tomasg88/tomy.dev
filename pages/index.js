import Head from "next/head";
import styles from '../styles/pages/landing.module.scss'

export default function Home() {
	return (
		<div>
			<Head>
				<title key="title">tomygonzalez.dev</title>
				<link key="favicon" rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.container + ' flex flex-jc-c flex-ai-c'}>
				<h1>tomy.dev</h1>
			</main>
		</div>
	);
}
