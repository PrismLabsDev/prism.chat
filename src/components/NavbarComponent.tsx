import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

import ButtonComponent from './ButtonComponent';

import PrismLogo from '../../public/logo/logo.svg';

export default function NavbarComponent() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<>
			<nav className="grid grid-cols-3 gap-4 p-4 text-white">
				<div className="flex justify-start md:w-48">
					<Image src={PrismLogo} alt="Prism Chat Logo." width={200} />
				</div>
				<div className="flex justify-center items-center invisible lg:visible font-bold">
					<ul>
						<li>
							<Link href="/" className="hover:text-gray-500">
								Home
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex justify-end items-center">
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

					<div className="hidden lg:block">
						<ButtonComponent
							text="Chat Now!"
							onClick={() => {
								window.open('https://app-demo.prism.chat/', '_blank');
							}}
						/>
					</div>
				</div>
			</nav>
		</>
	);
}
