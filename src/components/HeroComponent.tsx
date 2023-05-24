import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ButtonComponent from './ButtonComponent';
import PrismChatWebApp from '../../public/PrismChatWebApp.png';

export default function HeroComponent() {
	return (
		<>
			<div className="lg:container mx-auto flex justify-center">
				<div className="text-white bg-neutral-900 p-10 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="flex flex-col justify-center">
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
						<div className="py-12">
							<ButtonComponent
								text="Chat Now!"
								onClick={() => {
									window.open('https://app.prism.chat/', '_blank');
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
			</div>
		</>
	);
}
