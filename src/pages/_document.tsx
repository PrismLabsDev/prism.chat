import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<div className="min-h-screen bg-gradient-to-tr from-custom-pink to-custom-blue font-poppins">
					<div className="min-h-screen bg-black/[.7]">
						<Main />
					</div>
				</div>
				<NextScript />
			</body>
		</Html>
	);
}
