import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import profilePic from '../../public/PrismChatWebApp.png';

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
							<div className="container mx-auto flex justify-evenly items-center p-3">
								<div className="flex justify-start w-full"></div>

								<div className="flex justify-center w-full">
									<button className="text-stone-700 font-bold text-xl">
										Prism Chat
									</button>
								</div>

								<div className="flex justify-end w-full">
									<button
										className="text-white font-bold text-l px-5 py-2 bg-gradient-to-r from-custom-pink to-custom-blue hover:from-custom-pink-dark hover:to-custom-blue-dark active:from-custom-pink-darker active:to-custom-blue-darker text-white hover:text-gray-200 active:text-gray-300 rounded-full"
										onClick={() => {
											window.open('https://app-demo.prism.chat/', '_blank');
										}}
									>
										Chat App
									</button>
								</div>
							</div>
						</header>

						{/* Main */}
						<main className="h-full">
							{/* Hero */}
							<div className="container mx-auto text-white bg-neutral-900 m-16 p-14 rounded-xl flex justify-evenly space-x-28">
								<div className="basis-1/2">
									<div className="floating bg-gradient-to-r from-custom-pink to-custom-blue rounded-tr-full rounded-br-full rounded-bl-full font-bold text-5xl w-fit">
										<p className="py-5 px-20">Prism Chat</p>
									</div>
									<div className="pt-14 text-4xl font-bold leading-normal">
										Communicate{' '}
										<span className="inline text-custom-blue">Freely</span> &{' '}
										<span className="inline text-custom-pink">Securely</span>{' '}
										with a revolutionary messaging platform!
									</div>
									<div>
										<p className="text-gray-500 text-xl">
											Decentralized, Anonymous, e2e Encryption.
										</p>
									</div>
									<button
										className="text-white font-bold text-l mt-14 px-10 py-2 bg-gradient-to-r from-custom-pink to-custom-blue hover:from-custom-pink-dark hover:to-custom-blue-dark active:from-custom-pink-darker active:to-custom-blue-darker text-white hover:text-gray-200 active:text-gray-300 rounded-full"
										onClick={() => {
											window.open('https://app-demo.prism.chat/', '_blank');
										}}
									>
										Chat Now!
									</button>
								</div>
								<div className="basis-1/2 flex items-center">
									<div className="h-min">
										<Image
											src={profilePic}
											alt="Picture of Prism Chat UI Design."
											width={1728}
											height={1204}
										/>
									</div>
								</div>
							</div>

							{/* Features */}
							<div className="container mx-auto text-white m-16 flex justify-evenly space-x-10">
								<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
									<h3 className="pb-2 font-bold text-xl">Encryption e2e</h3>
									<p className="text-gray-400">
										Prism encrypts all outgoing messages before they are even
										sent to the server. All encryption is done in our client and
										only in our client. This means your messages will be secure
										even if your network is not.
									</p>
								</div>
								<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
									<h3 className="pb-2 font-bold text-xl">Decentralized</h3>
									<p className="text-gray-400">
										We have built our system in a way that allows anyone to run
										their own Prism server while maintaining security of all
										messages. This means there is no single point of failure in
										the network. If you do not trust us, run your own server.
									</p>
								</div>
								<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
									<h3 className="pb-2 font-bold text-xl">Anonymous</h3>
									<p className="text-gray-400">
										We understand that it is important not only to keep your
										messages safe, but your identity also. Prism does not
										require any personal information, identifying you only by a
										randomly generated key which can be discarded at any time.
									</p>
								</div>
								<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
									<h3 className="pb-2 font-bold text-xl">Open Source</h3>
									<p className="text-gray-400">
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
