import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import ButtonComponent from './ButtonComponent';

import PrismLogo from '../../public/logo/logo.svg';

export default function NavbarComponent() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<>
			<div className="bg-neutral-900">
				<nav className="container mx-auto grid grid-cols-3 gap-4 p-4 text-white">
					<div className="flex justify-start">
						<Image src={PrismLogo} alt="Prism Chat Logo." width={200} />
					</div>

					<div className="flex justify-center">
						<ul className="hidden lg:flex items-center">
							<li className="flex items-center">
								<Link href="/" className="hover:text-gray-500">
									Home
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex justify-end">
						<div className="block lg:hidden">
							<button
								onClick={() => {
									setMobileOpen(!mobileOpen);
								}}
							>
								{!mobileOpen && (
									<FontAwesomeIcon icon={faBars} className="text-white h-7" />
								)}

								{mobileOpen && (
									<FontAwesomeIcon
										icon={faBarsStaggered}
										className="text-white h-7"
									/>
								)}
							</button>
						</div>

						<div className="hidden lg:flex flex-row space-x-2">
							<ButtonComponent
								text="Chat Now!"
								onClick={() => {
									window.open('https://app-demo.prism.chat/', '_blank');
								}}
							/>
							<button>
								<FontAwesomeIcon
									icon={faGithub}
									className="w-10"
									onClick={() => {
										window.open('https://github.com/PrismLabsDev', '_blank');
									}}
								/>
							</button>
						</div>
					</div>
				</nav>
			</div>

			{mobileOpen && (
				<div className="bg-neutral-900/[0.7]">
					<ul className="flex flex-col text-center text-white divide-y divide-solid divide-neutral-500">
						<li className="p-3">
							<Link href="/" className="hover:text-gray-500">
								Home
							</Link>
						</li>
						<li className="p-3 flex flex-row justify-center space-x-2">
							<ButtonComponent
								text="Chat Now!"
								onClick={() => {
									window.open('https://app-demo.prism.chat/', '_blank');
									setMobileOpen(false);
								}}
							/>
							<button>
								<FontAwesomeIcon
									icon={faGithub}
									className="w-10"
									onClick={() => {
										window.open('https://github.com/PrismLabsDev', '_blank');
									}}
								/>
							</button>
						</li>
					</ul>
				</div>
			)}
		</>
	);
}
