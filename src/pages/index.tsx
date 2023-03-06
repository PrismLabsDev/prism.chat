import Head from 'next/head';
import Image from 'next/image';

// Components
import NavbarComponent from '@/components/NavbarComponent';
import FooterComponent from '@/components/FooterComponent';
import HeroComponent from '@/components/HeroComponent';
import FeatureComponent from '@/components/FeatureComponent';

// Styles
import styles from '@/styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Prism Chat - Home</title>
				<meta
					name="description"
					content="Prism Chat: E2E, anonymous and decentralized communication."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>
				<header>
					<NavbarComponent />
				</header>

				<main className="my-5 flex flex-col space-y-5">
					<HeroComponent />
					<FeatureComponent />
				</main>

				<footer>
					<FooterComponent />
				</footer>
			</div>
		</>
	);
}
