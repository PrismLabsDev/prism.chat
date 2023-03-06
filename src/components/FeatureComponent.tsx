import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLock,
	faKey,
	faUserSecret,
	faDiagramProject,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import ButtonComponent from './ButtonComponent';
import PrismChatWebApp from '../../public/PrismChatWebApp.png';

export default function FeatureComponent() {
	return (
		<>
			<div className="lg:container mx-auto flex justify-center">
				<div className="text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
						<div className="pb-2 font-bold text-xl flex space-x-2">
							<FontAwesomeIcon icon={faKey} className="w-7 m-0" />
							<h3>Encryption e2e</h3>
						</div>
						<p className="text-gray-400 text-l md:text-xl">
							Prism encrypts all outgoing messages before they are even sent to
							the server. All encryption is done in our client and only in our
							client. This means your messages will be secure even if your
							network is not.
						</p>
					</div>
					<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
						<div className="pb-2 font-bold text-xl flex space-x-2">
							<FontAwesomeIcon icon={faDiagramProject} className="w-7" />
							<h3>Decentralized</h3>
						</div>
						<p className="text-gray-400 text-l md:text-xl">
							We have built our system in a way that allows anyone to run their
							own Prism server while maintaining security of all messages. This
							means there is no single point of failure in the network. If you
							do not trust us, run your own server.
						</p>
					</div>
					<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
						<div className="pb-2 font-bold text-xl flex space-x-2">
							<FontAwesomeIcon icon={faUserSecret} className="w-7" />
							<h3>Anonymous</h3>
						</div>
						<p className="text-gray-400 text-l md:text-xl">
							We understand that it is important not only to keep your messages
							safe, but your identity also. Prism does not require any personal
							information, identifying you only by a randomly generated key
							which can be discarded at any time.
						</p>
					</div>
					<div className="bg-neutral-900/[0.6] w-full py-5 px-10 rounded-2xl">
						<div className="pb-2 font-bold text-xl flex space-x-2">
							<FontAwesomeIcon icon={faGithub} className="w-7" />
							<h3>Open Source</h3>
						</div>
						<p className="text-gray-400 text-l md:text-xl">
							All of our source code is hosted publicly on GitHub to promote
							open discussion, transparency and innovation. We hope others can
							take advantage of Prism, and find new ways to use our work and
							integrate with it.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
