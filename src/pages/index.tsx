import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLock,
	faKey,
	faUserSecret,
	faDiagramProject,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Components
import NavbarComponent from '@/components/NavbarComponent';
import ButtonComponent from '@/components/ButtonComponent';

// Images
import PrismChatWebApp from '../../public/PrismChatWebApp.png';
import PrismLogo from '../../public/logo/logo.svg';

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

			{/* background */}
			<div className="min-h-screen bg-gradient-to-tr from-custom-pink to-custom-blue font-poppins">
				<div className="">
					<div className="min-h-screen bg-black/[.7] flex flex-col justify-between">
						{/* Header */}
						<header className="bg-neutral-900">
							<NavbarComponent />
						</header>

						{/* Main */}
						<main className="container mx-auto p-10 grid grid-cols-1 gap-y-24">
							{/* Hero */}
							<div className="text-white bg-neutral-900 p-10 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
								<div>
									<div className="text-4xl md:text-6xl font-bold leading-normal">
										Communicate{' '}
										<span className="inline bg-gradient-to-t from-custom-blue-dark to-custom-blue-light text-transparent bg-clip-text">
											Freely
										</span>{' '}
										&{' '}
										<span className="inline bg-gradient-to-t from-custom-pink-dark to-custom-pink-light text-transparent bg-clip-text">
											Securely
										</span>{' '}
										with Prism!
									</div>
									<div>
										<p className="text-gray-500 text-l md:text-xl">
											Decentralized, Anonymous, e2e Encryption.
										</p>
									</div>
									<div className="py-10">
										<ButtonComponent
											text="Chat Now!"
											onClick={() => {
												window.open('https://app-demo.prism.chat/', '_blank');
											}}
										/>
									</div>
								</div>
								<div className="flex items-center">
									<div className="h-min">
										<Image
											src={PrismChatWebApp}
											alt="Picture of Prism Chat UI Design."
										/>
									</div>
								</div>
							</div>

							{/* Features */}
							<div className="text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
								<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
									<div className="pb-2 font-bold text-xl flex space-x-2">
										<FontAwesomeIcon icon={faKey} className="w-7 m-0" />
										<h3>Encryption e2e</h3>
									</div>
									<p className="text-gray-400 text-l md:text-xl">
										Prism encrypts all outgoing messages before they are even
										sent to the server. All encryption is done in our client and
										only in our client. This means your messages will be secure
										even if your network is not.
									</p>
								</div>
								<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
									<div className="pb-2 font-bold text-xl flex space-x-2">
										<FontAwesomeIcon icon={faDiagramProject} className="w-7" />
										<h3>Decentralized</h3>
									</div>
									<p className="text-gray-400 text-l md:text-xl">
										We have built our system in a way that allows anyone to run
										their own Prism server while maintaining security of all
										messages. This means there is no single point of failure in
										the network. If you do not trust us, run your own server.
									</p>
								</div>
								<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
									<div className="pb-2 font-bold text-xl flex space-x-2">
										<FontAwesomeIcon icon={faUserSecret} className="w-7" />
										<h3>Anonymous</h3>
									</div>
									<p className="text-gray-400 text-l md:text-xl">
										We understand that it is important not only to keep your
										messages safe, but your identity also. Prism does not
										require any personal information, identifying you only by a
										randomly generated key which can be discarded at any time.
									</p>
								</div>
								<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
									<div className="pb-2 font-bold text-xl flex space-x-2">
										<FontAwesomeIcon icon={faGithub} className="w-7" />
										<h3>Open Source</h3>
									</div>
									<p className="text-gray-400 text-l md:text-xl">
										All of our source code is hosted publicly on GitHub to
										promote open discussion, transparency and innovation. We
										hope others can take advantage of Prism, and find new ways
										to use our work and integrate with it.
									</p>
								</div>
							</div>
						</main>

						{/* Footer */}
						<footer className="bg-neutral-900 justify-end">
							<div className="container mx-auto p-10 text-white text-center">
								© 2022 Prism Chat. All rights reserved.
							</div>
						</footer>
					</div>
				</div>
			</div>
		</>
	);
}
